import React, { useState } from 'react';
import { styled } from 'styled-components';
import { IcBtnStepperMinusLight, IcBtnStepperPlusDark } from '../../assets/icon';

const CountPrice = () => {
  const [quantity, setQuantity] = useState('1');

  return (
    <St.CountPriceWrapper>
      <St.ShowPrice>
        <St.DetailGroup className='price-group'>
          <St.Subject>가격</St.Subject>
          <St.Detail>1,000원</St.Detail>
        </St.DetailGroup>
        <St.DetailGroup>
          <St.Subject>수량</St.Subject>
          <St.QuantityButton>
            <IcBtnStepperMinusLight />
            <St.Detail>{quantity}</St.Detail>
            <IcBtnStepperPlusDark />
          </St.QuantityButton>
        </St.DetailGroup>
        <St.Line />
      </St.ShowPrice>
      <St.Option></St.Option>
    </St.CountPriceWrapper>
  );
};

export default CountPrice;

const St = {
  CountPriceWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8.1rem;
  `,
  ShowPrice: styled.article`
    width: 100%;

    padding: 3rem 1.8rem 3rem 1.8rem;
    border-radius: 0.5rem;
    ${({ theme }) => theme.fonts.title_semibold_20};
    background-color: ${({ theme }) => theme.colors.bg};
  `,
  Subject: styled.p`
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  Detail: styled.p`
    ${({ theme }) => theme.fonts.title_extrabold_18};
    color: ${({ theme }) => theme.colors.gray5};
  `,
  DetailGroup: styled.div`
    display: flex;
    justify-content: space-between;
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray8};

    .price-group {
      margin-bottom: 3rem;
    }
  `,
  QuantityButton: styled.article`
    display: flex;
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  Line: styled.div`
    width: 100%;
    height: 1px;
    margin-top: 3.6rem;

    background-color: ${({ theme }) => theme.colors.gray1};
  `,
  Option: styled.article`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
};
