import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CartFooter = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/cartorder');
  };

  return (
    <St.footer>
      <St.button type='button' onClick={handleClickButton}>
        구매하기
      </St.button>
    </St.footer>
  );
};

const St = {
  footer: styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 43rem;
    height: 7rem;
  `,

  button: styled.button`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray9};
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default CartFooter;
