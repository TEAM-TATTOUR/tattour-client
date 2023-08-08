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
import { IcCancelDark } from '../../assets/icon';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const [step, setStep] = useState(state?.step ? state.step : 0);

  const renderLoginPageHeader = () => {
    return <Header transparent={true} leftSection={<BackBtn />} fixed={true} />;
  };

  const renderRegisterNamePageHeader = () => {
    return (
      <Header
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
        progressBar={<ProgressBar curStep={1} maxStep={3} />}
      />
    );
  };

  const renderRegisterPhoneNumPageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
        title='회원가입'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<LoginEscapeModal setModalOn={setModalOn} />}
          />
        }
        progressBar={<ProgressBar curStep={2} maxStep={3} />}
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
        progressBar={<ProgressBar curStep={3} maxStep={3} />}
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

  // 어떤 컴포넌트를 렌더할지 결정하는 함수
  switch (step) {
    case 0:
      return (
        <PageLayout renderHeader={renderHeader} footer={<LoginFooter />}>
          <LoginHome />
        </PageLayout>
      );

    case 1:
      return (
        <PageLayout
          renderHeader={renderHeader}
          footer={<RegisterNameFooter userName={userName} setStep={setStep} />}
        >
          <RegisterName setUserName={setUserName} />
        </PageLayout>
      );

    case 2:
      return (
        <PageLayout renderHeader={renderHeader}>
          <RegisterPhoneNum setStep={setStep} />
        </PageLayout>
      );

    case 3:
      return (
        <PageLayout renderHeader={renderHeader} footer={<WelcomeFooter />}>
          <WelcomeHome />
        </PageLayout>
      );

    default:
      break;
  }
};

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;
  `,
};

export default LoginPage;
