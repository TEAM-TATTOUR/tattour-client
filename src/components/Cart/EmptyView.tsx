import { styled } from 'styled-components';
import { IcError } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';

const EmptyView = () => {
  const navigate = useNavigate();

  const handleClickBackButton = () => {
    navigate('/list');
  };

  return (
    <St.CartPageSection>
      <IcError />
      <St.ErrorText>아직 장바구니에 담은 상품이 없어요</St.ErrorText>
      <St.ReturnButton onClick={handleClickBackButton}>상품 둘러보기</St.ReturnButton>
    </St.CartPageSection>
  );
};

const St = {
  CartPageSection: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 1.6rem;
  `,

  ErrorText: styled.p`
    margin-top: 1.9rem;
    text-align: center;
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,

  ReturnButton: styled.button`
    margin-top: 1.9rem;
    width: 12.2rem;
    height: 4.31rem;
    border-radius: 0.6rem;
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.pink5};
    background-color: ${({ theme }) => theme.colors.pink1};
  `,
};

export default EmptyView;
