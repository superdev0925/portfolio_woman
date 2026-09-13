"use client";

import { useRef, useState } from "react";
import { careerPoints, introLetter } from "@/data/portfolio";
import { useRemScale } from "@/hooks/useRemScale";
import {
  scrollToTop,
  useHorizontalScroll,
} from "@/hooks/useHorizontalScroll";
import { useMusic } from "@/hooks/useMusic";
import { BackgroundVideo } from "@/components/portfolio/BackgroundVideo";
import { FixedUI } from "@/components/portfolio/FixedUI";
import { InteractivePoint } from "@/components/portfolio/InteractivePoint";
import { ProjectViewer } from "@/components/portfolio/ProjectViewer";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";

export function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { audioRef, isPlaying, toggle } = useMusic();
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);

  const remReady = useRemScale();
  const scrollState = useHorizontalScroll(scrollRef, remReady);

  return (
    <>
      <FixedUI
        hideFixedUI={scrollState.hideFixedUI}
        isMusicPlaying={isPlaying}
        onToggleMusic={toggle}
      />

      <div ref={scrollRef} className="wrap scroll">
        <section className="bg1 pr">
          <div className="pal pa" />
          <BackgroundVideo
            id="v1"
            src="/images/video1.mp4"
            playing={scrollState.percent <= 0.22}
          />
        </section>

        <section className="bg2 pr">
          <ScrollReveal visible={scrollState.showCareerPoints} className="role2 pa" />
          {careerPoints.map((point) => (
            <InteractivePoint
              key={point.id}
              point={point}
              variant="career"
              visible={scrollState.showCareerPoints}
              onSelect={() => setOpenCategoryId(point.categoryId)}
            />
          ))}
          <BackgroundVideo
            id="v2"
            src="/images/video2.mp4"
            playing={scrollState.percent <= 0.82}
          />
        </section>

        <section className="bg5 pr">
          <ScrollReveal visible={scrollState.showSkills} className="intro-letter pa">
            <span className="intro-letter__star intro-letter__star--a" />
            <span className="intro-letter__star intro-letter__star--b" />
            <span className="intro-letter__star intro-letter__star--c" />
            <span className="intro-letter__star intro-letter__star--d" />
            <span className="intro-letter__star intro-letter__star--e" />
            <p className="intro-letter__lead">
              {introLetter.lead[0]}
              <br />
              {introLetter.lead[1]}
            </p>
            <p className="intro-letter__thanks">
              {introLetter.thanks[0]}
              <br />
              {introLetter.thanks[1]}
              <span className="intro-letter__heart"> ♡</span>
            </p>
            <p className="intro-letter__close">
              {introLetter.close[0]}
              <br />
              {introLetter.close[1]}
            </p>
            <p className="intro-letter__name">{introLetter.name}</p>
          </ScrollReveal>
          <BackgroundVideo id="v5" src="/images/video5.mp4" playing />
        </section>

        <section className="copyright pr">
          <a
            href="#top"
            className="backBtn pa"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
          >
            Back Home Page
          </a>
          <div className="ply pa">
            <p>You can implement your dream with me.</p>
          </div>
        </section>
      </div>

      <ProjectViewer
        categoryId={openCategoryId}
        onClose={() => setOpenCategoryId(null)}
      />

      <audio ref={audioRef} src="/images/audio.mp3" loop id="music" autoPlay />
    </>
  );
}
