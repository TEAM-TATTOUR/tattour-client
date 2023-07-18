import PageLayout from '../../components/PageLayout';
import Header from '../../components/Header';
import { IcCancelDark } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../../common/ProgressBar';
import RegisterName from '../../components/Register/RegisterName';
import styled from 'styled-components';
import { useState } from 'react';
import RegisterNameFooter from '../../components/Register/RegisterNameFooter';

const RegisterNamePage = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const renderRegisterNamePageHeader = () => {
    return (
      <Header
        leftSection={<St.BlankSection></St.BlankSection>}
        title='회원가입'
        rightSection={<IcCancelDark onClick={() => navigate(-1)} />}
        progressBar={<ProgressBar curStep={1} maxStep={3} />}
      />
    );
  };

  return (
    <PageLayout renderHeader={renderRegisterNamePageHeader}>
      <RegisterName setUserName={setUserName}/>
      <RegisterNameFooter userName={userName}/>
    </PageLayout>
  );
};

const St = {
  BlankSection: styled.div`
    width: 2.4rem;
    height: 2.4rem;
  `,
};

export default RegisterNamePage;
