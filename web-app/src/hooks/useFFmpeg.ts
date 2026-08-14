import { useRef, useState, useEffect } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile } from '@ffmpeg/util';

interface ProcessOptions {
  file: File;
  title: string;
  artist: string;
  album: string;
  coverImage: File | null;
}

export function useFFmpeg() {
  const ffmpegRef = useRef<FFmpeg>(new FFmpeg());
  const [isReady, setIsReady] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorInfo, setErrorInfo] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const load = async () => {
      try {
        const ffmpeg = ffmpegRef.current;
        ffmpeg.on('progress', ({ progress }) => {
          setProgress(Math.round(progress * 100));
        });
        await ffmpeg.load();
        setIsReady(true);
      } catch (err: any) {
        setErrorInfo(err?.message || 'Failed to load FFmpeg');
      }
    };
    load();
  }, []);

  const processAudio = async (options: ProcessOptions): Promise<File | null> => {
    if (!isReady) return null;
    setIsProcessing(true);
    setProgress(0);
    setErrorInfo('');

    try {
      const { file, title, artist, album, coverImage } = options;
      const ffmpeg = ffmpegRef.current;
      await ffmpeg.writeFile('input.mp3', await fetchFile(file));
      
      let ffmpegCommand = [
        '-i', 'input.mp3',
      ];

      if (coverImage) {
        await ffmpeg.writeFile('cover.jpg', await fetchFile(coverImage));
        ffmpegCommand.push('-i', 'cover.jpg', '-map', '0:0', '-map', '1:0');
      }

      ffmpegCommand.push('-c:a', 'libmp3lame', '-c:v', 'copy', '-id3v2_version', '3');

      if (title) ffmpegCommand.push('-metadata', `title=${title}`);
      if (artist) ffmpegCommand.push('-metadata', `artist=${artist}`);
      if (album) ffmpegCommand.push('-metadata', `album=${album}`);

      ffmpegCommand.push('output.mp3');

      await ffmpeg.exec(ffmpegCommand);
      
      const data = await ffmpeg.readFile('output.mp3');
      const blob = new Blob([data as any], { type: 'audio/mpeg' });
      const safeTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'edited_audio';
      
      return new File([blob], `${safeTitle}.mp3`, { type: 'audio/mpeg' });
    } catch (err: any) {
      setErrorInfo(err?.message || 'Processing failed');
      return null;
    } finally {
      setIsProcessing(false);
    }
  };

  return { isReady, isProcessing, progress, errorInfo, processAudio };
}
