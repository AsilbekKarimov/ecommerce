import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const MainSwiper = ({ width, slides, delay }) => {
  return (
    <div className={`flex items-center justify-center mt-[180px]`} style={{ width }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1000}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper h-[360px]"
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id} className="relative">
            <img src={slide.image} alt='swiper-img' className="w-full h-full object-cover rounded-[10px]" />
            {slide.title && slide.description && (
              <div className='absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-[25px] text-start pl-5'>
                <h1 className='w-[440px] font-bold text-[36px] text-[#33394F] leading-[44px]'>{slide.title}</h1>
                <p className='w-[460px] font-normal text-[18px] text-[#33394F] opacity-60 leading-[25px]'>{slide.description}</p>
              </div>
            )}
            {slide.button && slide.price && (
              <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col gap-[10px] items-center'>
                <button className='rounded-[114px] bg-white w-[170px] h-[40px] font-bold text-[14px] leading-[20px] text-[#33394F]'>{slide.button}</button>
                <div className='bg-white w-[75px] h-[27px] rounded-[114px] flex items-center justify-center'>
                  <p className='font-normal leading-[20px] text-[14px] text-[#33394F] opacity-40'>{slide.price}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSwiper;
