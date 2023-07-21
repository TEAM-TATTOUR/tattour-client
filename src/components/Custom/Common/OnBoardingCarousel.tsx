import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ic_arrow_left_gray from '../../../assets/icon/ic_arrow_left_gray.svg';
import ic_arrow_right_gray from '../../../assets/icon/ic_arrow_right_gray.svg';
import { CUSTOM_CAROUSEL_DATA } from '../../../assets/data/ONBOARDING_CAROUSEL_CONTNET';

const OnBoardingCarousel = () => {
  return (
    <St.SwiperWrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={70}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {CUSTOM_CAROUSEL_DATA.map(({ id, content, imgAlt }) => {
          return (
            <SwiperSlide key={id}>
              <St.SwiperContainer>
                <img src={content} alt={imgAlt} />
              </St.SwiperContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </St.SwiperWrapper>
  );
};

export default OnBoardingCarousel;

const St = {
  SwiperWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: calc(100dvh - 12.6rem);

    /* swiper 영역 스타일링 */
    .swiper {
      height: 100%;

      .swiper-wrapper {
        height: 100%;
      }

      .swiper-slide {
        display: flex;
        flex-direction: column;
        height: 63.6rem;
        width: 100%;
      }

      /* swiper 버튼 커스텀 스타일링 */
      /* swiper 버튼 커스텀 첫 시작 / 맨 끝은 안보이게 */
      .swiper-button-disabled {
        display: none;
      }

      /* swiper 버튼 svg 아이콘으로 커스텀 */
      .swiper-button-next {
        width: 2rem;
        height: 2rem;
        margin-right: 2.8rem;
        margin-top: -3rem;

        background: url(${ic_arrow_right_gray}) no-repeat;
        background-position: center;
        background-size: auto;
      }

      .swiper-button-prev {
        width: 2rem;
        height: 2rem;
        margin-left: 2.8rem;
        margin-top: -3rem;

        background: url(${ic_arrow_left_gray}) no-repeat;
        background-position: center;
        background-size: auto;
      }

      /* 버튼 커스텀을 위해 원래 라이브러리의 버튼은 안보이게 */
      .swiper-button-next::after,
      .swiper-button-prev::after {
        display: none;
      }

      .swiper-pagination {
        position: sticky;
        bottom: 7rem;

        display: flex;
        justify-content: center;
        gap: 0.9rem;
        padding-bottom: 4rem;
      }
      /* swiper 페이지네이션 bullet 커스텀 스타일링 */
      .swiper-pagination-bullet {
        height: 0.6rem;
        width: 0.6rem;
        margin: 0;
        background-color: ${({ theme }) => theme.colors.gray1};
        opacity: 100;
      }

      .swiper-pagination-bullet-active {
        height: 0.6rem;
        width: 0.6rem;
        background-color: ${({ theme }) => theme.colors.gray9};
        opacity: 100;
      }
    }
  `,

  SwiperContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;

    & > img {
      width: 30.7rem;
      height: 62.6rem;
    }
  `,
};
