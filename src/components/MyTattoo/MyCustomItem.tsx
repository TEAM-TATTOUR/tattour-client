import { styled } from 'styled-components';
import { LabelCustomSmall } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

const MyCustomItem = ({ id, name, imageUrl }: { id: number; name: string; imageUrl: string }) => {
  const navigate = useNavigate();

  const handleClickMyCustom = (id: number) => () => {
    navigate(`/my-tattoo/detail/${id}`);
  };

  return (
    <St.MyCustomItem onClick={handleClickMyCustom(id)}>
      <LabelCustomSmall />
      <St.MyCustomItemImg src={imageUrl} />
      <St.MyCustomItemTitle>{name}</St.MyCustomItemTitle>
    </St.MyCustomItem>
  );
};

const St = {
  MyCustomItem: styled.article`
    position: relative;

    & > svg {
      position: absolute;
    }
  `,

  MyCustomItemImg: styled.img`
    width: 15.3rem;
    height: 16.3rem;

    object-fit: contain;
    background-color: gray;
  `,

  MyCustomItemTitle: styled.h3`
    margin-top: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,
};

export default MyCustomItem;
