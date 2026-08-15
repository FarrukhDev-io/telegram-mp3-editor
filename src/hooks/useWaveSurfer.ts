import { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { useAudioStore } from '../store/useAudioStore';

export function useWaveSurfer() {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const { file, setIsPlaying } = useAudioStore();

  useEffect(() => {
    if (!file || !waveformRef.current) return;

    if (wavesurfer.current) {
      wavesurfer.current.destroy();
    }

    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#535353',
      progressColor: '#1ed760',
      cursorColor: '#ffffff',
      barWidth: 3,
      barGap: 2,
      barRadius: 3,
      height: 80,
      normalize: true,
      cursorWidth: 2,
    });

    const objectUrl = URL.createObjectURL(file);
    wavesurfer.current.load(objectUrl);

    wavesurfer.current.on('play', () => setIsPlaying(true));
    wavesurfer.current.on('pause', () => setIsPlaying(false));

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
      URL.revokeObjectURL(objectUrl);
    };
  }, [file, setIsPlaying]);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  return { waveformRef, togglePlay };
}

