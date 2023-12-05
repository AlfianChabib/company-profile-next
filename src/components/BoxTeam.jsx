import Image from "next/image";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function BoxTeam({ user }) {
  const { name, picture, location } = user;
  const fullName = `${name.title} ${name.first} ${name.last}`;
  const address = `${location.street.name}, ${location.city}, ${location.state}`;

  return (
    <div className="gap-4 sm:flex border-2 border-gray-300 rounded-xl overflow-hidden">
      <div className="w-full h-60">
        <Image
          src={picture.large}
          alt={name.first}
          width={500}
          height={500}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="m-2">
        <h1 className="text-lg text-gray-700 font-semibold">{fullName}</h1>
        <p className="text-indigo-600">{address}</p>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
          recusandae.
        </p>
        <div className="mt-3 flex gap-4 text-gray-400">
          <Link href="https://twitter.com/?lang=en-id" aria-label="Twitter">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://github.com/" aria-label="Github">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.instagram.com/" aria-label="Instagram">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
