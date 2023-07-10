import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImgTestOnBoarding from '../../../assets/ImgTestOnBoarding.png'; // 테스트용 목업 이미지
import ic_arrow_left_gray from '../../../assets/icon/ic_arrow_left_gray.svg';
import ic_arrow_right_gray from '../../../assets/icon/ic_arrow_right_gray.svg';

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

      /* swiper 버튼 커스텀 스타일링 */
      /* swiper 버튼 커스텀 첫 시작 / 맨 끝은 안보이게 */
      .swiper-button-disabled {
        display: none;
      }

      /* swiper 버튼 svg 아이콘으로 커스텀 */
      .swiper-button-next {
        background: url(${ic_arrow_right_gray}) no-repeat;
        background-position: center;
      }

      .swiper-button-prev {
        background: url(${ic_arrow_left_gray}) no-repeat;
        background-position: center;
      }

      /* 버튼 커스텀을 위해 원래 라이브러리의 버튼은 안보이게 */
      .swiper-button-next::after,
      .swiper-button-prev::after {
        display: none;
      }

      /* swiper 페이지네이션 bullet 커스텀 스타일링 */
      .swiper-pagination-bullet {
        height: 0.6rem;
        width: 0.6rem;
        background-color: ${({ theme }) => theme.colors.gray1};
      }

      .swiper-pagination-bullet-active {
        height: 0.6rem;
        width: 0.6rem;
        background-color: ${({ theme }) => theme.colors.gray9};
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

    width: 100%;
    padding: 2.2rem 0 5.6rem 2.6rem; /* 캐러셀 구조 다 나오면 여백 수정 필요 */
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
