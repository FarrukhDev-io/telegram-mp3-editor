import ID3Writer from 'browser-id3-writer';
import { useAudioStore } from '../store/useAudioStore';

export function useID3Editor() {
  const { setProgress, setIsProcessing, setStatus } = useAudioStore();

  const processAudio = async (
    file: File,
    title: string,
    artist: string,
    album: string,
    coverImage: File | null
  ): Promise<File | null> => {
    try {
      setIsProcessing(true);
      setStatus('Reading file...');
      setProgress(10);

      const arrayBuffer = await file.arrayBuffer();
      setProgress(30);

      const writer = new ID3Writer(arrayBuffer);
      
      if (title) writer.setFrame('TIT2', title);
      if (artist) writer.setFrame('TPE1', [artist]);
      if (album) writer.setFrame('TALB', album);

      if (coverImage) {
        setStatus('Processing image...');
        const imageBuffer = await coverImage.arrayBuffer();
        
        const mimeType = coverImage.type || 'image/jpeg';
        
        writer.setFrame('APIC', {
          type: 3,
          data: imageBuffer,
          description: 'Cover',
          useUnicodeEncoding: false
        });
      }

      setProgress(60);
      setStatus('Writing ID3 tags...');
      writer.addTag();
      
      setProgress(90);
      const taggedBuffer = writer.arrayBuffer;
      const blob = new Blob([taggedBuffer], { type: 'audio/mpeg' });
      const resultFile = new File([blob], file.name || 'edited_audio.mp3', { type: 'audio/mpeg' });
      
      setProgress(100);
      setIsProcessing(false);
      return resultFile;
      
    } catch (error) {
      console.error('Error writing ID3 tags:', error);
      setIsProcessing(false);
      return null;
    }
  };

  return { processAudio };
}
