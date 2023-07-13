import { styled } from 'styled-components';
import WelcomeHome from '../../components/Welcome/WelcomeHome';
import WelcomeFooter from '../../components/Welcome/WelcomeFooter';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import ProgressBar from '../../common/ProgressBar';

const WelcomePage = () => {
  const renderWelcomePageHeader = () => {
    return (
      <Header
        leftSection={<St.BlankSection></St.BlankSection>}
        title='회원가입'
        rightSection={<St.BlankSection></St.BlankSection>}
        progressBar={<ProgressBar curStep={3} maxStep={3} />}
      />
    );
  };

  return (
    <PageLayout renderHeader={renderWelcomePageHeader} footer={<WelcomeFooter />}>
      <WelcomeHome />
    </PageLayout>
  );
};

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;
  `,
};

export default WelcomePage;
