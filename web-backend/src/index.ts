import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Bot, InputFile, session, Context, SessionFlavor } from 'grammy';
import { FileFlavor, hydrateFiles } from '@grammyjs/files';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

dotenv.config();

// Session types
interface SessionData {
  step: 'idle' | 'awaiting_title' | 'awaiting_artist' | 'awaiting_album' | 'awaiting_cover';
  currentAudioFileId: string | null;
  currentAudioExt: string;
  metadata: {
    title?: string;
    artist?: string;
    album?: string;
    coverFilePath?: string;
  };
}

type MyContext = FileFlavor<Context> & SessionFlavor<SessionData>;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../web-app/dist')));
const upload = multer({ storage: multer.memoryStorage() });

const botToken = process.env.BOT_TOKEN || 'dummy_token';
const bot = new Bot<MyContext>(botToken);

// Hydrate files plugin
bot.api.config.use(hydrateFiles(bot.token));

// Add session middleware
function initial(): SessionData {
  return { step: 'idle', currentAudioFileId: null, currentAudioExt: '', metadata: {} };
}
bot.use(session({ initial }));

const TMP_DIR = path.join(__dirname, '../temp');
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR);

// Bot Commands
bot.command('start', (ctx) => {
  ctx.reply('Salom! Men MP3 tahrirlovchi botman.\n\n🎵 Menga biron bir musiqani (MP3/Audio) tashlang, va men uning nomi, qo\'shiqchisi va rasmini o\'zgartirib beraman!');
});

// Handle incoming Audio files
bot.on(['message:audio', 'message:voice', 'message:document'], async (ctx) => {
  const audio = ctx.msg.audio || ctx.msg.voice || ctx.msg.document;
  if (!audio) return;
  
  if (ctx.msg.document && !ctx.msg.document.mime_type?.includes('audio')) {
      return;
  }

  const fileId = audio.file_id;
  const fileName = (audio as any).file_name || 'audio.mp3';
  const ext = path.extname(fileName) || '.mp3';

  ctx.session.currentAudioFileId = fileId;
  ctx.session.currentAudioExt = ext;
  ctx.session.step = 'idle';
  ctx.session.metadata = {}; // reset metadata

  await sendMenu(ctx, '🎵 Fayl qabul qilindi! Nimasini o\'zgartiramiz?');
});

// Send menu helper
async function sendMenu(ctx: MyContext, text: string) {
  await ctx.reply(text, {
    reply_markup: {
      inline_keyboard: [
        [{ text: '✏️ Nomi (Title)', callback_data: 'edit_title' }, { text: '🎤 Qo\'shiqchi (Artist)', callback_data: 'edit_artist' }],
        [{ text: '💽 Albom (Album)', callback_data: 'edit_album' }, { text: '🖼 Rasm qo\'yish', callback_data: 'edit_cover' }],
        [{ text: '✅ Tayyor (Saqlash va Jo\'natish)', callback_data: 'finish' }]
      ]
    }
  });
}

// Callback queries
bot.on('callback_query:data', async (ctx) => {
  const data = ctx.callbackQuery.data;
  await ctx.answerCallbackQuery();

  if (!ctx.session.currentAudioFileId) {
    return ctx.reply('Iltimos, avval menga biron bir musiqa tashlang!');
  }

  if (data === 'edit_title') {
    ctx.session.step = 'awaiting_title';
    await ctx.reply('Musiqaning yangi nomini yozib yuboring:');
  } else if (data === 'edit_artist') {
    ctx.session.step = 'awaiting_artist';
    await ctx.reply('Qo\'shiqchining (Artist) ismini yozib yuboring:');
  } else if (data === 'edit_album') {
    ctx.session.step = 'awaiting_album';
    await ctx.reply('Albom nomini yozib yuboring:');
  } else if (data === 'edit_cover') {
    ctx.session.step = 'awaiting_cover';
    await ctx.reply('Musiqa uchun yangi rasm tashlang (oddiy rasm shaklida):');
  } else if (data === 'finish') {
    await processAudio(ctx);
  }
});

// Handle text and photos for metadata
bot.on('message', async (ctx) => {
  const step = ctx.session.step;
  if (step === 'idle' || !ctx.session.currentAudioFileId) {
    if (ctx.msg.text) {
      await ctx.reply('🎧 Menga biron bir musiqa (MP3) tashlang, va men uni tahrirlab beraman!');
    }
    return;
  }

  if (step === 'awaiting_title' && ctx.msg.text) {
    ctx.session.metadata.title = ctx.msg.text;
    ctx.session.step = 'idle';
    await sendMenu(ctx, `✅ Nomi "${ctx.msg.text}" ga o'zgartirildi.\nYana nima qilamiz?`);
  } 
  else if (step === 'awaiting_artist' && ctx.msg.text) {
    ctx.session.metadata.artist = ctx.msg.text;
    ctx.session.step = 'idle';
    await sendMenu(ctx, `✅ Qo'shiqchi "${ctx.msg.text}" ga o'zgartirildi.\nYana nima qilamiz?`);
  }
  else if (step === 'awaiting_album' && ctx.msg.text) {
    ctx.session.metadata.album = ctx.msg.text;
    ctx.session.step = 'idle';
    await sendMenu(ctx, `✅ Albom "${ctx.msg.text}" ga o'zgartirildi.\nYana nima qilamiz?`);
  }
  else if (step === 'awaiting_cover' && ctx.msg.photo) {
    // Eng katta rasmni olamiz
    const photo = ctx.msg.photo![ctx.msg.photo!.length - 1]!;
    const file = await ctx.api.getFile(photo.file_id);
    const coverPath = path.join(TMP_DIR, `cover_${Date.now()}.jpg`);
    await file.download(coverPath);
    ctx.session.metadata.coverFilePath = coverPath;
    ctx.session.step = 'idle';
    await sendMenu(ctx, `✅ Rasm qabul qilindi.\nYana nima qilamiz?`);
  }
});

// Process audio using FFmpeg
async function processAudio(ctx: MyContext) {
  const processingMsg = await ctx.reply('Fayl qayta ishlanmoqda, biroz kuting... ⏳');
  
  try {
    const fileId = ctx.session.currentAudioFileId!;
    const file = await ctx.api.getFile(fileId);
    
    const inputPath = path.join(TMP_DIR, `input_${Date.now()}${ctx.session.currentAudioExt}`);
    const outputPath = path.join(TMP_DIR, `output_${Date.now()}.mp3`);
    
    await file.download(inputPath);

    const meta = ctx.session.metadata;
    let ffmpegCmd = `ffmpeg -y -i "${inputPath}"`;

    if (meta.coverFilePath) {
      ffmpegCmd += ` -i "${meta.coverFilePath}" -map 0:a -map 1:v`;
      ffmpegCmd += ` -c:a libmp3lame -c:v copy -id3v2_version 3`;
    } else {
      ffmpegCmd += ` -map 0:a -c:a libmp3lame -id3v2_version 3`;
    }

    if (meta.title) ffmpegCmd += ` -metadata title="${meta.title.replace(/"/g, '\\"')}"`;
    if (meta.artist) ffmpegCmd += ` -metadata artist="${meta.artist.replace(/"/g, '\\"')}"`;
    if (meta.album) ffmpegCmd += ` -metadata album="${meta.album.replace(/"/g, '\\"')}"`;

    ffmpegCmd += ` "${outputPath}"`;

    console.log("Executing:", ffmpegCmd);
    await execPromise(ffmpegCmd);

    const finalTitle = meta.title ? meta.title : 'tayyor_musiqa';
    
    await ctx.replyWithAudio(new InputFile(outputPath, `${finalTitle}.mp3`), {
      caption: 'Mana sizning tayyor musiqangiz! 🎧',
    });

    // Cleanup files
    fs.unlinkSync(inputPath);
    fs.unlinkSync(outputPath);
    if (meta.coverFilePath && fs.existsSync(meta.coverFilePath)) {
      fs.unlinkSync(meta.coverFilePath);
    }
    
    // Reset session
    ctx.session = initial();

    await ctx.api.deleteMessage(ctx.chat!.id, processingMsg.message_id);

  } catch (err: any) {
    console.error(err);
    await ctx.reply('Kechirasiz, xatolik yuz berdi: ' + err.message);
  }
}

app.post('/api/upload', upload.single('audio'), async (req, res) => {
  try {
    const file = req.file;
    const initData = req.body.initData;
    if (!file || !initData) return res.status(400).json({ error: 'Fayl topilmadi' });
    const urlParams = new URLSearchParams(initData);
    const userStr = urlParams.get('user');
    if (!userStr) return res.status(401).json({ error: 'Foydalanuvchi aniqlanmadi' });
    const user = JSON.parse(userStr);
    
    await bot.api.sendAudio(user.id, new InputFile(file.buffer, file.originalname || 'tayyor.mp3'));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Ichki xatolik' });
  }
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../web-app/dist/index.html'));
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
  if (process.env.BOT_TOKEN) {
    bot.start();
    console.log(`✅ Bot is running!`);
  }
});
