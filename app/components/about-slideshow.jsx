"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export const AboutSlideShow = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed z-10 inset-0 bg-black/50 animate-fadeInOverlay" />

        <Dialog.Content className="h-[90%] w-[90%] fixed z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-fadeInContent">
          <Swiper
            loop={true}
            style={{
              height: "100%",
              "--swiper-pagination-color": "#fff",
              "--swiper-navigation-color": "#fff",
            }}
            modules={[Navigation]}
            navigation={true}
            slidesPerView={1}
          >
            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-1.jpeg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-2.jpeg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-3.jpeg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-4.jpeg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-5.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-6.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-7.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-8.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-9.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-10.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-11.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-12.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-13.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/homepage/about-slide-14.jpg"
                alt="about-slide"
                fill={true}
                className="w-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
