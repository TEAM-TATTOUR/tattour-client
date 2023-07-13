import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const DetailCarousel = () => {
  return (
    <St.Wrapper>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} loop={true}>
        <SwiperSlide>
          <St.Card>Slide 1</St.Card>
        </SwiperSlide>
        <SwiperSlide>
          <St.Card>Slide 2</St.Card>
        </SwiperSlide>
        <SwiperSlide>
          <St.Card>Slide 3</St.Card>
        </SwiperSlide>
      </Swiper>
    </St.Wrapper>
  );
};

export default DetailCarousel;

const St = {
  Wrapper: styled.section`
    & .swiper-slide {
      background-color: ${({ theme }) => theme.colors.gray0};
    }

    & .swiper-pagination {
      margin-bottom: 2rem;
    }

    & .swiper-pagination-bullet {
      width: 0.6rem;
      height: 0.6rem;

      background-color: ${({ theme }) => theme.colors.white};
      opacity: 1 !important;
    }

    & .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.colors.gray8};
    }

    & .swiper-wrapper {
      transition-timing-function: linear;
    }
  `,
  Card: styled.div`
    width: 100%;
    height: 23.5rem;

    background-color: ${({ theme }) => theme.colors.gray0};
    color: black;
  `,
};
