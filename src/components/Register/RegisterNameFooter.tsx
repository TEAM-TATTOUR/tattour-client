import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface RegisterNameFooterProps {
  userName: string;
}

const RegisterNameFooter = ({ userName }: RegisterNameFooterProps) => {
  const navigate = useNavigate();

  const handleClickFooter = () => {
    if (userName) {
      navigate('/register-number', { state: userName });
    }
  };

  return (
    <St.Footer onClick={handleClickFooter} $userName={userName}>
      <St.FooterContents>다음</St.FooterContents>
    </St.Footer>
  );
};

const St = {
  Footer: styled.footer<{ $userName: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 7rem;
    position: fixed;
    bottom: 0;

    background-size: auto;
    background-color: ${({ theme, $userName }) =>
      $userName ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterContents: styled.p`
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default RegisterNameFooter;
