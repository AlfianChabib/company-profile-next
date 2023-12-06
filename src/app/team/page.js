import BoxTeam from "@/components/BoxTeam";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";

async function getTeams() {
  const res = await fetch(
    "https://randomuser.me/api/?results=8&gender=male&inc=name,picture,location&noinfo"
  );
  const data = await res.json();
  return data.results;
}

export default async function page() {
  const teams = await getTeams();
  return (
    <main className="container">
      <Navbar />
      <section className="container flex flex-col w-full mt-4">
        <div className="flex my-2 lg:pl-20 md:pl-12 pl-8">
          <Heading text="Teams" />
        </div>
        <div className="grid gap-8 my-4 md:my-8 lg:grid-cols-2 lg:px-20 md:px-12 px-8">
          {teams.map((user, index) => (
            <BoxTeam key={index} user={user} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
