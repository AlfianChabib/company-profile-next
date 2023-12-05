import BoxTeam from "./BoxTeam";
import Heading from "./Heading";
import Test from "./Test";

// https://randomuser.me/api/1.4/?results=5&inc=name,picture,location&noinfo
async function getTeams() {
  const res = await fetch(
    "https://randomuser.me/api/?results=5&gender=male&inc=name,picture,location&noinfo"
  );
  const data = await res.json();
  return data.results;
}

export default async function TeamsHome() {
  const teams = await getTeams();

  return (
    <section className="container flex flex-col w-full h-screen ">
      <Test data={teams} />
      <div className="flex my-2">
        <Heading text="Teams" />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-10 md:px-20">
        {teams.map((user, index) => (
          <BoxTeam key={index} user={user} />
        ))}
      </div>
    </section>
  );
}
