import { styled } from 'styled-components';
import LoginHome from '../../components/Login/LoginHome';
import LoginFooter from '../../components/Login/LoginFooter';

const LoginPage = () => {
  return (
    <St.LoginWrapper>
      <LoginHome />
      <LoginFooter />
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
};

export default LoginPage;