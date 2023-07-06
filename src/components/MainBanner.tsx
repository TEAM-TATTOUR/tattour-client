import React from 'react';
import { styled } from 'styled-components';

const MainBanner = () => {
  return (
    <St.BannerWrapper>
      <St.CopyWright>
        Journey <br />
        of No Regrets,
      </St.CopyWright>
      <St.SmallCopy>나만의 타투 스티커를 만들어 보세요 </St.SmallCopy>
    </St.BannerWrapper>
  );
};

const St = {
  BannerWrapper: styled.section`
    width: 100%;
    height: 76.1rem;
    padding: 0 1.7rem;
    background-color: black;
  `,

  CopyWright: styled.p`
    padding-top: 8.1rem;

    font-size: 7.8rem;
    color: ${({ theme }) => theme.colors.white};
  `,

  SmallCopy: styled.span`
    padding-top: 6.6rem;

    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.white};
  `,
};

export default MainBanner;
