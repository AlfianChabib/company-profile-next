import Culture from "@/components/Culture";
import HeroSwiper from "@/components/HeroSwiper";
import History from "@/components/History";
import Navbar from "@/components/Navbar";
import TeamsHome from "@/components/TeamsHome";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <section
        id="home"
        className="container flex relative w-full aspect-video overflow-hidden"
      >
        <div className="container flex absolute w-full h-full -z-0">
          <HeroSwiper />
        </div>

        <div className="content flex flex-col w-full h-full items-center text-center justify-center gap-2 md:gap-6 z-10 whitespace-pre-wrap text-light">
          <h3 className="font-bold lg:text-4xl md:text-2xl text-lg">
            Melampaui Impian Terliar Anda
          </h3>
          <h2 className="md:w-2/3 w-full font-extrabold md:text-4xl lg:text-6xl text-xl">
            Mewujudkan Apa Yang Anda Butuhkan Dengan Cepat.
          </h2>
          <p className="md:w-1/2 w-full text-xs md:text-sm font-semibold">
            Setiap proses pengerjaan di tangani oleh team professional internal
            kami, yang memiliki pengalaman lebuh dari sepulauh tahun dibidang
            pengembangan perangkat digital
          </p>
          <Link
            href="#history"
            className="flex bg-white text-xs md:text-base text-ultraDark py-1 md:py-2 px-2 md:px-4 rounded-sm "
          >
            Get Started
          </Link>
        </div>
      </section>
      {/* History */}
      <History />
      {/* Teams */}
      <TeamsHome />
      {/* Culture */}
      <Culture />
    </main>
  );
}
