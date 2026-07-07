"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    void audio.play().then(() => {
      setIsPlaying(true);
      setHasStarted(true);
    });
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  useEffect(() => {
    const startOnInteraction = () => {
      if (!hasStarted) {
        play();
      }
    };

    document.addEventListener("mousedown", startOnInteraction);
    document.addEventListener("touchstart", startOnInteraction);

    return () => {
      document.removeEventListener("mousedown", startOnInteraction);
      document.removeEventListener("touchstart", startOnInteraction);
    };
  }, [hasStarted, play]);

  return {
    audioRef,
    isPlaying,
    toggle,
    play,
    pause,
  };
}
