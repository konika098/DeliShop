import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/1nMHLP8/pexels-photo-2067432.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/cQMRj3D/pexels-photo-7441761.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/7tVM3sZ/pexels-photo-15564188.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/m4tyqd3/pexels-photo.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Pc6BC57/pexels-photo-8739111.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/zbX6ZbF/pexels-photo-4110541.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/8X8B4rW/pexels-photo-14048850.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/47Wcx9V/pexels-photo-5862147.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/cQqf6Qt/pexels-photo-4753648.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
