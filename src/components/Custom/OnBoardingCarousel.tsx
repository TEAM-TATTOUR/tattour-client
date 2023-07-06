import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const OnBoardingCarousel = () => {
  return (
    <>
      <St.Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide </SwiperSlide>
      </St.Swiper>
    </>
  );
};

export default OnBoardingCarousel;

const St = {
  Swiper: styled(Swiper)`
    .swiper-slide {
      height: 63.6rem;
    }
  `,
};
