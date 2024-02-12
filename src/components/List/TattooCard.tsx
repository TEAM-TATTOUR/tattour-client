import styled from 'styled-components';
import { LabelCustomSmall } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { AllListItemProps } from '../../libs/hooks/list/useGetAllList';

interface TattooCardProps {
  data: AllListItemProps;
}
const TattooCard = ({ data }: TattooCardProps) => {
  const { id, name, imageUrl, price, discountRate, discountPrice, isCustom } = data;
  const navigate = useNavigate();

  const handleClickCard = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <St.Card key={id} onClick={() => handleClickCard(id)}>
      <St.CardImg>
        {isCustom && <LabelCustomSmall />}
        <img src={imageUrl} />
      </St.CardImg>
      <h2>{name}</h2>
      <div>
        <St.CardDiscount>{discountRate}%</St.CardDiscount>
        <St.CardPrice>
          {discountPrice && discountPrice.toLocaleString()}
          <span>원</span>
        </St.CardPrice>
      </div>
      <p>{price.toLocaleString()}원</p>
    </St.Card>
  );
};

export default TattooCard;

const St = {
  Card: styled.article`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.2rem;

    & > h2 {
      margin: 1.5rem 0rem 0rem 2rem;
      color: ${({ theme }) => theme.colors.gray7};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    & > p {
      margin: 0.4rem 0rem 0rem 2rem;
      color: ${({ theme }) => theme.colors.gray1};
      ${({ theme }) => theme.fonts.body_line_medium_14};
    }

    & > div {
      margin: 0.3rem 0rem 0rem 2rem;
    }
  `,
  CardImg: styled.i`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    height: 20.1rem;
    background-color: ${({ theme }) => theme.colors.gray0};

    & > img {
      width: 18.3rem;
      height: 18.3rem;
    }

    & > svg {
      position: absolute;
      top: 0;
      left: 0;
    }
  `,
  CardDiscount: styled.span`
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_extrabold_16};
  `,
  CardPrice: styled.span`
    margin-left: 0.5rem;

    color: ${({ theme }) => theme.colors.gray7};
    ${({ theme }) => theme.fonts.title_extrabold_16};

    & > span {
      ${({ theme }) => theme.fonts.title_semibold_16};
    }
  `,
};
