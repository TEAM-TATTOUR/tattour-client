import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const DetailCarousel = () => {
  return (
    <St.Wrapper>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
        }}
        speed={1000}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <St.Card>Slide 1</St.Card>
        </SwiperSlide>
        <SwiperSlide>
          <St.Card>Slide 2</St.Card>
        </SwiperSlide>
        <SwiperSlide>
          <St.Card>Slide 3</St.Card>
        </SwiperSlide>
        <SwiperSlide>
          <St.Card>Slide 4</St.Card>
        </SwiperSlide>
      </Swiper>
    </St.Wrapper>
  );
};

export default DetailCarousel;

const St = {
  Wrapper: styled.section`
    margin-top: 3rem;
    padding: 0rem 15rem;

    & .swiper-pagination {
      position: relative;
      margin-top: 1rem;
    }

    & .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: pink;
    }

    & .swpier-wrapper {
      transition-timing-function: linear;
    }
  `,
  Card: styled.div`
    height: 10rem;
    background-color: pink;
    color: black;
    border: 0.5rem solid rgb(255, 134, 154);
  `,
};
