import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImgTestOnBoarding from '../../assets/ImgTestOnBoarding.png';
import IcCarouselLeftArrow from '../../assets/icon/IcCarouselLeftArrow.svg';
import IcCarouselRightArrow from '../../assets/icon/IcCarouselRightArrow.svg';

const OnBoardingCarousel = () => {
  return (
    <St.SwiperWrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <St.SwiperContainer>
            <St.SwiperHeader>
              <St.HeaderMainText>크기를 선택해주세요000</St.HeaderMainText>
              <St.HeaderSubText>고민 중인 실제 사이즈를 선택해보세요!</St.HeaderSubText>
            </St.SwiperHeader>
            <St.SwiperImgContainer>
              <img src={ImgTestOnBoarding} alt='온보딩 이미지' />
            </St.SwiperImgContainer>
          </St.SwiperContainer>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperContainer>
            <St.SwiperHeader>
              <St.HeaderMainText>크기를 선택해주세요1111</St.HeaderMainText>
              <St.HeaderSubText>고민 중인 실제 사이즈를 선택해보세요!</St.HeaderSubText>
            </St.SwiperHeader>
            <St.SwiperImgContainer>
              <img src={ImgTestOnBoarding} alt='온보딩 이미지' />
            </St.SwiperImgContainer>
          </St.SwiperContainer>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperContainer>
            <St.SwiperHeader>
              <St.HeaderMainText>크기를 선택해주세요2222</St.HeaderMainText>
              <St.HeaderSubText>고민 중인 실제 사이즈를 선택해보세요!</St.HeaderSubText>
            </St.SwiperHeader>
            <St.SwiperImgContainer>
              <img src={ImgTestOnBoarding} alt='온보딩 이미지' />
            </St.SwiperImgContainer>
          </St.SwiperContainer>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperContainer>
            <St.SwiperHeader>
              <St.HeaderMainText>크기를 선택해주세요333</St.HeaderMainText>
              <St.HeaderSubText>고민 중인 실제 사이즈를 선택해보세요!</St.HeaderSubText>
            </St.SwiperHeader>
            <St.SwiperImgContainer>
              <img src={ImgTestOnBoarding} alt='온보딩 이미지' />
            </St.SwiperImgContainer>
          </St.SwiperContainer>
        </SwiperSlide>
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

    /* swiper 영역 스타일링 */
    .swiper {
      .swiper-slide {
        display: flex;
        flex-direction: column;
        height: 63.6rem;
      }

      .swiper-button-disabled {
        display: none;
      }

      .swiper-button-next {
        background: url(${IcCarouselLeftArrow}) no-repeat;
        background-position: center;
      }

      .swiper-button-prev {
        background: url(${IcCarouselRightArrow}) no-repeat;
        background-position: center;
      }

      .swiper-button-next::after,
      .swiper-button-prev::after {
        display: none;
      }
    }
  `,

  SwiperContainer: styled.article`
    display: flex;
    flex-direction: column;
  `,

  SwiperHeader: styled.header`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    padding: 2.2rem 0 5.6rem; /* 캐러셀 구조 다 나오면 여백 수정 필요 */
  `,

  HeaderMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  HeaderSubText: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  SwiperImgContainer: styled.div`
    display: flex;
    justify-content: center;

    & > img {
      padding: 0 0.9rem;
    }
  `,
};
