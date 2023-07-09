import { styled } from 'styled-components';
import WelcomeHome from '../../components/Welcome/WelcomeHome';
import WelcomeFooter from '../../components/Welcome/WelcomeFooter';

const WelcomePage = () => {
  return (
    <St.WelcomeWrapper>
      <WelcomeHome />
      <WelcomeFooter />
    </St.WelcomeWrapper>
  );
};

const St = {
  WelcomeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
  `,
};

export default WelcomePage;
