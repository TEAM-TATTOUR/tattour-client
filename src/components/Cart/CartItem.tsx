import styled from 'styled-components';
import { IcCancelDark, IcMinus, IcMinusOneunder, IcPlus } from '../../assets/icon';
import { useState } from 'react';
const CartItem = ({ id, name, price, originalPrice }) => {
  const [count, setCount] = useState(1);

  return (
    <St.Item>
      <St.ItemInformation>
        <St.TattooImage src='https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/cf89d9ff-a11c-4a8f-8bf7-5d29a3c7bb9e' />
        <St.TitleSection>
          <St.TattooTitle>{name}</St.TattooTitle>
          <St.ItemPriceBox>
            <St.TattooPriceText>{price.toLocaleString()}원</St.TattooPriceText>
            <St.TattooOriginalPriceText>
              {originalPrice.toLocaleString()}원
            </St.TattooOriginalPriceText>
          </St.ItemPriceBox>
        </St.TitleSection>
      </St.ItemInformation>
      <St.ButtonSection>
        <IcCancelDark />
        <St.Stepper>
          {count === 1 ? (
            <IcMinusOneunder />
          ) : (
            <IcMinus onClick={() => setCount((prev) => prev - 1)} />
          )}
          <span>{count}</span>
          <IcPlus onClick={() => setCount((prev) => prev + 1)} />
        </St.Stepper>
      </St.ButtonSection>
    </St.Item>
  );
};

const St = {
  ItemInformation: styled.section`
    display: flex;
  `,

  Stepper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 8.9rem;

    & > span {
      ${({ theme }) => theme.fonts.title_semibold_18};
      color: ${({ theme }) => theme.colors.gray6};
    }
  `,

  Item: styled.article`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  `,

  TattooImage: styled.img`
    width: 8.4rem;
    height: 8.4rem;
    object-fit: cover;
  `,

  TitleSection: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;

    & > div {
      display: flex;
      align-items: center;
    }
  `,

  TattooTitle: styled.p`
    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  ItemPriceBox: styled.div`
    margin-top: 0.7rem;
  `,

  TattooPriceText: styled.p`
    margin-right: 0.8rem;
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray6};
  `,

  TattooOriginalPriceText: styled.p`
    ${({ theme }) => theme.fonts.body_line_medium_14}
    color: ${({ theme }) => theme.colors.gray1};
  `,

  ButtonSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  `,
};

export default CartItem;
