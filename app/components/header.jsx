import Image from "next/image";

export const Header = () => {
  return (
    <header className="mx-auto pt-8 pb-6 w-[calc(100%-64px)] flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 border-b border-b-white">
      <div className="w-full absolute top-0 left-0 -z-10 shadow-[80px_-50px_140px_180px_rgb(0,0,0,0.5)]" />

      <Image
        width={150}
        height={50}
        src="/images/logo.svg"
        alt="logo"
        className="max-w-[90px]"
      />

      <a href="#" className="font-gotham text-white text-lg font-light">
        +(213) 252-4023
      </a>
    </header>
  );
};
