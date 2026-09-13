"use client";

import { useEffect, useState, type RefObject } from "react";
import { applyRemScale } from "@/hooks/useRemScale";

const WRAP_WIDTH_REM = 88.89;

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

function getTravel(element: HTMLElement) {
  applyRemScale();
  void element.offsetWidth;

  const measured = element.offsetWidth - window.innerWidth;
  if (measured > 1) return measured;

  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  return Math.max(WRAP_WIDTH_REM * rem - window.innerWidth, 0);
}

export function useHorizontalScroll(
  scrollRef: RefObject<HTMLElement | null>,
  remReady = true,
  onScrollChange?: (state: ScrollState) => void,
) {
  const [scrollState, setScrollState] = useState<ScrollState>(initialState);

  useEffect(() => {
    if (!remReady) return;

    let travel = 0;

    const updateScroll = () => {
      const element = scrollRef.current;
      if (!element) return;

      const totalHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const currY = window.scrollY;
      const diff = Math.max(totalHeight - winHeight, 0);
      const percent = diff !== 0 ? Math.min(Math.max(currY / diff, 0), 1) : 0;

      element.style.transform = `translateX(${Math.floor(travel * percent) * -1}px)`;

      const nextState = getScrollState(percent);
      setScrollState(nextState);
      onScrollChange?.(nextState);
    };

    const updateLayout = () => {
      const element = scrollRef.current;
      if (!element) return;
      travel = getTravel(element);
      document.body.style.height = `${travel + window.innerHeight}px`;
      updateScroll();
    };

    updateLayout();
    const retry = window.requestAnimationFrame(() => {
      updateLayout();
    });

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateLayout);

    return () => {
      window.cancelAnimationFrame(retry);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateLayout);
    };
  }, [scrollRef, remReady, onScrollChange]);

  return scrollState;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
