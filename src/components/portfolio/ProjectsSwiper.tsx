"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { projectSlides } from "@/data/portfolio";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";
import {
  pauseAutoplay,
  resumeAutoplay,
  startAutoplay,
} from "@/components/portfolio/swiper-utils";

import "swiper/css";
import "swiper/css/pagination";

interface ProjectsSwiperProps {
  visible: boolean;
}

export function ProjectsSwiper({ visible }: ProjectsSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!visible) return;

    setMounted(true);
    resumeAutoplay(swiperRef.current);
  }, [visible]);

  return (
    <ScrollReveal visible={visible} className="swp2 pa" keepMounted>
      <h2>Projects</h2>
      <div className="mySwiper2 pa">
        {mounted && (
          <Swiper
            className="projects-swiper"
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            spaceBetween={10}
            loop
            observer
            observeParents
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.pagination &&
                typeof swiper.params.pagination !== "boolean"
              ) {
                swiper.params.pagination.el = paginationRef.current;
              }
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (visible) {
                resumeAutoplay(swiper);
              }
            }}
            onMouseEnter={() => pauseAutoplay(swiperRef.current)}
            onMouseLeave={() => startAutoplay(swiperRef.current)}
          >
            {projectSlides.map((project) => (
              <SwiperSlide key={project.url + project.imgSrc}>
                <i>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.imgSrc} alt={project.authorName} />
                  </a>
                </i>
                <span className="sName">Title of the work</span>
                <span className="sAuthor">{project.authorName}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div ref={paginationRef} className="swiper-pagination2" />
      </div>
    </ScrollReveal>
  );
}
