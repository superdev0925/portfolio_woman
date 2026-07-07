"use client";

import { useRef } from "react";
import {
  aboutText,
  careerPoints,
  skillPoints,
} from "@/data/portfolio";
import { useRemScale } from "@/hooks/useRemScale";
import {
  scrollToTop,
  useHorizontalScroll,
} from "@/hooks/useHorizontalScroll";
import { useMusic } from "@/hooks/useMusic";
import { BackgroundVideo } from "@/components/portfolio/BackgroundVideo";
import { FixedUI } from "@/components/portfolio/FixedUI";
import { InteractivePoint } from "@/components/portfolio/InteractivePoint";
import { ProjectsSwiper } from "@/components/portfolio/ProjectsSwiper";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";
import { ShowcaseSwiper } from "@/components/portfolio/ShowcaseSwiper";

function highlightAboutText(text: string) {
  const keywords = [
    "blockchain",
    "full stack developer",
    "Ethereum, Solidity",
    "smart contract",
    "React, React Native, Node.js",
    "Python",
  ];

  return keywords.reduce(
    (result, keyword) => result.replace(keyword, `<i>${keyword}</i>`),
    text,
  );
}

export function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { audioRef, isPlaying, toggle } = useMusic();

  useRemScale();

  const scrollState = useHorizontalScroll(scrollRef);

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
            playing={scrollState.percent <= 0.137}
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
            />
          ))}
          <BackgroundVideo
            id="v2"
            src="/images/video2.mp4"
            playing={scrollState.percent <= 0.46}
          />
        </section>

        <section className="bg3 pr">
          <ScrollReveal visible={scrollState.showAbout} className="role3 pa" />
          <ScrollReveal visible={scrollState.showAbout} className="movieBar pa">
            <div className="movie_bg pa">
              <div className="movieImg pa" />
            </div>
            <div className="movie_txt pa">
              <p
                dangerouslySetInnerHTML={{
                  __html: `<i>I</i>${highlightAboutText(aboutText.slice(1))}`,
                }}
              />
            </div>
          </ScrollReveal>
          <BackgroundVideo
            id="v3"
            src="/images/video3.mp4"
            playing={scrollState.percent <= 0.62}
          />
        </section>

        <section className="bg4 pr">
          <ScrollReveal
            visible={scrollState.showProjects}
            className="role4_1 pa"
          />
          <ScrollReveal
            visible={scrollState.showProjects}
            className="role4_2 pa"
          />
          <ShowcaseSwiper visible={scrollState.showShowcase} />
          <ProjectsSwiper visible={scrollState.showProjects} />
          <BackgroundVideo
            id="v4"
            src="/images/video4.mp4"
            playing={scrollState.percent <= 0.9}
          />
        </section>

        <section className="bg5 pr">
          {skillPoints.map((point) => (
            <InteractivePoint
              key={point.id}
              point={point}
              variant="skill"
              visible={scrollState.showSkills}
            />
          ))}
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

      <audio ref={audioRef} src="/images/audio.mp3" loop id="music" autoPlay />
    </>
  );
}
