import { Play, Pause, Upload } from 'lucide-react';
import SpecularButton from './SpecularButton';
import { useObjectURL } from '../hooks/useObjectURL';
import { useAudioStore } from '../store/useAudioStore';
import { useID3Editor } from '../hooks/useID3Editor';
import { useWaveSurfer } from '../hooks/useWaveSurfer';

export function BottomPlayer() {
  const { file, title, artist, coverImage, isPlaying, isProcessing, progress, setFile, setTitle } = useAudioStore();
  const { processAudio } = useID3Editor();
  const { togglePlay } = useWaveSurfer();
  
  const imageUrl = useObjectURL(coverImage);

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.includes('audio')) {
      setFile(selectedFile);
      setTitle(selectedFile.name.replace(/\.[^/.]+$/, ""));
    }
  };

  const handleProcess = async () => {
    if (!file) return;
    const { title, artist, album, coverImage } = useAudioStore.getState();
    const resultFile = await processAudio(file, title, artist, album, coverImage);
    
    if (resultFile) {
      const url = URL.createObjectURL(resultFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = resultFile.name || 'edited_audio.mp3';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  if (!file) {
    return (
      <div className="fixed bottom-0 left-0 right-0 h-[160px] bg-gradient-to-b from-transparent via-black/80 to-black flex items-center justify-center pt-10 px-4 z-50 animate-in slide-in-from-bottom-10 duration-500">
        <div className="relative inline-block">
          <SpecularButton 
            tint="#1ed760" tintOpacity={0.2} blur={16} 
            textColor="#1ed760" lineColor="#ffffff" baseColor="#1ed760"
            autoAnimate={true} size="lg" radius={30}
          >
            <div className="flex items-center gap-2 font-bold tracking-widest uppercase">
              <Upload size={18} strokeWidth={2.5} /> Choose Audio
            </div>
          </SpecularButton>
          <input 
            type="file" 
            accept="audio/mp3, audio/mpeg, audio/wav, audio/m4a, audio/ogg" 
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
            onChange={onUpload} 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[140px] bg-gradient-to-b from-transparent via-black/90 to-black flex items-end pb-6 justify-between px-4 z-50">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="w-14 h-14 rounded-md bg-[#282828] overflow-hidden flex-shrink-0 shadow-lg">
          {imageUrl && (
            <img src={imageUrl} alt="Thumb" className="w-full h-full object-cover" />
          )}
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-white text-sm font-medium truncate">{title || file.name}</span>
          <span className="text-[#b3b3b3] text-xs truncate">{artist || 'Unknown Artist'}</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center flex-1">
        <button 
          className="w-8 h-8 rounded-full bg-white hover:scale-105 active:scale-95 transition-transform flex items-center justify-center text-black"
          onClick={togglePlay} 
          disabled={isProcessing}
        >
          {isPlaying ? <Pause size={16} fill="#000" strokeWidth={0} /> : <Play size={16} fill="#000" strokeWidth={0} className="ml-1"/>}
        </button>
      </div>

      <div className="hidden md:flex justify-end flex-1">
         <SpecularButton 
           tint="#1ed760" tintOpacity={0.2} blur={16} 
           textColor="#1ed760" lineColor="#ffffff" baseColor="#1ed760"
           autoAnimate={true} radius={30} size="md"
           disabled={isProcessing}
           onClick={handleProcess}
         >
           <div className="font-bold uppercase tracking-widest text-sm">
             {isProcessing ? `Saving... ${progress}%` : 'Save Track'}
           </div>
         </SpecularButton>
      </div>
    </div>
  );
}

