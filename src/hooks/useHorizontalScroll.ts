"use client";

import { useEffect, useState, type RefObject } from "react";

const SCROLL_HEIGHT = 10000;

export interface ScrollState {
  percent: number;
  showCareerPoints: boolean;
  showAbout: boolean;
  showShowcase: boolean;
  showProjects: boolean;
  showSkills: boolean;
  hideFixedUI: boolean;
}

const initialState: ScrollState = {
  percent: 0,
  showCareerPoints: false,
  showAbout: false,
  showShowcase: false,
  showProjects: false,
  showSkills: false,
  hideFixedUI: false,
};

function getScrollState(percent: number): ScrollState {
  return {
    percent,
    showCareerPoints: percent > 0.15,
    showAbout: percent > 0.41,
    showShowcase: percent > 0.62,
    showProjects: percent > 0.72,
    showSkills: percent > 0.92,
    hideFixedUI: percent > 0.97,
  };
}

export function useHorizontalScroll(
  scrollRef: RefObject<HTMLElement | null>,
  onScrollChange?: (state: ScrollState) => void,
) {
  const [scrollState, setScrollState] = useState<ScrollState>(initialState);

  useEffect(() => {
    document.body.style.height = `${SCROLL_HEIGHT}px`;

    const updateScroll = () => {
      const element = scrollRef.current;
      if (!element) return;

      const totalHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const winWidth = window.innerWidth;
      const currY = window.scrollY;
      const diff = totalHeight - winHeight;
      const percent = diff !== 0 ? currY / diff : 0;

      let deltaW = element.offsetWidth - winWidth;
      if (deltaW <= 0) {
        deltaW = element.offsetWidth;
      }

      const pos = Math.floor(deltaW * percent) * -1;
      element.style.transform = `translateX(${pos}px)`;

      const nextState = getScrollState(percent);
      setScrollState(nextState);
      onScrollChange?.(nextState);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      document.body.style.height = "";
    };
  }, [scrollRef, onScrollChange]);

  return scrollState;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
