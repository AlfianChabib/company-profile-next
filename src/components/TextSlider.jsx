"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function TextSlider() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  });
  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="text-slider flex bg-ultraDark w-full px-2 items-center">
      <div className="flex whitespace-nowrap font-semibold leading-8 text-2xl text-light gap-1 w-full relative overflow-hidden">
        <p ref={firstText}>
          Digital Marketing Growth Partners ★ Digital Marketing Growth Partners
          ★ Digital Marketing Growth Partners ★ Digital Marketing Growth
          Partners ★
        </p>
        <p ref={secondText}>
          Digital Marketing Growth Partners ★ Digital Marketing Growth Partners
          ★ Digital Marketing Growth Partners ★ Digital Marketing Growth
          Partners ★
        </p>
      </div>
    </div>
  );
}
