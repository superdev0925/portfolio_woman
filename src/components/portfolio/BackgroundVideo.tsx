"use client";

import { useEffect, useRef } from "react";

interface BackgroundVideoProps {
  id: string;
  src: string;
  playing: boolean;
}

export function BackgroundVideo({ id, src, playing }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!playing) {
      video.pause();
      return;
    }

    const playAttempt = video.play();
    if (playAttempt) {
      void playAttempt.catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      });
    }

    return () => {
      video.pause();
    };
  }, [playing]);

  return (
    <div className="vid">
      <video
        ref={videoRef}
        id={id}
        src={src}
        preload="auto"
        muted
        loop
        playsInline
      />
    </div>
  );
}
