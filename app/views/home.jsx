"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  FAQ,
  Footer,
  Header,
  Articles,
  ArrowNavLink,
  AboutSlideShow,
} from "@/components";

export const Home = ({ articles }) => {
  const faqRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactsRef = useRef(null);

  useEffect(() => {
    // Sendpulse auth
    const body = new FormData();
    body.append("grant_type", "client_credentials");
    body.append("client_id", "77bcc81c6f35f21c5908aa63bf785c2a");
    body.append("client_secret", "006e8979e8ff3246b94aac903d445139");

    async function sendPulseAuth() {
      const response = await fetch(
        "https://api.sendpulse.com/oauth/access_token",
        {
          method: "POST",
          body,
        }
      );
      const data = await response.json();
      localStorage.setItem("token", data.access_token);
    }

    sendPulseAuth();
  }, []);

  return (
    <>
      <Header
        faqRef={faqRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        contactsRef={contactsRef}
      />

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

        <section
          ref={aboutRef}
          className="xl:gap-48 lg:flex-row lg:h-[1100px] mb-24 flex flex-col justify-between container mx-auto columns-2 gap-12"
        >
          <div className="px-4 basis-2/4 flex flex-col justify-between">
            <div className="lg:mb-0 mb-12">
              <span className="block mb-4 text-lg text-white uppercase font-light">
                Main
              </span>

              <h2 className="mb-4 text-5xl text-white uppercase font-light">
                About us
              </h2>

              <p className="mb-4 text-gray font-light">
                Our studio specializes in creating modern design solutions using
                hight quality and unique materials in our furniture
                manufacturing in Europe. We have a lot of experience and it
                helps to find the best solution for each client.
              </p>

              <p className="mb-4 text-gray font-light">
                A CreateDesign Furniture is a sanctuary of craftsmanship,
                innovation, and design. This creative space is where talented
                artisans, designers, and engineers come together to breathe life
                into sketches, transforming them into tangible,
                three-dimensional realities. It is a place where wood, metal,
                textiles, and other materials are carefully selected and molded
                into pieces that transcend mere utility to become statements of
                style, comfort, and identity.
              </p>

              <p className="mb-4 text-gray font-light">
                While aesthetics often steal the spotlight, the functionality
                and ergonomics of furniture are equally paramount. A
                well-designed piece not only appeals to the eye but also serves
                its intended purpose seamlessly. CreateDesign Furniture
                prioritize not only the visual allure but also the comfort and
                practicality of the pieces they create. Ergonomic considerations
                ensure that chairs, tables, sofas, and other items enhance the
                quality of life for those who use them.
              </p>

              <p className="text-gray font-light">
                The world of CreateDesign Studio is a symphony of creativity,
                craftsmanship, and functionality.
              </p>
            </div>

            <AboutSlideShow>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="block mb-4 text-lg text-white uppercase font-light">
                  Learn more
                </span>

                <ArrowNavLink />
              </div>
            </AboutSlideShow>
          </div>

          <div className="w-full relative">
            <Image
              src="/images/homepage/about.jpg"
              alt="about-image"
              objectFit="cover"
              fill={true}
              className="lg:max-h-[1100px] w-full top-0 left-0 object-cover"
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

        <section ref={servicesRef} className="px-4 mb-24 container mx-auto">
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
              <span className="block mb-2 text-lg text-white">
                Interior design
              </span>

              <p className="text-gray">
                Our team will provide you the best interior design services
                according your wishes and budget. Using our great experience we
                are ready to work with any kind of project.
              </p>
            </div>

            <div>
              <span className="block mb-2 text-lg text-white">
                Furniture design and supplier
              </span>

              <p className="text-gray">
                Working in interior design for many years, we decided to create
                our amazing furniture as well. We are working only with the
                European best hight-quality materials and designers.
              </p>
            </div>

            <div>
              <span className="block mb-2 text-lg text-white">Realisation</span>

              <p className="text-gray">
                It is very important for us to satisfy our clients. Our team can
                provide you any additional services with the permits, architect
                and general contractor issues to achieve the best result with
                your new interior.
              </p>
            </div>
          </div>
        </section>

        <section className="lg:h-[900px] px-4 mb-24 flex justify-center container mx-auto columns-2 gap-24">
          <div className="hidden lg:block basis-1/2 w-full relative">
            <Image
              src="/images/homepage/our-work.jpg"
              alt="our-work-image"
              objectFit="cover"
              fill={true}
              className="lg:max-h-[900px] w-full top-0 left-0 object-cover"
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
                    Helping our clients with exact measurement for upcoming
                    project - our priority.
                  </p>
                </li>

                <li className="pb-6 mb-6 flex justify-between columns-2 gap-6 border-b border-b-gray">
                  <span className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 text-lg font-light text-white">
                    Concept
                  </span>

                  <p className="max-w-[350px] text-gray">
                    The main point is offering different types of concept and
                    design, so you can pick the best one according your budget
                    and wishes.
                  </p>
                </li>

                <li className="pb-6 mb-6 flex justify-between columns-2 gap-6 border-b border-b-gray">
                  <span className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 text-lg font-light text-white">
                    Visualisation
                  </span>

                  <p className="max-w-[350px] text-gray">
                    Professional team of our interior designers will be able to
                    create the future concept of your house so you will be able
                    to see every small detail of your future furniture and
                    interior.
                  </p>
                </li>

                <li className="pb-6 mb-6 flex justify-between columns-2 gap-6 border-b border-b-gray">
                  <span className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 text-lg font-light text-white">
                    Construction + Installation
                  </span>

                  <p className="max-w-[350px] text-gray">
                    Final step of our work together is to make your wished
                    design become true in a professional quality way by our
                    team.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="lg:h-[900px] lg:mb-24 px-4 mb-16 flex justify-between container mx-auto columns-2 gap-24">
          <div className="mb-10 sm:basis-full lg:basis-1/4">
            <span className="block mb-4 text-lg text-white uppercase font-light">
              It&apos;s time to
            </span>

            <h2 className="mb-4 text-5xl text-white uppercase font-light">
              Discuss your <br /> project
            </h2>

            <p className="mb-14 text-gray font-light">
              Fell free to contact us anytime according your further order or
              free estimate. Our manager will contact you and will be happy to
              help with any information you need.
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

          <div className="hidden lg:block basis-3/4 w-full relative">
            <Image
              src="/images/homepage/discuss.jpg"
              alt="discuss-image"
              objectFit="cover"
              fill={true}
              className="lg:max-h-[900px] w-full top-0 left-0 object-cover"
            />
          </div>
        </section>

        <section
          ref={contactsRef}
          className="lg:h-[900px] lg:mb-24 px-4 mb-12 flex justify-between container mx-auto columns-2 gap-24"
        >
          <div className="hidden lg:block basis-2/4 w-full relative">
            <Image
              src="/images/homepage/contact.jpeg"
              alt="contact-image"
              objectFit="cover"
              fill={true}
              className="lg:max-h-[900px] w-full top-0 left-0 object-cover"
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
                href="tel:+1212249367"
                className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
              >
                +1212249367
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
                href="mailto:info@create-design.us"
                className="before:content-['\00B7'] before:text-white before:font-bold before:text-2xl before:mr-2 before:relative before:top-[1px] font-thin text-gray"
              >
                info@create-design.us
              </a>
            </div>
          </div>
        </section>

        <FAQ ref={faqRef} />

        <Articles articles={articles} />
      </main>

      <Footer />
    </>
  );
};
