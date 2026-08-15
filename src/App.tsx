import React, { useEffect, useState } from 'react';
import { useAudioStore } from './store/useAudioStore';
import { MetadataForm } from './components/MetadataForm';
import { BottomPlayer } from './components/BottomPlayer';
import { CoverPreview } from './components/CoverPreview';
import Ferrofluid from './components/Ferrofluid';
import { useWaveSurfer } from './hooks/useWaveSurfer';
import './index.css';

const MemoizedFerrofluid = React.memo(Ferrofluid);
const MemoizedCoverPreview = React.memo(CoverPreview);

function App() {
  const { file, status } = useAudioStore();
  const { waveformRef } = useWaveSurfer();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white pb-28 font-sans antialiased overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        {!isMobile ? (
          <MemoizedFerrofluid 
            colors={['#1ed760', '#1db954', '#121212', '#000000']} 
            opacity={0.5} 
            speed={0.5} 
            turbulence={1.5} 
            mouseInteraction={true} 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#121212] to-black" />
        )}
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto p-6">
        <header className="flex flex-col gap-2 mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Studio</h1>
          <p className="text-[#b3b3b3] text-sm font-medium">MP3 Metadata Tagger</p>
        </header>
        
        {status && (
          <div className={`p-3 rounded-lg mb-6 text-xs font-medium border ${status.toLowerCase().includes('failed') || status.toLowerCase().includes('error') ? 'bg-red-900/30 text-red-500 border-red-900/50' : 'bg-green-900/30 text-[#1ed760] border-green-900/50'}`}>
            {status}
          </div>
        )}

        {file && (
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-4">
            <MemoizedCoverPreview />
            
            <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] rounded-3xl relative p-4">
              <div className="w-full" ref={waveformRef}></div>
            </div>

            <MetadataForm />
          </div>
        )}
      </div>

      <BottomPlayer />
    </div>
  );
}

export default App;
