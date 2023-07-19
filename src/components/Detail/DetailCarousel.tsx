import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { LabelCustomSmall } from '../../assets/icon';

// 테스트 이미지

const DetailCarousel = ({ isCustom, images }: { isCustom: boolean; images: string[] }) => {
  return (
    <St.Wrapper>
      {isCustom && <LabelCustomSmall />}
      <Swiper modules={[Pagination]} pagination={{ clickable: true }} slidesPerView={1} loop={true}>
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <St.Card>
              <img src={src} />
            </St.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </St.Wrapper>
  );
};

export default DetailCarousel;

const St = {
  Wrapper: styled.section`
    position: relative;

    & > svg {
      position: absolute;
      z-index: 2;
    }

    & .swiper-slide {
      background-color: ${({ theme }) => theme.colors.gray0};
    }

    & .swiper-pagination {
      margin-bottom: 1.4rem;
      position: absolute;
      bottom: 0;
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
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 23.5rem;

    background-color: ${({ theme }) => theme.colors.gray0};
    color: black;
  `,
};
