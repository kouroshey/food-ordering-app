import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import FoodComp from '../FoodList/FoodComp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const MainSwiper = () => {
  return (
    <div className='w-full'>  
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={
          {320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 2,
            spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          
          }
        }
      >
        <SwiperSlide><FoodComp /></SwiperSlide>
        <SwiperSlide><FoodComp /></SwiperSlide>
        <SwiperSlide><FoodComp /></SwiperSlide>
        <SwiperSlide><FoodComp /></SwiperSlide>
        <SwiperSlide><FoodComp /></SwiperSlide>
        <SwiperSlide><FoodComp /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MainSwiper