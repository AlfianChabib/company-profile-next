"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-black.svg";
// import gsap from "gsap";
import { gsap } from "gsap";

export default function Navbar() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.25 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <nav className="container flex w-full h-nav justify-between items-center bg-light px-6">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-max" />
      </Link>
      <div className="flex bg-dark rounded-sm w-60 px-2">
        <div className="flex whitespace-nowrap font-semibold leading-8 text-lg text-light gap-1 w-full relative overflow-hidden">
          <h1 ref={firstText}>Digital Marketing Growth Partners ★</h1>
          <h1 ref={secondText}>Digital Marketing Growth Partners ★</h1>
        </div>
      </div>
      <ul className="md:flex hidden font-semibold gap-8">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/service">Services</Link>
        </li>
        <li>
          <Link href="/team">Teams</Link>
        </li>
      </ul>
      <Link href="/contact" className="font-semibold md:flex hidden">
        Contact
      </Link>
    </nav>
  );
}
