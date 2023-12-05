import Image from "next/image";
import { testimonials } from "@/content";
import Heading from "./Heading";

export default function Testimonials() {
  return (
    <section className="container flex flex-col relative w-full mt-10">
      <div className="flex my-2 lg:pl-20 md:pl-12 pl-8">
        <Heading text="Testimonials" />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Apa Yang Dibicarakan Customer Kami
          </h1>
          <p className="mt-3 text-gray-600">
            Di DMGP, kami membangun hubungan yang tidak hanya didasarkan pada
            layanan berkualitas tetapi juga pada kepercayaan dan kepuasan klien.
            Kami bangga dengan kisah sukses dan pengalaman positif yang
            dibagikan oleh para mitra bisnis kami.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.avatar}
                      className="w-16 h-16 rounded-full"
                      alt={item.name}
                      width={64}
                      height={64}
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
