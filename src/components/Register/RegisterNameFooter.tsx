import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface RegisterNameFooterProps {
  userName: string;
}

const RegisterNameFooter = ({ userName }: RegisterNameFooterProps) => {
  const navigate = useNavigate();

  const goNext = () => {
    if (userName) {
      navigate('/input-number');

      /* 나중에 userName을 useLocation 등으로 넘겨줘도 됨 (굳이 스토리지 사용안해도 ㄱㅊ) */
    }
  };

  return (
    <St.Footer onClick={goNext}>
      <St.FooterContents>다음</St.FooterContents>
    </St.Footer>
  );
};

const St = {
  Footer: styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 7rem;
    position: absolute;
    bottom: 0;

    background-size: auto;
    background-color: ${({ theme }) => theme.colors.gray3};
  `,

  FooterContents: styled.p`
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default RegisterNameFooter;
