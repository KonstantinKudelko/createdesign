import { Header, ArrowNavLink, Footer } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full min-h-full">
        <section className="px-4 mb-24 h-screen flex flex-col justify-end">
          <Image
            src="/images/homepage/hero-image.jpg"
            alt="hero-image"
            width={700}
            height={475}
            className="h-full w-4/5 object-cover absolute left-0 top-0 -z-10"
          />

          <div className="w-full container mx-auto mb-8">
            <span className="lg:hidden block mb-8 mr-12 max-w-[315px] block relative bottom-[5px] text-white text-lg font-gotham font-light">
              Our studio guarantees comfortable cooperation and the development
              of modern concept for your home.
            </span>

            <div className="lg:mb-0 xl:mb-8 mb-8 flex items-center">
              <span className="2xl:text-8xl 2xl:mr-16 xl:text-6xl xl:mr-14 lg:text-4xl lg:mr-8 mr-4 font-neutral text-white text-2xl">
                Unique material
              </span>

              <ArrowNavLink />
            </div>

            <div className="lg:flex-row flex flex-col">
              <span className="lg:block lg:-bottom-[34px] hidden mb-8 mr-12 max-w-[315px] block relative -bottom-[10px] text-white text-xl font-gotham font-light">
                Our studio guarantees comfortable cooperation and the
                development of modern concept for your home.
              </span>

              <span className="2xl:text-8xl 2xl:leading-[125px] xl:text-6xl xl:leading-[65px] lg:text-4xl lg:leading-[55px] self-end font-neutral text-white text-2xl leading-[35px]">
                From our exclusive <br /> suppliers
              </span>
            </div>

            <div className="shadow-[0px_-50px_140px_180px_rgb(0,0,0,0.5)]" />
          </div>
        </section>

        <section className="lg:flex-row lg:gap-48 mb-24 flex flex-col justify-between container mx-auto columns-2 gap-12">
          <div className="px-4 basis-2/4 flex flex-col justify-between">
            <div>
              <span className="block mb-4 text-lg text-white uppercase font-light">
                Main
              </span>

              <h2 className="mb-4 text-5xl text-white uppercase font-light">
                About us
              </h2>

              <p className="text-gray font-light">
                Our studio specializes in creating modern design solutions using
                hight quality and unique materials in our furniture
                manufacturing in Europe. We have a lot of experience and it
                helps to find the best solution for each client.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="block mb-4 text-lg text-white uppercase font-light">
                Learn more
              </span>

              <ArrowNavLink />
            </div>
          </div>

          <div className="w-full relative pt-[100%]">
            <Image
              src="/images/homepage/about.jpg"
              alt="about-image"
              objectFit="cover"
              fill={true}
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </section>

        <section className="px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-24 container mx-auto grid gap-12">
          <div>
            <span className="mb-2 block text-5xl text-white font-light border-b border-b-gray">
              12+
            </span>
            <span className="block text-gray font-light">
              years of work in design
            </span>
          </div>

          <div>
            <span className="mb-2 block text-5xl text-white font-light border-b border-b-gray">
              20+
            </span>
            <span className="block text-gray font-light">
              architectural and design projects
            </span>
          </div>

          <div>
            <span className="mb-2 block text-5xl text-white font-light border-b border-b-gray">
              25+
            </span>
            <span className="block text-gray font-light">
              type of heigh quality unique materials
            </span>
          </div>

          <div>
            <span className="mb-2 block text-5xl text-white font-light border-b border-b-gray">
              50+
            </span>
            <span className="block text-gray font-light">
              unique interiors created by our studio
            </span>
          </div>
        </section>

        <Image
          src="/images/homepage/cover.jpg"
          alt="cover-image"
          width={700}
          height={475}
          className="mb-24 w-full"
        />

        <section className="px-4 mb-24 container mx-auto">
          <div className="mb-10">
            <span className="block mb-4 text-lg text-white uppercase font-light">
              Our
            </span>

            <h2 className="mb-4 text-5xl text-white uppercase font-light">
              Services
            </h2>
          </div>

          <div className="sm:grid-cols-1 sm:gap-12 lg:grid-cols-3 lg:gap-48 mb-24 container mx-auto grid gap-12">
            <div>
              <span className="block mb-2 text-lg text-white">Test</span>
              <p className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                a est et mauris malesuada aliquet a nec sapien. Nunc volutpat.
              </p>
            </div>

            <div>
              <span className="block mb-2 text-lg text-white">Test 2</span>
              <p className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                a est et mauris malesuada aliquet a nec sapien. Nunc volutpat.
              </p>
            </div>

            <div>
              <span className="block mb-2 text-lg text-white">Test 3</span>
              <p className="text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                a est et mauris malesuada aliquet a nec sapien. Nunc volutpat.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 mb-24 flex justify-center container mx-auto columns-2 gap-24">
          <div className="hidden lg:block basis-1/2 w-full relative pt-[100%]">
            <Image
              src="/images/homepage/our-work.jpg"
              alt="our-work-image"
              objectFit="cover"
              fill={true}
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>

          <div className="sm:basis-full lg:basis-1/2">
            <div className="mb-10">
              <span className="block mb-4 text-lg text-white uppercase font-light">
                What is
              </span>

              <h2 className="mb-16 text-5xl text-white uppercase font-light">
                Our work
              </h2>

              <ul>
                <li className="pb-6 mb-6 flex justify-between columns-2 gap-6 border-b border-b-gray">
                  <span className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 text-lg font-light text-white">
                    Measurement
                  </span>

                  <p className="max-w-[350px] text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a est et mauris malesuada aliquet a nec sapien. Nunc
                    volutpat.
                  </p>
                </li>

                <li className="pb-6 mb-6 flex justify-between columns-2 gap-6 border-b border-b-gray">
                  <span className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 text-lg font-light text-white">
                    Concept
                  </span>

                  <p className="max-w-[350px] text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a est et mauris malesuada aliquet a nec sapien. Nunc
                    volutpat.
                  </p>
                </li>

                <li className="pb-6 mb-6 flex justify-between columns-2 gap-6 border-b border-b-gray">
                  <span className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 text-lg font-light text-white">
                    Visualisation
                  </span>

                  <p className="max-w-[350px] text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a est et mauris malesuada aliquet a nec sapien. Nunc
                    volutpat.
                  </p>
                </li>

                <li className="pb-6 mb-6 flex justify-between columns-2 gap-6 border-b border-b-gray">
                  <span className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 text-lg font-light text-white">
                    Construction + Installation
                  </span>

                  <p className="max-w-[350px] text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris a est et mauris malesuada aliquet a nec sapien. Nunc
                    volutpat.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="lg:mb-24 px-4 mb-16 flex justify-between container mx-auto columns-2 gap-24">
          <div className="mb-10 sm:basis-full lg:basis-1/4">
            <span className="block mb-4 text-lg text-white uppercase font-light">
              It&apos;s time to
            </span>

            <h2 className="mb-4 text-5xl text-white uppercase font-light">
              Discuss your <br /> project
            </h2>

            <p className="mb-14 text-gray font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
              est et mauris malesuada aliquet a nec sapien. Nunc volutpat.
            </p>

            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="py-4 mb-8 bg-transparent border-b border-b-gray"
              />

              <input
                type="email"
                placeholder="Email"
                className="py-4 mb-16 bg-transparent border-b border-b-gray"
              />

              <button className="flex items-center justify-between">
                <span className="block mb-4 text-lg text-gray uppercase font-light">
                  Send a request
                </span>

                <ArrowNavLink />
              </button>
            </form>
          </div>

          <div className="hidden lg:block basis-3/4 w-full relative pt-[100%]">
            <Image
              src="/images/homepage/discuss.jpg"
              alt="discuss-image"
              objectFit="cover"
              fill={true}
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>
        </section>

        <section className="lg:mb-24 px-4 mb-12 flex justify-between container mx-auto columns-2 gap-24">
          <div className="hidden lg:block basis-2/4 w-full relative pt-[100%]">
            <Image
              src="/images/homepage/contact.png"
              alt="contact-image"
              objectFit="cover"
              fill={true}
              className="w-full h-full top-0 left-0 object-cover"
            />
          </div>

          <div className="mb-10 basis-2/4">
            <span className="block mb-4 text-lg text-white uppercase font-light">
              Our
            </span>

            <h2 className="mb-8 text-5xl text-white uppercase font-light">
              Contacts
            </h2>

            <div className="mb-8 flex flex-col">
              <span className="block mb-4 text-white text-lg font-light">
                Call us at this numbers:
              </span>

              <a
                href="tel:+13322489904"
                className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
              >
                +13322489904
              </a>

              <a
                href="tel:++13322489907"
                className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
              >
                +13322489907
              </a>
            </div>

            <div className="mb-8">
              <span className="block mb-4 text-white text-lg font-light">
                The studio is located at:
              </span>

              <span className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray">
                12150 NW 21st CT, 33323 - Plantation, FL
              </span>
            </div>

            <div>
              <span className="block mb-4 text-white text-lg font-light">
                Contact us by mail:
              </span>

              <a
                href="mailto:test@test.com"
                className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
              >
                test@test.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
