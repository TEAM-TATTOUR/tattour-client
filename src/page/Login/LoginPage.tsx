import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcBackDark, IcCancelDark } from '../../assets/icon';
import ProgressBar from '../../common/ProgressBar';
import Header from '../../components/Header';
import LoginFooter from '../../components/Login/LoginFooter';
import LoginHome from '../../components/Login/LoginHome';
import PageLayout from '../../components/PageLayout';
import RegisterName from '../../components/Register/RegisterName';
import RegisterNameFooter from '../../components/Register/RegisterNameFooter';
import WelcomeFooter from '../../components/Welcome/WelcomeFooter';
import WelcomeHome from '../../components/Welcome/WelcomeHome';
import { removeAccessToken } from '../../libs/api';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const { state } = useLocation();
  const [step, setStep] = useState(state?.step ? state.step : 0);

  const renderLoginPageHeader = () => {
    return (
      <Header
        fixed={true}
        transparent={true}
        leftSection={
          <IcBackDark
            onClick={() => {
              navigate('/');
              removeAccessToken();
            }}
          />
        }
      />
    );
  };

  const renderRegisterNamePageHeader = () => {
    return (
      <Header
        fixed={true}
        leftSection={<St.BlankSection></St.BlankSection>}
        title='회원가입'
        rightSection={
          <IcCancelDark
            onClick={() => {
              navigate('/login');
              setStep(0);
            }}
          />
        }
        progressBar={<ProgressBar curStep={1} maxStep={2} />}
      />
    );
  };

  const renderWelcomePageHeader = () => {
    return (
      <Header
        fixed={true}
        leftSection={<St.BlankSection></St.BlankSection>}
        title='회원가입'
        rightSection={<St.BlankSection></St.BlankSection>}
        progressBar={<ProgressBar curStep={2} maxStep={2} />}
      />
    );
  };

  // 어떤 헤더를 렌더할지 결정하는 함수
  const renderHeader = () => {
    switch (step) {
      case 0:
        return renderLoginPageHeader();

      case 1:
        return renderRegisterNamePageHeader();

      case 2:
        return renderWelcomePageHeader();

      default:
        return <></>;
    }
  };

  // 어떤 푸터를 렌더할지 결정하는 함수
  const renderFooter = () => {
    switch (step) {
      case 0:
        return <LoginFooter />;

      case 1:
        return <RegisterNameFooter userName={userName} setStep={setStep} />;

      case 2:
        return <WelcomeFooter />;

      default:
        return <></>;
    }
  };

  return (
    <PageLayout renderHeader={renderHeader} footer={renderFooter()}>
      {step === 0 && <LoginHome />}
      {step === 1 && <RegisterName setUserName={setUserName} />}
      {step === 2 && <WelcomeHome />}
    </PageLayout>
  );
};

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;
  `,
};

export default LoginPage;
