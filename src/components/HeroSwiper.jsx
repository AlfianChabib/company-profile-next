"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../assets";
import Image from "next/image";
import "swiper/css";

export default function HeroSwiper() {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop
    >
      {images.map((image, i) => (
        <SwiperSlide key={i} className="flex w-full h-full ">
          <Image
            src={image.image}
            alt={image.alt}
            width={1000}
            height={1000}
            className="w-full hero-img object-cover object-center"
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
