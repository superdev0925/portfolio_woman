"use client";

import type { CareerPoint, SkillPoint } from "@/data/portfolio";
import { useScrollRevealClass } from "@/components/portfolio/ScrollReveal";

interface InteractivePointProps {
  point: CareerPoint | SkillPoint;
  variant: "career" | "skill";
  visible: boolean;
}

function isCareerPoint(point: CareerPoint | SkillPoint): point is CareerPoint {
  return "period" in point;
}

export function InteractivePoint({ point, variant, visible }: InteractivePointProps) {
  const barClass = variant === "career" ? "ffBar" : "ffBar2";
  const textClass = variant === "career" ? "f_text" : "f_text2";
  const revealClass = useScrollRevealClass(visible);

  return (
    <div
      className={`${point.className} ${barClass} point pa${revealClass}`}
    >
      <div className="flag_pole pa">
        <div className={`${textClass} pa`}>
          {isCareerPoint(point) ? (
            <>
              <h2>
                {point.title}
                <br />
              </h2>
              <h3>{point.period}</h3>
              <br />
              {point.description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </>
          ) : (
            <>
              <span>{point.title}</span>
              {point.skills[0]}
              {point.skills.slice(1).map((skill) => (
                <span key={skill}>
                  <br /> {skill}
                </span>
              ))}
            </>
          )}
        </div>
      </div>
      <i className="nor pa" />
      <i className="hover pa" />
    </div>
  );
}
