import type { Swiper as SwiperType } from "swiper";

export function resumeAutoplay(swiper: SwiperType | null | undefined) {
  if (!swiper?.autoplay) return;

  swiper.update();
  if (!swiper.autoplay.running) {
    swiper.autoplay.start();
  }
}

export function pauseAutoplay(swiper: SwiperType | null | undefined) {
  swiper?.autoplay?.stop();
}

export function startAutoplay(swiper: SwiperType | null | undefined) {
  swiper?.autoplay?.start();
}
