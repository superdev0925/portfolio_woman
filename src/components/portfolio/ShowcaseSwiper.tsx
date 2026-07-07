"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { showcaseSlides } from "@/data/portfolio";
import { ScrollReveal } from "@/components/portfolio/ScrollReveal";
import {
  pauseAutoplay,
  resumeAutoplay,
  startAutoplay,
} from "@/components/portfolio/swiper-utils";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface ShowcaseSwiperProps {
  visible: boolean;
}

export function ShowcaseSwiper({ visible }: ShowcaseSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!visible) return;

    setMounted(true);
    resumeAutoplay(swiperRef.current);
  }, [visible]);

  return (
    <ScrollReveal visible={visible} className="swp1 pa" keepMounted>
      <div className="mySwiper1 pa">
        {mounted && (
          <Swiper
            className="showcase-swiper"
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            loop={showcaseSlides.length > 1}
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
            {showcaseSlides.map((slide) => (
              <SwiperSlide key={slide.imgUrl}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={slide.imgUrl} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div ref={paginationRef} className="swiper-pagination1" />
      </div>
    </ScrollReveal>
  );
}
