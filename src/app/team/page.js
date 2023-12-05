import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";

export default function page() {
  return (
    <main className="container">
      <Navbar />
      <Heading text="Teams" />
      <section className="flex relative w-full items-center px-20 gap-10 justify-center"></section>
      <section className="flex relative w-full p-20 px-20 gap-10 justify-center mt-10"></section>
      <Footer />
    </main>
  );
}
