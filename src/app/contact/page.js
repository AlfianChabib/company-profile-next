import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";

export default function page() {
  return (
    <main className="container">
      <Heading text="Contact" />
      <section className="flex relative w-full h-[500px] items-center px-20 gap-10 justify-center border-b-2 border-dark">
        <div className="flex flex-col flex-1 gap-6 text-6xl font-black">
          <p>Hubungi Kami.</p>
          <p>Kami Akan Senang</p>
          <p>Menghubungi Anda.</p>
        </div>
        <div className="flex flex-1 text-xl leading-8 gap-4">
          <p>
            Kami akan senang bertemu anda dan mempelajari semua tentang bisnis
            yang anda miliki
          </p>
          <p>
            Bersama-sama, mari kita ciptakan surga bagi orang-orang yang
            memiliki hati yang sama, di mana ada waktu untuk menikmati momen.
            Apakah Anda bergabung dengan lingkungan kami?
          </p>
          <p>Kami melihat masa depan Anda dan kedengarannya bagus. ​</p>
        </div>
      </section>
      <section className="flex relative w-full p-20 px-20 gap-10 justify-center border-t-2 border-dashed border-dark mt-10">
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h1 className="font-bold text-2xl">
              Digital Marketing Growth Partners
            </h1>
          </div>
          <Heading text="Visit Us" padding={false} />
          <div>
            <p className="font-extrabold text-2xl">Jl. Kebon Sirih No. 10,</p>
            <p className="font-extrabold text-2xl">Menteng, Jakarta Pusat</p>
          </div>
          <Heading text="Get In Touch" padding={false} />
          <div>
            <p className="font-extrabold text-2xl">(+62) 812 3456 7890</p>
            <p className="font-extrabold text-2xl">dmgp@info.com</p>
          </div>
        </div>
        <div className="flex-1">
          <form className="flex flex-col font-medium">
            <div className="flex flex-col relative">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" placeholder="Full name" />
              <span className="absolute top-0 right-0 font-semibold text-gray-500">
                Require
              </span>
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="companyname">Company Name</label>
              <input type="text" id="companyname" placeholder="Company name" />
              <span className="absolute top-0 right-0 font-semibold text-gray-500">
                Require
              </span>
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email address" />
              <span className="absolute top-0 right-0 font-semibold text-gray-500">
                Require
              </span>
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="number"
                id="phonenumber"
                placeholder="Phone number"
              />
              <span className="absolute top-0 right-0 font-semibold text-gray-500">
                Require
              </span>
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="contact">Reason For Contact</label>
              <textarea
                rows="4"
                cols="50"
                id="contact"
                placeholder="Reason for contact"
              ></textarea>
              <span className="absolute top-0 right-0 font-semibold text-gray-500">
                Require
              </span>
            </div>
            <button type="submit">
              <Button
                text={"Send Message"}
                theme="dark"
                width="200"
                height="60"
              />
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

// https://brewdistrict24.com/en/contact
