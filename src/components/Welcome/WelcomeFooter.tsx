import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const WelcomeFooter = () => {
  const navigate = useNavigate();

  const handleClickWelcomeFooter = () => {
    navigate('/');
  };

  return (
    <St.WelcomeFooter onClick={handleClickWelcomeFooter}>
      <St.FooterText>홈으로 이동하기</St.FooterText>
    </St.WelcomeFooter>
  );
};

const St = {
  WelcomeFooter: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};

    gap: 1rem;
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default WelcomeFooter;
