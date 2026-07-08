"use client";

import { socialLinks } from "@/data/portfolio";

interface FixedUIProps {
  hideFixedUI: boolean;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

export function FixedUI({
  hideFixedUI,
  isMusicPlaying,
  onToggleMusic,
}: FixedUIProps) {
  const fadeStyle = {
    opacity: hideFixedUI ? 0 : 1,
    pointerEvents: hideFixedUI ? ("none" as const) : ("auto" as const),
    transition: "opacity 1.5s linear",
  };

  return (
    <>
      <h1 className="logo hd pf">Alicia</h1>

      <div
        id="musicBtn"
        className={`music ${isMusicPlaying ? "" : "pause"}`}
        style={fadeStyle}
        onMouseDown={(event) => {
          event.stopPropagation();
          onToggleMusic();
        }}
        role="button"
        tabIndex={0}
        aria-label={isMusicPlaying ? "Pause music" : "Play music"}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggleMusic();
          }
        }}
      />

      <div className="ste pf">
        <i />
      </div>

      <div className="join pf" style={fadeStyle}>
        <i>
          <a href={socialLinks.email} target="_blank" rel="noopener noreferrer">
            <img src="/images/join.png" alt="Contact Alicia" />
          </a>
        </i>

        <a
          href={socialLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter_ico hoverStyle pa"
          aria-label="Discord"
        />

        <a
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="tele hoverStyle pa"
          aria-label="Telegram"
        />
      </div>
    </>
  );
}