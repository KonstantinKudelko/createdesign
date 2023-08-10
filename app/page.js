import { Header } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full h-full">
        <section className="h-screen flex flex-col justify-end">
          <Image
            src="/images/homepage/hero-image.jpg"
            alt="hero-image"
            width={700}
            height={475}
            className="h-full w-3/5 object-cover absolute left-0 top-0 -z-10"
          />

          <div className="w-full w-[calc(100%-64px)] mx-auto mb-6">
            <span className="lg:hidden block mb-8 mr-12 max-w-[315px] block relative bottom-[5px] text-white text-lg font-gotham font-light">
              Our studio guarantees comfortable cooperation and the development
              of modern concept for your home.
            </span>

            <div className="mb-8 flex items-center">
              <span className="sm:text-5xl sm:mr-12 mr-4 font-neutral text-white text-2xl">
                Unique material
              </span>

              <span className="w-[50px] h-[50px] flex items-center justify-center relative bottom-[5px] text-white border border-white rounded-full">
                &#8594;
              </span>
            </div>

            <div className="lg:flex-row flex flex-col">
              <span className="lg:block hidden mb-8 mr-12 max-w-[315px] block relative bottom-[5px] text-white text-lg font-gotham font-light">
                Our studio guarantees comfortable cooperation and the
                development of modern concept for your home.
              </span>

              <span className="sm:text-5xl sm:leading-[55px] self-end font-neutral text-white text-2xl leading-[35px]">
                From our exclusive <br /> suppliers
              </span>
            </div>

            <div className="shadow-[0px_-50px_140px_180px_rgb(0,0,0,0.5)]" />
          </div>
        </section>
      </main>
    </>
  );
}
