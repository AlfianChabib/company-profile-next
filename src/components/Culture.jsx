import Heading from "./Heading";
import { culture } from "@/content";

export default function Culture() {
  return (
    <section className="container flex flex-col w-full mt-4">
      <div className="flex my-2 lg:pl-20 md:pl-12 pl-8">
        <Heading text="Culture" />
      </div>
      <div className="text-center space-y-3 px-4">
        <h1 className="block text-gray-800 text-3xl font-semibold">
          Bergabung dengan Kami
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Jika Anda berbagi nilai-nilai ini dan ingin menjadi bagian dari tim
          yang dinamis dan inovatif, kami mengundang Anda untuk menjelajahi
          peluang karier di DMGP. Bergabunglah dengan kami dan bersama-sama kita
          wujudkan masa depan digital yang luar biasa.
        </p>
      </div>
      <div
        className="relative bg-white rounded-md mt-10 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl sm:mx-auto"
        style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}
      >
        <div className="grid gap-4 py-8 md:grid-cols-2">
          {culture.map((item, idx) => (
            <div className="space-y-3 mt-6 px-8" key={idx}>
              <h1 className="text-gray-800 text-xl font-semibold ">
                {item.title}
              </h1>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
        <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
      </div>
    </section>
  );
}
