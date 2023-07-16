import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OrderFooter = () => {
  const TOTAL_PRICE = 5500;

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/receipt');
  };

  return (
    <St.footer>
      <St.button type='button' onClick={handleClickButton}>
        {TOTAL_PRICE.toLocaleString()}원 결제하기
      </St.button>
    </St.footer>
  );
};

export default OrderFooter;

const St = {
  footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  button: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
