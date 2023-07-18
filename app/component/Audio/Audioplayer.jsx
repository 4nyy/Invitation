// pages/index.js
'use client';
import { useState, useEffect,useRef } from 'react';
import { playAudio, pauseAudio } from './Audiocompile';

import './Audioplayer.css';
import music from './source/audio1.mp3'
const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handleToggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      // Replace 'URL_AUDIO_FILE' with the actual URL of your audio file
      playAudio(music);
    }
    setIsPlaying((prevState) => !prevState);
  };

  const [isVisible, setIsVisible] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    // Fungsi untuk mengatur visibilitas berdasarkan scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(prevScrollY.current > currentScrollY);
      prevScrollY.current = currentScrollY;
    };

    // Tambahkan event listener untuk mendeteksi scroll
    window.addEventListener('scroll', handleScroll);

    // Jangan lupa untuk membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <button className={isVisible?'Audio-toggle':'Audio-toggle hidden'} onClick={handleToggleAudio}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
