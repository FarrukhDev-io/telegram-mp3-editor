import { Upload } from 'lucide-react';
import { useObjectURL } from '../hooks/useObjectURL';
import { useAudioStore } from '../store/useAudioStore';

export function CoverPreview() {
  const { coverImage } = useAudioStore();
  const imageUrl = useObjectURL(coverImage);

  return (
    <div className="w-full max-w-[280px] aspect-square mx-auto rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden transition-all hover:bg-white/10">
      {imageUrl ? (
        <img src={imageUrl} alt="Cover" className="w-full h-full object-cover" />
      ) : (
        <div className="flex flex-col items-center gap-2 text-[#535353]">
          <Upload size={48} strokeWidth={1} />
          <span className="text-xs font-bold tracking-widest">NO COVER</span>
        </div>
      )}
    </div>
  );
}

