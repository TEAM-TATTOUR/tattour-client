import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleStep = () => {
    setStep((prev) => prev + 1);
    return step;
  };

  const renderLoginPageHeader = () => {
    return <Header transparent={true} leftSection={<BackBtn />} fixed={true} />;
  };

  const renderRegisterNamePageHeader = () => {
    handleStep();
    return (
      <Header
        leftSection={<St.BlankSection></St.BlankSection>}
        title='회원가입'
        rightSection={<IcCancelDark onClick={() => navigate('/login')} />}
        progressBar={<ProgressBar curStep={step} maxStep={3} />}
      />
    );
  };

  const renderRegisterPhoneNumPageHeader = () => {
    handleStep();
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
        progressBar={<ProgressBar curStep={step} maxStep={3} />}
      />
    );
  };

  const renderWelcomePageHeader = () => {
    handleStep();
    return (
      <Header
        fixed={true}
        leftSection={<St.BlankSection></St.BlankSection>}
        title='회원가입'
        rightSection={<St.BlankSection></St.BlankSection>}
        progressBar={<ProgressBar curStep={step} maxStep={3} />}
      />
    );
  };

  switch (step) {
    case 0:
      return (
        <PageLayout renderHeader={renderLoginPageHeader} footer={<LoginFooter />}>
          <LoginHome />
        </PageLayout>
      );

    case 1: 
    return(
      <PageLayout renderHeader={renderRegisterNamePageHeader}>
        <RegisterName setUserName={setUserName} />
        <RegisterNameFooter userName={userName} />
      </PageLayout>
    );

    case 2:
      return (
        <PageLayout renderHeader={renderRegisterPhoneNumPageHeader}>
        <RegisterPhoneNum />
      </PageLayout>
      );

    case 3: 
    return (
      <PageLayout renderHeader={renderWelcomePageHeader} footer={<WelcomeFooter />}>
        <WelcomeHome />
      </PageLayout>
    );

      default:
        break
  }
};

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;
  `,
};

export default LoginPage;
