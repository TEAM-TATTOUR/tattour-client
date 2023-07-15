import { styled } from 'styled-components';
import { ImgStorage } from '../../assets/icon';

const MySaveItem = ({
  title,
  haveReferenceImage,
}: {
  title: string;
  haveReferenceImage: boolean;
}) => {
  return (
    <St.MySaveItem>
      {!haveReferenceImage && <ImgStorage />}
      <St.MySaveItemImg />
      <St.MySaveItemTitle>{title}</St.MySaveItemTitle>
    </St.MySaveItem>
  );
};

const St = {
  MySaveItem: styled.article`
    position: relative;

    & > svg {
      position: absolute;
    }
  `,

  MySaveItemImg: styled.img`
    width: 15.3rem;
    height: 16.3rem;

    background-color: ${({ theme }) => theme.colors.gray0};
  `,

  MySaveItemTitle: styled.h3`
    margin-top: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,
};

export default MySaveItem;
