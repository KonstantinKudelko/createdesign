"use client";

import Image from "next/image";

export const Header = ({ aboutRef, servicesRef, contactsRef, faqRef }) => {
  const onNavigate = (ref) => {
    if (ref) {
      return ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="mx-auto px-2 pt-8 pb-6 container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 border-b border-b-white">
        <div className="w-full absolute top-0 left-0 -z-10 shadow-[80px_-50px_140px_180px_rgb(0,0,0,0.5)]" />

        <div className="flex gap-8 items-center">
          <Image
            width={150}
            height={50}
            src="/images/logo.svg"
            alt="logo"
            className="max-w-[90px]"
          />

          <ul className="md:flex hidden gap-4">
            <li
              className="font-gotham text-white text-lg font-light cursor-pointer"
              onClick={() => onNavigate(aboutRef)}
            >
              ABOUT
            </li>

            <li
              className="font-gotham text-white text-lg font-light cursor-pointer"
              onClick={() => onNavigate(servicesRef)}
            >
              SERVICES
            </li>

            <li
              className="font-gotham text-white text-lg font-light cursor-pointer"
              onClick={() => onNavigate(contactsRef)}
            >
              CONTACTS
            </li>

            <li
              className="font-gotham text-white text-lg font-light cursor-pointer"
              onClick={() => onNavigate(faqRef)}
            >
              FAQ
            </li>
          </ul>
        </div>

        <a
          href="tel:+13322489904"
          className="font-gotham text-white text-lg font-light"
        >
          +13322489904
        </a>
      </header>

      <ul className="md:hidden px-2 container w-full flex justify-between absolute top-[125px] left-1/2 -translate-x-1/2">
        <li
          className="font-gotham text-white text-lg font-light cursor-pointer"
          onClick={() => onNavigate(aboutRef)}
        >
          ABOUT
        </li>

        <li
          className="font-gotham text-white text-lg font-light cursor-pointer"
          onClick={() => onNavigate(servicesRef)}
        >
          SERVICES
        </li>

        <li
          className="font-gotham text-white text-lg font-light cursor-pointer"
          onClick={() => onNavigate(contactsRef)}
        >
          CONTACTS
        </li>

        <li
          className="font-gotham text-white text-lg font-light cursor-pointer"
          onClick={() => onNavigate(faqRef)}
        >
          FAQ
        </li>
      </ul>
    </>
  );
};
