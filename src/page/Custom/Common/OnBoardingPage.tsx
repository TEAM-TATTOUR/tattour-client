import { useNavigate } from 'react-router-dom';
import { IcCancelDark } from '../../../assets/icon';
import OnBoardingCarousel from '../../../components/Custom/Common/OnBoardingCarousel';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';
import OnBoardingFooter from '../../../components/Custom/Common/OnBoardingFooter';
import { useEffect, useState } from 'react';
import { getAccessToken } from '../../../libs/api';

const OnBoardingPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const renderOnBoardingPageHeader = () => {
    return (
      <Header title='커스텀 타투' rightSection={<IcCancelDark onClick={() => navigate('/')} />} />
    );
  };

  useEffect(() => {
    if (getAccessToken()) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      navigate('/login');
    }
  }, [navigate]);

  return (
    <PageLayout
      renderHeader={renderOnBoardingPageHeader}
      footer={<OnBoardingFooter isLogin={isLogin} />}
    >
      <OnBoardingCarousel />
    </PageLayout>
  );
};

export default OnBoardingPage;
