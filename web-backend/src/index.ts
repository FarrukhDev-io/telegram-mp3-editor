import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Bot, InputFile } from 'grammy';
import multer from 'multer';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Fayllarni vaqtinchalik xotirada (RAM) saqlash uchun Multer sozlamasi
const upload = multer({ storage: multer.memoryStorage() });

// Botni ishga tushirish
const bot = new Bot(process.env.BOT_TOKEN || 'dummy_token');

bot.command('start', (ctx) => {
  ctx.reply('Salom! Men MP3 tahrirlovchi botman. Web appni ochish uchun tugmani bosing.', {
    reply_markup: {
      inline_keyboard: [
        [{ text: '🎵 Tahrirlovchini ochish', web_app: { url: process.env.WEB_APP_URL || 'https://google.com' } }]
      ]
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

// React app dan keladigan faylni qabul qilish
app.post('/api/upload', upload.single('audio'), async (req, res) => {
  try {
    const file = req.file;
    const initData = req.body.initData; // Telegramdan olingan tasdiq kodi

    if (!file) {
      return res.status(400).json({ error: 'Fayl topilmadi' });
    }

    if (!initData) {
       return res.status(401).json({ error: 'Ruxsat yo\'q. Ilovani Telegram ichidan oching.' });
    }

    // initData ichidan foydalanuvchi ID sini ajratib olamiz
    const urlParams = new URLSearchParams(initData);
    const userStr = urlParams.get('user');
    
    if (!userStr) {
       return res.status(401).json({ error: 'Foydalanuvchi aniqlanmadi' });
    }

    const user = JSON.parse(userStr);
    const chatId = user.id;

    console.log(`Audioni foydalanuvchiga yuborilmoqda: ${chatId}`);

    // Botingiz aynan ushbu foydalanuvchi bilan yozishgan bo'lishi shart, 
    // aks holda xato beradi (Lekin u start bosgani uchun bu muammo emas)
    await bot.api.sendAudio(chatId, new InputFile(file.buffer, file.originalname || 'tayyor_musiqa.mp3'), {
       caption: 'Mana sizning qirqilgan musiqangiz! ✂️🎧'
    });

    res.json({ success: true, message: 'Fayl muvaffaqiyatli yuborildi' });
  } catch (error) {
    console.error('API yuklashda xatolik:', error);
    res.status(500).json({ error: 'Ichki server xatoligi yuz berdi' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
  if (process.env.BOT_TOKEN) {
    bot.start();
    console.log(`✅ Bot is running!`);
  } else {
    console.log(`⚠️ BOT_TOKEN is missing in .env, bot is not started.`);
  }
});
