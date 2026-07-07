"use client";

import { useEffect, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  visible: boolean;
  className: string;
  children?: ReactNode;
  keepMounted?: boolean;
}

export function ScrollReveal({
  visible,
  className,
  children,
  keepMounted = false,
}: ScrollRevealProps) {
  const [everVisible, setEverVisible] = useState(visible);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let showFrame = 0;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    if (visible) {
      setEverVisible(true);
      showFrame = requestAnimationFrame(() => {
        showFrame = requestAnimationFrame(() => setActive(true));
      });
    } else {
      setActive(false);
      if (!keepMounted) {
        hideTimer = setTimeout(() => setEverVisible(false), 1500);
      }
    }

    return () => {
      cancelAnimationFrame(showFrame);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [visible, keepMounted]);

  if (!everVisible) return null;

  return (
    <div
      className={`${className} scroll-reveal${active ? " scroll-reveal--visible" : ""}`}
    >
      {children}
    </div>
  );
}

export function useScrollRevealClass(visible: boolean) {
  const [everVisible, setEverVisible] = useState(visible);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let showFrame = 0;

    if (visible) {
      setEverVisible(true);
      showFrame = requestAnimationFrame(() => {
        showFrame = requestAnimationFrame(() => setActive(true));
      });
    } else {
      setActive(false);
    }

    return () => cancelAnimationFrame(showFrame);
  }, [visible]);

  if (!everVisible) {
    return " scroll-reveal";
  }

  return ` scroll-reveal${active ? " scroll-reveal--visible" : ""}`;
}
