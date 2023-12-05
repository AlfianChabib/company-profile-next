import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo-black.svg";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const footerNavs = [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/services",
      name: "Services",
    },
    {
      href: "/team",
      name: "Teams",
    },
    {
      href: "/contact",
      name: "Contact",
    },
  ];
  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 mt-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <Image src={logo} alt="footer" className="w-32 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry`s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className=" hover:text-gray-800" key={idx}>
            <Link key={idx} href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2023 DMGP All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="/" aria-label="instagram">
                <FaInstagram size={24} />
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="/" aria-label="youtube">
                <FaYoutube size={24} />
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="/" aria-label="facebook">
                <FaFacebook size={24} />
              </Link>
            </li>
            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
              <Link href="/" aria-label="twitter">
                <FaTwitter size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

// https://quivo.co/uk/
