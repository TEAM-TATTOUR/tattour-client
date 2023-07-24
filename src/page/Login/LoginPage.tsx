import LoginHome from '../../components/Login/LoginHome';
import LoginFooter from '../../components/Login/LoginFooter';
import Header from '../../components/Header';
import BackBtn from '../../common/Header/BackBtn';
import PageLayout from '../../components/PageLayout';

const LoginPage = () => {
  const renderLoginPageHeader = () => {
    return <Header transparent={true} leftSection={<BackBtn />} fixed={true}/>;
  };

  return (
    <PageLayout renderHeader={renderLoginPageHeader} footer={<LoginFooter />}>
      <LoginHome />
    </PageLayout>
  );
};

export default LoginPage;
