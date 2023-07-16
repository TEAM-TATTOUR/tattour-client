import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OrderFooter = ({ isComplete }: { isComplete: boolean }) => {
  const TOTAL_PRICE = 5500;

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/complete');
  };

  console.log(isComplete);

  return (
    <St.footer>
      <St.button $isComplete={isComplete} type='button' onClick={handleClickButton}>
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
  `,

  button: styled.button<{ $isComplete: boolean }>`
    width: 100%;
    height: 100%;

    background-color: ${({ theme, $isComplete }) =>
      $isComplete ? theme.colors.gray9 : theme.colors.gray3};

    color: ${({ theme, $isComplete }) => ($isComplete ? theme.colors.pink5 : theme.colors.white)};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
