"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-black.svg";

export default function Navbar() {
  return (
    <nav className="container flex w-full h-nav justify-between items-center bg-light px-6">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-max" />
      </Link>
      <ul className="flex font-semibold gap-8">
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
    </nav>
  );
}
