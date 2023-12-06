import Link from "next/link";
import { service } from "@/content";
import Heading from "./Heading";
import Image from "next/image";

export default function Service() {
  return (
    <section className="container flex flex-col relative w-full mt-10">
      <div className="flex my-2 lg:pl-20 md:pl-12 pl-8">
        <Heading text="Service" />
      </div>
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Kami Memecahkan Masalah Yang Nyata
          </h1>
          <p className="mt-3">
            Jika Anda mencari solusi pemasaran digital yang holistik dan
            berkinerja tinggi, DMGP siap menjadi mitra Anda. Hubungi kami untuk
            konsultasi lebih lanjut dan temukan bagaimana kami dapat membantu
            bisnis Anda tumbuh secara digital.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {service.map((item, idx) => (
              <li key={idx} className="space-y-3 flex flex-col">
                <div className="w-20 h-20 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.description}</p>
                <Link
                  href="/service"
                  className="text-indigo-600 font-medium w-36 mt-4 self-center"
                  aria-label="Learn more"
                >
                  Learn More
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
