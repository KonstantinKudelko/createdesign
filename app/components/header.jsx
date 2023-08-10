import Image from "next/image";

export const Header = () => {
  return (
    <header className="pt-8 pb-6 mx-auto w-full max-w-[1200px] flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 border-b border-b-white">
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
