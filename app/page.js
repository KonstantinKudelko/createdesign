import { Header } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full h-full">
        <section className="h-screen">
          <Image
            src="/images/homepage/hero-image.jpg"
            alt="hero-image"
            width={700}
            height={475}
            className="h-full w-3/5 object-cover"
          />
        </section>
      </main>
    </>
  );
}
