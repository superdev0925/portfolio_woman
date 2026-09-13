"use client";

import { useEffect, useState } from "react";

const BASE_HEIGHT = 1080;

export function applyRemScale() {
  document.documentElement.style.fontSize =
    (document.documentElement.clientHeight / BASE_HEIGHT) * 100 + "px";
}

export function useRemScale() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const setFont = () => {
      applyRemScale();
      setReady(true);
    };

    setFont();
    window.addEventListener("resize", setFont);
    window.addEventListener("load", setFont);

    return () => {
      window.removeEventListener("resize", setFont);
      window.removeEventListener("load", setFont);
    };
  }, []);

  return ready;
}
