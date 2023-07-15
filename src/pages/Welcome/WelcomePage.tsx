import { styled } from 'styled-components';
import WelcomeHome from '../../components/Welcome/WelcomeHome';
import WelcomeFooter from '../../components/Welcome/WelcomeFooter';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';

const WelcomePage = () => {
  const renderWelcomePageHeader = () => {
    return (
      <Header
        leftSection={<St.BlankSection></St.BlankSection>}
        title='회원가입'
        rightSection={<St.BlankSection></St.BlankSection>}
      />
    );
  };

  return (
    <PageLayout renderHeader={renderWelcomePageHeader} footer={<WelcomeFooter />}>
      <St.WelcomeWrapper>
        <WelcomeHome />
      </St.WelcomeWrapper>
    </PageLayout>
  );
};

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;
  `,
  
  WelcomeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
  `,
};

export default WelcomePage;
