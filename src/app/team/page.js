import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamsHome from "@/components/TeamsHome";

export default function page() {
  return (
    <main className="container">
      <Navbar />
      <TeamsHome />
      <Footer />
    </main>
  );
}
