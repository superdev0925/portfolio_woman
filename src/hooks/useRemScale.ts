"use client";

import { useEffect } from "react";

const BASE_HEIGHT = 1080;

export function useRemScale() {
  useEffect(() => {
    const setFont = () => {
      document.documentElement.style.fontSize =
        (document.documentElement.clientHeight / BASE_HEIGHT) * 100 + "px";
    };

    setFont();
    window.addEventListener("resize", setFont);
    window.addEventListener("load", setFont);

    return () => {
      window.removeEventListener("resize", setFont);
      window.removeEventListener("load", setFont);
      document.documentElement.style.fontSize = "";
    };
  }, []);
}
