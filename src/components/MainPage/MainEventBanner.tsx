import { styled } from 'styled-components';
import imgHomeBanner from '../../assets/img_home_banner.png';
import React from 'react';

const MainEventBanner = ({
  setToast,
}: {
  setToast: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClickEventBanner = () => {
    setToast(true);
  };

  return (
    <St.MainEventBanner>
      {/* <St.BannerImg onClick={handleClickEventBanner} src={imgHomeBanner} alt='메인 이벤트 배너' /> */}
    </St.MainEventBanner>
  );
};

const St = {
  MainEventBanner: styled.section`
    display: flex;
    justify-content: center;

    height: 10.8rem;
    background-color: ${({ theme }) => theme.colors.gray1};
  `,

  BannerImg: styled.img`
    width: 100%;
    object-fit: cover;
  `,
};

export default MainEventBanner;
