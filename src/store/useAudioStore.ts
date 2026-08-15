import { create } from 'zustand';

interface AudioState {
  file: File | null;
  title: string;
  artist: string;
  album: string;
  coverImage: File | null;
  isPlaying: boolean;
  progress: number;
  status: string;
  isProcessing: boolean;
  
  setFile: (file: File | null) => void;
  setTitle: (title: string) => void;
  setArtist: (artist: string) => void;
  setAlbum: (album: string) => void;
  setCoverImage: (coverImage: File | null) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setProgress: (progress: number) => void;
  setStatus: (status: string) => void;
  setIsProcessing: (isProcessing: boolean) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  file: null,
  title: '',
  artist: '',
  album: '',
  coverImage: null,
  isPlaying: false,
  progress: 0,
  status: '',
  isProcessing: false,

  setFile: (file) => set({ file }),
  setTitle: (title) => set({ title }),
  setArtist: (artist) => set({ artist }),
  setAlbum: (album) => set({ album }),
  setCoverImage: (coverImage) => set({ coverImage }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setProgress: (progress) => set({ progress }),
  setStatus: (status) => set({ status }),
  setIsProcessing: (isProcessing) => set({ isProcessing }),
}));
