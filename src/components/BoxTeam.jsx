import Image from "next/image";

export default function BoxTeam({ user }) {
  const { name, picture, location } = user;

  return (
    <div className="w-full h-60 sm:h-52 md:h-56">
      <div className="flex w-full h-full">
        <Image
          src={picture.large}
          alt={name.first}
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
          priority
        />
      </div>
      <div>{location.city}</div>
    </div>
  );
}
