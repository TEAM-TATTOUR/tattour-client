// import { useLocation } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import RegisterPhoneNum from '../../components/Register/RegisterPhoneNum';
import Header from '../../components/Header';
import BackBtn from '../../common/Header/BackBtn';
import CancelBtn from '../../common/Header/CancelBtn';
import { useState } from 'react';
import ProgressBar from '../../common/ProgressBar';
import LoginEscapeModal from '../../common/Modal/EscapeModal/LoginEscapeModal';

const RegisterPhoneNumPage = () => {
  // const { state } = useLocation();
  const [modalOn, setModalOn] = useState(false);

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

  return (
    <PageLayout renderHeader={renderRegisterPhoneNumPageHeader}>
      <RegisterPhoneNum />
    </PageLayout>
  );
};

export default RegisterPhoneNumPage;
