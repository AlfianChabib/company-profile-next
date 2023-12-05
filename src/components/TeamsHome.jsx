import Link from "next/link";
import BoxTeam from "./BoxTeam";
import Heading from "./Heading";
import { MdOutlineArrowOutward } from "react-icons/md";

async function getTeams() {
  const res = await fetch(
    "https://randomuser.me/api/?results=3&gender=male&inc=name,picture,location&noinfo"
  );
  const data = await res.json();
  return data.results;
}

export default async function TeamsHome() {
  const teams = await getTeams();

  return (
    <section className="container flex flex-col w-full h-screen mt-4">
      <div className="flex my-2 lg:pl-20 md:pl-12 pl-8">
        <Heading text="Teams" />
      </div>
      <div className="grid gap-8 my-4 md:my-8 lg:grid-cols-2 lg:px-20 md:px-12 px-8">
        {teams.map((user, index) => (
          <BoxTeam key={index} user={user} />
        ))}
      </div>
      <Link
        href="/team"
        className="flex w-40 self-center items-center justify-center gap-2 border border-dark  bg-white text-xs md:text-base text-ultraDark py-1 md:py-2 px-2 md:px-4 rounded-sm md:rounded-md"
      >
        More Teams
        <MdOutlineArrowOutward />
      </Link>
    </section>
  );
}
