import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginHome from '../../components/Login/LoginHome';
import LoginFooter from '../../components/Login/LoginFooter';
import Header from '../../components/Header';
import BackBtn from '../../common/Header/BackBtn';
import CancelBtn from '../../common/Header/CancelBtn';
import PageLayout from '../../components/PageLayout';
import ProgressBar from '../../common/ProgressBar';
import RegisterName from '../../components/Register/RegisterName';
import RegisterNameFooter from '../../components/Register/RegisterNameFooter';
import RegisterPhoneNum from '../../components/Register/RegisterPhoneNum';
import WelcomeHome from '../../components/Welcome/WelcomeHome';
import WelcomeFooter from '../../components/Welcome/WelcomeFooter';
import LoginEscapeModal from '../../common/Modal/EscapeModal/LoginEscapeModal';
import { IcBackDark, IcCancelDark } from '../../assets/icon';
import { removeAccessToken } from '../../libs/api';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [modalOn, setModalOn] = useState(false);
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

  const renderRegisterPhoneNumPageHeader = () => {
    return (
      <Header
        fixed={true}
        leftSection={<BackBtn step={step} setStep={setStep} />}
        title='회원가입'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<LoginEscapeModal setModalOn={setModalOn} />}
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
        return renderRegisterPhoneNumPageHeader();

      case 3:
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
        return <></>;

      case 3:
        return <WelcomeFooter />;

      default:
        return <></>;
    }
  };

  return (
    <PageLayout renderHeader={renderHeader} footer={renderFooter()}>
      {step === 0 && <LoginHome />}
      {step === 1 && <RegisterName setUserName={setUserName} />}
      {step === 2 && <RegisterPhoneNum setStep={setStep} />}
      {step === 3 && <WelcomeHome />}
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
