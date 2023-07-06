import { styled } from 'styled-components';
import IcTattourLogo from '../assets/logo.png';
import IcKakaoLogo from '../assets/logo_kakao.png';

function LoginPage() {
  return (
    <St.LoginWrapper>
      <St.ContentsWrapper>
        <img src={IcTattourLogo} />
        <St.Title>후회없는 선택의 여정을 함께,</St.Title>
        <St.SubTitle>1초만에 가입하고 지금만 받을 수 있는 혜택 받아가세요!</St.SubTitle>
      </St.ContentsWrapper>

      <St.LoginFooter>
        <img src={IcKakaoLogo} />
        <St.FooterText>카카오로 계속하기</St.FooterText>
      </St.LoginFooter>
    </St.LoginWrapper>
  );
}

const St = {
  LoginWrapper: styled.section`
    display: flex;
    flex-direction: column;
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

  LoginFooter: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 7rem;

    background-color: #fee500;

    gap: 1rem;
  `,

  FooterText: styled.p`
    // 임의지정 -> 스타일 가이드 나오면 바꾸기!!
    ${({ theme }) => theme.fonts.title_semibold_18}
  `,
};

export default LoginPage;
