// utils/audioManager.js
import { Howl } from 'howler';

let sound = null;

export const playAudio = (url) => {
  if (sound) {
    sound.stop();
    sound.unload();
  }

  sound = new Howl({
    src: [url],
    html5: true, // Force to use HTML5 audio for better compatibility
    onend: () => {
      sound = null; // Reset the sound variable after audio ends
    },
  });

  sound.play();
};

export const pauseAudio = () => {
  if (sound) {
    sound.pause();
  }
};
