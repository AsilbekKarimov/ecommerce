import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const ClothesSwiper = ({ slides, width }) => {
  return (
    <div
      className="flex items-center justify-center mt-[144px]"
      style={{ width }}
    >
      <Swiper
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={20}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-[350px]"
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col items-center justify-center gap-[15px]">
              <img
                src={slide.image}
                alt="swiper-img"
                className="w-full h-full"
              />
              <p className="text-[20px] text-center text-[#5A5A5A] font-semibold leading-[24px] ">
                {slide.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClothesSwiper;
