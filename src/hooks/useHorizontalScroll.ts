"use client";

import { useEffect, useState, type RefObject } from "react";

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
    showCareerPoints: percent > 0.12,
    showAbout: percent > 0.41,
    showShowcase: percent > 0.62,
    showProjects: percent > 0.48,
    showSkills: percent > 0.62,
    hideFixedUI: percent > 0.9,
  };
}

function syncBodyToWrap(element: HTMLElement) {
  const travel = Math.max(element.offsetWidth - window.innerWidth, 0);
  document.body.style.height = `${travel + window.innerHeight}px`;
}

export function useHorizontalScroll(
  scrollRef: RefObject<HTMLElement | null>,
  onScrollChange?: (state: ScrollState) => void,
) {
  const [scrollState, setScrollState] = useState<ScrollState>(initialState);

  useEffect(() => {
    const updateScroll = () => {
      const element = scrollRef.current;
      if (!element) return;

      const totalHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const winWidth = window.innerWidth;
      const currY = window.scrollY;
      const diff = totalHeight - winHeight;
      const percent = diff !== 0 ? Math.min(currY / diff, 1) : 0;

      const deltaW = Math.max(element.offsetWidth - winWidth, 0);
      const pos = Math.floor(deltaW * percent) * -1;
      element.style.transform = `translateX(${pos}px)`;

      const nextState = getScrollState(percent);
      setScrollState(nextState);
      onScrollChange?.(nextState);
    };

    const updateLayout = () => {
      if (scrollRef.current) {
        syncBodyToWrap(scrollRef.current);
      }
      updateScroll();
    };

    updateLayout();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateLayout);
      document.body.style.height = "";
    };
  }, [scrollRef, onScrollChange]);

  return scrollState;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
