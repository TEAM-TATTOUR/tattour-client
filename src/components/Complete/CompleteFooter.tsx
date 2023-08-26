import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CompleteFooter = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/');
  };

  return (
    <St.footer>
      <St.button type='button' onClick={handleClickButton}>
        홈으로 이동하기
      </St.button>
    </St.footer>
  );
};

export default CompleteFooter;

const St = {
  footer: styled.footer`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 43rem;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  button: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
