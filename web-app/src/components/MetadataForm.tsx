import React from 'react';
import { useAudioStore } from '../store/useAudioStore';

export function MetadataForm() {
  const { title, setTitle, artist, setArtist, album, setAlbum, coverImage, setCoverImage } = useAudioStore();

  const inputClass = "bg-black/20 backdrop-blur-sm border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] text-white px-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:border-[#1ed760]/50 focus:ring-1 focus:ring-[#1ed760]/50 transition-all placeholder-[#b3b3b3]/50";

  const fields = [
    { id: 'track-title', label: 'Title', value: title, onChange: setTitle, placeholder: 'Track name' },
    { id: 'track-artist', label: 'Artist', value: artist, onChange: setArtist, placeholder: 'Artist name' },
    { id: 'track-album', label: 'Album', value: album, onChange: setAlbum, placeholder: 'Album name' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage && selectedImage.type.includes('image')) {
      setCoverImage(selectedImage);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] p-6 rounded-3xl flex flex-col gap-5 mt-2">
      <h4 className="text-base font-bold text-white">Track Details</h4>
      
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label htmlFor={field.id} className="text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">{field.label}</label>
          <input 
            id={field.id}
            type="text" 
            value={field.value} 
            onChange={e => field.onChange(e.target.value)} 
            className={inputClass}
            placeholder={field.placeholder}
            aria-label={`Enter ${field.label}`}
          />
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <label htmlFor="cover-upload" className="text-xs font-bold text-[#b3b3b3] uppercase tracking-wider">Cover Art</label>
        <div className="relative overflow-hidden inline-block w-fit">
          <button 
            type="button" 
            aria-hidden="true" 
            tabIndex={-1} 
            className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] hover:bg-white/10 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all focus-within:ring-2 focus-within:ring-[#1ed760]"
          >
            {coverImage ? 'Change Image...' : 'Browse Image...'}
          </button>
          <input 
            id="cover-upload"
            type="file" 
            accept="image/jpeg, image/png"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleImageUpload}
            aria-label="Upload cover image"
          />
        </div>
      </div>
    </div>
  );
}
