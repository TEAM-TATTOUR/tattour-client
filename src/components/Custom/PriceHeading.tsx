import React from 'react';
import { styled } from 'styled-components';

const PriceHeading = () => {
  return (
    <St.HeadingWrapper>
      <St.Title>원하는 수량이 어떻게 되시나요?</St.Title>
      <St.SubTitle>
        수량에 따라 단가가 달라져요. 도안 공개로 단가를 낮춰보세요! 결제는 도안 확정 이후
        진행됩니다.
      </St.SubTitle>
    </St.HeadingWrapper>
  );
};

export default PriceHeading;

const St = {
  HeadingWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;
    margin: 5.6rem 0 4rem 2.2rem;
  `,
  Title: styled.h2`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  SubTitle: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
};
