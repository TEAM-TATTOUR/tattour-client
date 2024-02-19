import { styled } from 'styled-components';
import { LabelCustomSmall } from '../assets/icon';
import { useNavigate } from 'react-router-dom';

const SmallTattooCard = ({
  stickerId,
  img,
  title,
  discountRate,
  price,
  originalPrice,
  isCustom,
}: {
  stickerId: number;
  img: string;
  title: string;
  discountRate: number;
  price: number;
  originalPrice: number;
  isCustom: boolean;
}) => {
  const navigate = useNavigate();

  const handleClickItem = (stickerId: number) => {
    navigate(`/detail/${stickerId}`);
  };
  return (
    <St.SmallTattooCardItem onClick={() => handleClickItem(stickerId)}>
      {isCustom && <LabelCustomSmall />}
      <St.SmallTattooCardImage src={img} alt='작은 타투 이미지' />
      <St.SmallTattooCardTitle>{title}</St.SmallTattooCardTitle>
      <St.SmallTattooCardPriceTextWrapper>
        <St.SmallTattooCardDiscountRate>{discountRate}%</St.SmallTattooCardDiscountRate>
        <St.SmallTattooCardPriceText>
          {price.toLocaleString()}
          <span>원</span>
        </St.SmallTattooCardPriceText>
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

    margin-top: 0.3rem;
  `,

  SmallTattooCardDiscountRate: styled.p`
    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.pink5};
  `,

  SmallTattooCardPriceText: styled.p`
    margin-left: 0.6rem;

    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.gray7};

    & > span {
      ${({ theme }) => theme.fonts.title_semibold_16};
    }
  `,

  SmallTattooCardOriginalPriceText: styled.p`
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.body_line_medium_12};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default SmallTattooCard;
