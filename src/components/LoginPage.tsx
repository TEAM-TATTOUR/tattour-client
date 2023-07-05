import { styled } from 'styled-components';
import logo from '../assets/logo.png';

function LoginPage() {
  return (
    <St.LoginWrapper>
      <St.ContentsWrapper>
        <img src={logo} />
        <St.Title>후회없는 선택의 여정을 함께,</St.Title>
        <St.SubTitle>1초만에 가입하고 지금만 받을 수 있는 혜택 받아가세요!</St.SubTitle>
      </St.ContentsWrapper>
    </St.LoginWrapper>
  );
}

const St = {
  LoginWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;

    background-color: #1e1e1e;
  `,
  ContentsWrapper: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${({ theme }) => theme.colors.white};
  `,

  Title: styled.p`
    margin-top: 3.2rem;

    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  SubTitle: styled.p`
    margin-top: 1.2rem;

    color: ${({ theme }) => theme.colors.gray1};

    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};

export default LoginPage;
