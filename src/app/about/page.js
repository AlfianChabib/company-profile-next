import Culture from "@/components/Culture";
import Footer from "@/components/Footer";
import History from "@/components/History";
import Navbar from "@/components/Navbar";
import TeamsHome from "@/components/TeamsHome";

export default function page() {
  return (
    <main className="container">
      <Navbar />
      <section className="flex flex-col w-full h-96 items-center px-20 gap-4 justify-center">
        <h1 className="text-6xl font-bold">Tentang Kami</h1>
        <p className="text-xl font-medium">Dibalik Layar Perusahaan Kami</p>
      </section>
      <History />
      <TeamsHome />
      <Culture />
      <section className="flex relative w-full p-20 px-20 gap-10 justify-center mt-10"></section>
      <Footer />
    </main>
  );
}
