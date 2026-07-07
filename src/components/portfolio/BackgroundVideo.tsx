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

    if (playing) {
      void video.play();
    } else {
      video.pause();
    }
  }, [playing]);

  return (
    <div className="vid">
      <video
        ref={videoRef}
        id={id}
        src={src}
        preload="auto"
        muted
        autoPlay
        loop
        playsInline
      />
    </div>
  );
}
