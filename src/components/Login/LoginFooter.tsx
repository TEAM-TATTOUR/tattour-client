import { styled } from 'styled-components';
import { IcKakao } from '../../assets/icon';
import { KAKAO_AUTH_URL } from '../../constants/OAuth';

const LoginFooter = () => {

  const handleClickLoginFooter = () => {
    window.location.href = `${KAKAO_AUTH_URL}`;
  };

  return (
    <St.LoginFooter onClick={() => handleClickLoginFooter()}>
      <IcKakao />
      <St.FooterText>카카오로 계속하기</St.FooterText>
    </St.LoginFooter>
  );
};

const St = {
  LoginFooter: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    max-width: 43rem;
    width: 100%;
    height: 7rem;

    background-color: #fee500;

    gap: 1rem;
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.brown};

    ${({ theme }) => theme.fonts.title_semibold_18}
  `,
};

export default LoginFooter;
