import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";

export default function page() {
  return (
    <main className="container">
      <Navbar />
      <Service />
      <Footer />
    </main>
  );
}
