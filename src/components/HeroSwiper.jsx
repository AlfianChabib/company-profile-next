"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../assets";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSwiper() {
  return (
    <Swiper
      className="w-full mySwiper"
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop
    >
      {images.map((image, i) => (
        <SwiperSlide key={i} className="object-cover object-center">
          <Image
            src={image.image}
            alt={image.alt}
            className="w-full hero-img"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
