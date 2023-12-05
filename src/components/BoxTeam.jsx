import Image from "next/image";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

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
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>
      <div className="m-2">
        <h4 className="text-lg text-gray-700 font-semibold">{fullName}</h4>
        <p className="text-indigo-600">{address}</p>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
          recusandae.
        </p>
        <div className="mt-3 flex gap-4 text-gray-400">
          <a href="#">
            <FaTwitter size={24} />
          </a>
          <a href="#">
            <FaGithub size={24} />
          </a>
          <a href="#">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
