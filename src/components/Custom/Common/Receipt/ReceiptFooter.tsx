import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const ReceiptFooter = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/');
  };

  return (
    <St.CustomFooter>
      <St.FooterButton type='button' onClick={handleClickButton}>
        홈으로 이동하기
      </St.FooterButton>
    </St.CustomFooter>
  );
};

const St = {
  CustomFooter: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    width: 100%;
    max-width: 43rem;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  FooterButton: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default ReceiptFooter;
