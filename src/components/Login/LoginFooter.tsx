import { styled } from 'styled-components';
import { IcKakao } from '../../assets/icon';

const LoginFooter = () => {
  return (
    <St.LoginFooter>
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

export default LoginFooter;
