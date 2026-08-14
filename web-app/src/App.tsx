import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useFFmpeg } from './hooks/useFFmpeg';
import { useWaveSurfer } from './hooks/useWaveSurfer';
import { MetadataForm } from './components/MetadataForm';
import { BottomPlayer } from './components/BottomPlayer';
import { CoverPreview } from './components/CoverPreview';
import Ferrofluid from './components/Ferrofluid';
import SpecularButton from './components/SpecularButton';
import './index.css';

function App() {
  const { isReady, isProcessing, progress, errorInfo: ffmpegError, processAudio } = useFFmpeg();
  
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');
  
  const { waveformRef, isPlaying, togglePlay } = useWaveSurfer(file);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.includes('audio')) {
      setFile(selectedFile);
      setTitle(selectedFile.name.replace(/\.[^/.]+$/, ""));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage && selectedImage.type.includes('image')) {
      setCoverImage(selectedImage);
    }
  };

  const handleProcess = async () => {
    if (!file) return;

    setStatus('Processing audio...');
    const resultFile = await processAudio({
      file,
      title,
      artist,
      album,
      coverImage
    });

    if (!resultFile) {
      setStatus('Failed to process audio.');
      return;
    }

    setStatus('Downloading file...');
    
    try {
      const url = URL.createObjectURL(resultFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = resultFile.name || 'edited_audio.mp3';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setStatus('Success! File downloaded to your device.');
    } catch (err: any) {
      setStatus(`Download failed: ${err.message}`);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white pb-28 font-sans antialiased overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Ferrofluid 
          colors={['#1ed760', '#1db954', '#121212', '#000000']} 
          opacity={0.5} 
          speed={0.5} 
          turbulence={1.5} 
          mouseInteraction={true} 
        />
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto p-6">
        <header className="flex flex-col gap-2 mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Studio</h1>
          <p className="text-[#b3b3b3] text-sm font-medium">Professional Audio Editor</p>
        </header>
        
        {ffmpegError && (
          <div className="p-3 bg-red-900/30 text-red-500 rounded-lg mb-6 text-xs font-medium border border-red-900/50">
            Error: {ffmpegError}
          </div>
        )}

        {file && (
          <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-4">
            <CoverPreview coverImage={coverImage} />
            
            <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.5)] rounded-3xl relative p-4">
              <div className="w-full" ref={waveformRef}></div>
            </div>
            
            <MetadataForm 
              title={title} setTitle={setTitle}
              artist={artist} setArtist={setArtist}
              album={album} setAlbum={setAlbum}
              coverImage={coverImage} handleImageUpload={handleImageUpload}
            />

            <div className="md:hidden flex justify-center mt-4">
              <SpecularButton 
                tint="#1ed760" tintOpacity={0.2} blur={16} 
                textColor="#1ed760" lineColor="#ffffff" baseColor="#1ed760"
                autoAnimate={true} radius={30} size="md" className="w-full"
                onClick={handleProcess}
                disabled={isProcessing || !isReady}
              >
                <div className="font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 w-full">
                  {isProcessing ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> {progress}%
                    </>
                  ) : 'Save Track'}
                </div>
              </SpecularButton>
            </div>

            {status && <div className="text-center text-xs font-medium text-[#1ed760] mt-2">{status}</div>}
          </div>
        )}

        <BottomPlayer 
          file={file}
          title={title} 
          artist={artist} 
          fileName={file ? file.name : ''}
          coverImage={coverImage}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          handleProcess={handleProcess}
          isProcessing={isProcessing}
          progress={progress}
          isReady={isReady}
          onUpload={handleFileUpload}
        />
      </div>
    </div>
  );
}

export default App;
