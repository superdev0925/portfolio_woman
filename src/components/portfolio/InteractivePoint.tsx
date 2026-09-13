"use client";

import type { CareerIcon, CareerPoint, SkillPoint } from "@/data/portfolio";
import { useScrollRevealClass } from "@/components/portfolio/ScrollReveal";

interface InteractivePointProps {
  point: CareerPoint | SkillPoint;
  variant: "career" | "skill";
  visible: boolean;
  onSelect?: () => void;
}

function isCareerPoint(point: CareerPoint | SkillPoint): point is CareerPoint {
  return "period" in point;
}

function BadgeIcon({ name }: { name: CareerIcon }) {
  if (name === "design") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.4" fill="currentColor" />
        <path
          fill="currentColor"
          d="M5.2 19.4c.4-3.4 3-5.4 6.8-5.4s6.4 2 6.8 5.4c.1.8-.5 1.6-1.4 1.6H6.6c-.9 0-1.5-.8-1.4-1.6z"
        />
      </svg>
    );
  }

  if (name === "clip") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.2 16.8c2.6-1.1 4.4-3.6 5.8-6.6.4-.9 1.6-2.8 2.8-3.7 1.2-.9 2.5-.8 3.2.2.7 1 .2 2.3-.8 3.3-1.2 1.2-3.3 2-4.4 2.3 1 .8 2.2 1.5 3.5 1.7 1.3.2 2.2 1.4 1.6 2.5-.6 1.1-2.1 1.2-3.4.8-2.2-.7-4.3-2.3-5.7-3.6-.6 1.2-1.4 2.3-2.6 3.1z"
        />
        <circle cx="7.4" cy="18.2" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (name === "toonz") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.2" fill="currentColor" />
        <circle cx="6.4" cy="8.2" r="0.9" fill="#fff" />
        <circle cx="6.4" cy="15.8" r="0.9" fill="#fff" />
        <circle cx="17.6" cy="8.2" r="0.9" fill="#fff" />
        <circle cx="17.6" cy="15.8" r="0.9" fill="#fff" />
        <path fill="#fff" d="M10.2 8.8 16 12l-5.8 3.2z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="7" cy="12" r="1.7" fill="currentColor" />
      <circle cx="12" cy="12" r="1.7" fill="currentColor" />
      <circle cx="17" cy="12" r="1.7" fill="currentColor" />
    </svg>
  );
}

export function InteractivePoint({
  point,
  variant,
  visible,
  onSelect,
}: InteractivePointProps) {
  const barClass = variant === "career" ? "ffBar" : "ffBar2";
  const revealClass = useScrollRevealClass(visible);

  if (variant === "career" && isCareerPoint(point)) {
    return (
      <button
        type="button"
        className={`${point.className} ${barClass} point pa${revealClass}`}
        onClick={onSelect}
      >
        <div className="flag_pole pa">
          <div className="f_text island-badge pa">
            <span className="island-badge__icon">
              <BadgeIcon name={point.icon} />
            </span>
            <h2>{point.title}</h2>
            <span className="island-badge__arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M9 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <span className={`island-marker island-marker--${point.marker} pa`} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 1.15 14.2 9.8 22.85 12 14.2 14.2 12 22.85 9.8 14.2 1.15 12 9.8 9.8 Z"
            />
          </svg>
        </span>
      </button>
    );
  }

  if (!isCareerPoint(point)) {
    return (
      <div className={`${point.className} ${barClass} point pa${revealClass}`}>
        <div className="flag_pole pa">
          <div className="f_text2 pa">
            <span>{point.title}</span>
            {point.skills[0]}
            {point.skills.slice(1).map((skill) => (
              <span key={skill}>
                <br /> {skill}
              </span>
            ))}
          </div>
        </div>
        <i className="nor pa" />
        <i className="hover pa" />
      </div>
    );
  }

  return null;
}
