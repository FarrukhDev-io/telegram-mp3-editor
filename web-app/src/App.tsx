import { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';
import { Upload, Play, Pause, Scissors, Loader2 } from 'lucide-react';
import './index.css';

// Telegram WebApp ni xavfsiz olish uchun yordamchi funksiya
const getWebApp = () => {
  return (window as any).Telegram?.WebApp;
};

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState<string>('');
  const [errorInfo, setErrorInfo] = useState<string>('');
  
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const regions = useRef<RegionsPlugin | null>(null);
  const ffmpegRef = useRef<FFmpeg>(new FFmpeg());

  useEffect(() => {
    // Initialize Telegram Web App safely
    try {
      const tg = getWebApp();
      if (tg) {
        if (typeof tg.ready === 'function') tg.ready();
        if (typeof tg.expand === 'function') tg.expand();
      }
    } catch (e: any) {
      console.warn("Telegram WebApp error:", e);
      setErrorInfo(e?.message || 'TG init error');
    }
    
    // Setup FFmpeg
    loadFFmpeg();

    return () => {
      if (wavesurfer.current) wavesurfer.current.destroy();
    };
  }, []);

  const loadFFmpeg = async () => {
    const ffmpeg = ffmpegRef.current;
    if (!ffmpeg.loaded) {
      try {
        setStatus('Kutubxonalar yuklanmoqda...');
        await ffmpeg.load();
        setStatus('');
      } catch (err: any) {
        console.error('FFmpeg yuklanishida xatolik:', err);
        setErrorInfo(`FFmpeg xatosi: ${err?.message || 'Noma\'lum xato'}`);
        setStatus('Xatolik: Tizim ishga tushmadi');
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.includes('audio')) {
      setFile(selectedFile);
      initWaveSurfer(selectedFile);
    }
  };

  const initWaveSurfer = (audioFile: File) => {
    if (wavesurfer.current) {
      wavesurfer.current.destroy();
    }

    if (!waveformRef.current) return;

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#b3d4ff',
      progressColor: '#007aff',
      cursorColor: '#ff3b30',
      barWidth: 2,
      barGap: 1,
      height: 120,
      normalize: true,
    });

    regions.current = wavesurfer.current.registerPlugin(RegionsPlugin.create());

    const objectUrl = URL.createObjectURL(audioFile);
    wavesurfer.current.load(objectUrl);

    wavesurfer.current.on('ready', () => {
      const duration = wavesurfer.current?.getDuration() || 0;
      regions.current?.addRegion({
        start: 0,
        end: Math.min(10, duration),
        content: 'Kesish',
        color: 'rgba(0, 122, 255, 0.2)',
        drag: true,
        resize: true,
      });
    });

    wavesurfer.current.on('play', () => setIsPlaying(true));
    wavesurfer.current.on('pause', () => setIsPlaying(false));
  };

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  const handleProcess = async () => {
    if (!file || !regions.current || !wavesurfer.current) return;
    
    const activeRegions = regions.current.getRegions();
    if (activeRegions.length === 0) return;

    const region = activeRegions[0];
    const start = region.start;
    const duration = region.end - region.start;

    setIsProcessing(true);
    setStatus('Audioni qirqish boshlandi (Brauzerda)...');
    setErrorInfo('');

    try {
      const ffmpeg = ffmpegRef.current;
      
      await ffmpeg.writeFile('input.mp3', await fetchFile(file));

      await ffmpeg.exec([
        '-i', 'input.mp3',
        '-ss', start.toString(),
        '-t', duration.toString(),
        '-c', 'copy',
        'output.mp3'
      ]);

      setStatus('Fayl tayyor! Serverga yuborilmoqda...');

      const data = await ffmpeg.readFile('output.mp3');
      const blob = new Blob([data], { type: 'audio/mpeg' });
      const finalFile = new File([blob], `cut_${file.name}`, { type: 'audio/mpeg' });

      const formData = new FormData();
      formData.append('audio', finalFile);
      
      const tg = getWebApp();
      const tgInitData = tg?.initData || '';
      formData.append('initData', tgInitData);

      // Frontend va Backend bitta joydan (proxy) ishlagani uchun faqat /api/upload yozish yetarli
      const apiUrl = '/api/upload';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('Muvaffaqiyatli yuborildi! Chatni tekshiring.');
        setTimeout(() => {
          if (typeof tg?.close === 'function') {
             tg.close();
          }
        }, 2000);
      } else {
        const errText = await response.text();
        throw new Error(errText || "Server xatoligi");
      }

    } catch (error: any) {
      console.error(error);
      setStatus('Xatolik yuz berdi!');
      setErrorInfo(error?.message || 'Noma\'lum xato');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🎵 MP3 Tahrirlovchi</h1>
        <p>Audioni kesish va bot orqali qabul qilish</p>
      </div>
      
      {errorInfo && (
        <div style={{ padding: '10px', backgroundColor: '#ffebee', color: '#c62828', borderRadius: '8px', marginBottom: '16px', fontSize: '12px' }}>
          Tizim xatosi: {errorInfo}
        </div>
      )}

      {!file ? (
        <label className="upload-card">
          <Upload size={48} className="upload-icon" />
          <h3>MP3 faylni tanlang</h3>
          <p>Telefoningizdan fayl yuklang</p>
          <input 
            type="file" 
            accept="audio/mp3, audio/mpeg" 
            style={{ display: 'none' }} 
            onChange={handleFileUpload} 
          />
        </label>
      ) : (
        <div className="editor-card">
          <h3>{file.name}</h3>
          
          <div className="waveform-container" ref={waveformRef}></div>
          
          <div className="controls">
            <button className="btn-circle" onClick={togglePlay} disabled={isProcessing}>
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>

          <div className="action-buttons">
            <button 
              className="btn-primary" 
              onClick={() => {
                setFile(null);
                setStatus('');
                setErrorInfo('');
              }}
              style={{ backgroundColor: 'var(--tg-theme-secondary-bg-color)', color: 'var(--tg-theme-text-color)' }}
              disabled={isProcessing}
            >
              Boshqasini tanlash
            </button>
            <button 
              className="btn-primary" 
              onClick={handleProcess}
              disabled={isProcessing || !ffmpegRef.current.loaded}
            >
              {isProcessing ? (
                <Loader2 size={20} className="animate-spin mx-auto" />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Scissors size={20} /> Kesish va Jo'natish
                </div>
              )}
            </button>
          </div>

          {status && <div className="status-text">{status}</div>}
        </div>
      )}
    </div>
  );
}

export default App;
