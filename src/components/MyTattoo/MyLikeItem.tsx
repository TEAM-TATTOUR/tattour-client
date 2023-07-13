import { styled } from 'styled-components';

const renderDummyImageComponent = () => {
  return (
    <div
      style={{
        width: '12.2rem',
        height: '13rem',
        backgroundColor: 'gray',
      }}
    ></div>
  );
};

const MyLikeItem = ({
  title,
  discountRate,
  price,
  originalPrice,
}: {
  title: string;
  discountRate: number;
  price: number;
  originalPrice: number;
}) => {
  return (
    <article>
      {renderDummyImageComponent()}
      <St.MyLikeItemTitle>{title}</St.MyLikeItemTitle>
      <St.MyLikeItemPriceTextWrapper>
        <St.MyLikeItemDiscountRate>{discountRate}%</St.MyLikeItemDiscountRate>
        <St.MyLikeItemPriceText>{price.toLocaleString()}원</St.MyLikeItemPriceText>
      </St.MyLikeItemPriceTextWrapper>
      <St.MyLikeItemOriginalPriceText>
        {originalPrice.toLocaleString()}원
      </St.MyLikeItemOriginalPriceText>
    </article>
  );
};

const St = {
  MyLikeItemTitle: styled.h3`
    margin-top: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  MyLikeItemPriceTextWrapper: styled.div`
    display: flex;
  `,

  MyLikeItemDiscountRate: styled.p`
    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.pink5};
  `,

  MyLikeItemPriceText: styled.p`
    margin-left: 0.6rem;

    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  MyLikeItemOriginalPriceText: styled.p`
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.body_line_medium_12};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default MyLikeItem;
