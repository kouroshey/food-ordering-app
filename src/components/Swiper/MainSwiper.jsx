import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import FoodComp from '../FoodList/FoodComp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const MainSwiper = (props) => {
  const sliderItems = props.foods
  return (
    <div className='w-full'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={
          {
            320: {
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
            },
            1280: {
              slidesPerView: 4,
              spaceBetween:40
            }

          }
        }
      >
        {/* this map create all of slider items */}
        {sliderItems ? sliderItems.map(item => (
          item.popular ? <SwiperSlide key={item.id}>
          <FoodComp food={item}  />
        </SwiperSlide> : '' 
        ) ) : props.error}


      </Swiper>
    </div>
  )
}

export default MainSwiper