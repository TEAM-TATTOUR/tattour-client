import { styled } from 'styled-components';
import { LabelCustomSmall } from '../assets/icon';

const SmallTattooCard = ({
  img,
  title,
  discountRate,
  price,
  originalPrice,
  isCustom,
}: {
  img: string;
  title: string;
  discountRate: number;
  price: number;
  originalPrice: number;
  isCustom: boolean;
}) => {
  return (
    <St.SmallTattooCardItem>
      {isCustom && <LabelCustomSmall />}
      <St.SmallTattooCardImage src={img} alt='작은-타투-이미지' />
      <St.SmallTattooCardTitle>{title}</St.SmallTattooCardTitle>
      <St.SmallTattooCardPriceTextWrapper>
        <St.SmallTattooCardDiscountRate>{discountRate}%</St.SmallTattooCardDiscountRate>
        <St.SmallTattooCardPriceText>{price.toLocaleString()}원</St.SmallTattooCardPriceText>
      </St.SmallTattooCardPriceTextWrapper>
      <St.SmallTattooCardOriginalPriceText>
        {originalPrice.toLocaleString()}원
      </St.SmallTattooCardOriginalPriceText>
    </St.SmallTattooCardItem>
  );
};

const St = {
  SmallTattooCardItem: styled.article`
    position: relative;

    & > svg {
      position: absolute;
    }
  `,

  SmallTattooCardImage: styled.img`
    width: 12.2rem;
    height: 13rem;

    object-fit: contain;
    background-color: ${({ theme }) => theme.colors.gray0};
  `,

  SmallTattooCardTitle: styled.h3`
    margin-top: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  SmallTattooCardPriceTextWrapper: styled.div`
    display: flex;
  `,

  SmallTattooCardDiscountRate: styled.p`
    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.pink5};
  `,

  SmallTattooCardPriceText: styled.p`
    margin-left: 0.6rem;

    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  SmallTattooCardOriginalPriceText: styled.p`
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.body_line_medium_12};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default SmallTattooCard;
