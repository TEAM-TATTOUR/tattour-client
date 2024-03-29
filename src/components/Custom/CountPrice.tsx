import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import {
  IcBtnStepperMinusDark,
  IcBtnStepperMinusLight,
  IcBtnStepperPlusDark,
} from '../../assets/icon';
import { PRICE } from '../../assets/data/PRICE';

interface CountPriceProps {
  isPublic: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  size: string | undefined;
  setTotalPrice: (newTotalPrice: number) => void;
}

const CountPrice = ({ isPublic, setCount, size, setTotalPrice }: CountPriceProps) => {
  const price = PRICE.find((item) => item.size === size)?.price;
  const discount = PRICE.find((item) => item.size === size)?.discount;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setCount(quantity);
  }, [quantity, setCount]);

  useEffect(() => {
    if (isPublic) {
      setTotalPrice(quantity * (price || 0) - (discount || 0));
    } else {
      setTotalPrice(quantity * (price || 0));
    }
  }, [quantity, price, discount, isPublic, setTotalPrice]);

  return (
    <St.CountPriceWrapper>
      <St.ShowPrice>
        <St.DetailGroup className='price-group'>
          <St.Subject>가격</St.Subject>
          <St.PriceDetail>
            <St.Price>{price && price.toLocaleString()}</St.Price>
            <St.Unit>원</St.Unit>
          </St.PriceDetail>
        </St.DetailGroup>
        <St.DetailGroup>
          <St.Subject>수량</St.Subject>
          <St.QuantityButton>
            {quantity === 1 ? (
              <IcBtnStepperMinusLight />
            ) : (
              <IcBtnStepperMinusDark onClick={() => setQuantity((prev) => prev - 1)} />
            )}
            <St.Quantity>{quantity}</St.Quantity>
            <IcBtnStepperPlusDark onClick={() => setQuantity((prev) => prev + 1)} />
          </St.QuantityButton>
        </St.DetailGroup>
        <St.Line />
        <St.TotalPriceWrapper>
          <St.TotalPriceText>예상 결제 금액</St.TotalPriceText>
          <St.TotalPriceGroup>
            {isPublic ? (
              <>
                <St.Discount>{discount?.toLocaleString()}</St.Discount>
                <St.TotalPrice>
                  {(quantity * (price || 0) - (discount || 0)).toLocaleString()}
                </St.TotalPrice>
              </>
            ) : (
              <>
                <St.TotalPrice>{(quantity * (price || 0)).toLocaleString()}</St.TotalPrice>
              </>
            )}
            <St.Unit>원</St.Unit>
          </St.TotalPriceGroup>
        </St.TotalPriceWrapper>
      </St.ShowPrice>
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

    padding: 0 2rem;
  `,
  ShowPrice: styled.article`
    padding: 3rem 1.8rem 3rem 1.8rem;
    border-radius: 0.5rem;
    ${({ theme }) => theme.fonts.title_semibold_20};
    background-color: ${({ theme }) => theme.colors.bg};

    width: 100%;
    height: 23.4rem;
    .price-group {
      margin-bottom: 3rem;
    }
  `,
  Subject: styled.p`
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  DetailGroup: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 1rem;
  `,
  PriceDetail: styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
  `,
  Price: styled.p`
    ${({ theme }) => theme.fonts.title_extrabold_18};
    color: ${({ theme }) => theme.colors.gray5};
  `,
  Unit: styled.p`
    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  Quantity: styled.p`
    margin: 0 1.6rem;
    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray6};
  `,
  QuantityButton: styled.article`
    display: flex;
    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  Line: styled.div`
    width: 100%;
    height: 0.1rem;
    margin-top: 3.6rem;

    background-color: ${({ theme }) => theme.colors.gray1};
  `,
  Option: styled.article`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  TotalPriceWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 3rem 1rem 0 1rem;
  `,
  TotalPriceText: styled.p`
    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  TotalPriceGroup: styled.div`
    display: flex;
    align-items: center;
  `,
  Discount: styled.p`
    margin-right: 0.8rem;
    ${({ theme }) => theme.fonts.body_line_medium_14};
    color: ${({ theme }) => theme.colors.gray2};
  `,
  TotalPrice: styled.p`
    margin-right: 0.5rem;
    ${({ theme }) => theme.fonts.title_extrabold_24};
    color: ${({ theme }) => theme.colors.pink5};
  `,
};
