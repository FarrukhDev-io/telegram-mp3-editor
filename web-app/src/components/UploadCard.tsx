import { Upload } from 'lucide-react';

interface Props {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadCard({ onUpload }: Props) {
  return (
    <label className="flex flex-col items-center justify-center gap-4 bg-[#121212] hover:bg-[#1a1a1a] border border-dashed border-[#282828] hover:border-[#404040] rounded-xl p-16 text-center cursor-pointer transition-colors group">
      <div className="bg-[#2a2a2a] p-4 rounded-full group-hover:scale-105 transition-transform">
        <Upload size={32} className="text-[#b3b3b3]" />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1">Choose audio</h3>
        <p className="text-[#b3b3b3] text-sm">Upload any MP3 or audio file to get started</p>
      </div>
      <input 
        type="file" 
        accept="audio/mp3, audio/mpeg, audio/wav, audio/m4a, audio/ogg" 
        className="hidden" 
        onChange={onUpload} 
      />
    </label>
  );
}
