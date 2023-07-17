import { useNavigate } from 'react-router-dom';
import { IcCancelDark } from '../../../assets/icon';
import OnBoardingCarousel from '../../../components/Custom/Common/OnBoardingCarousel';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';

const OnBoardingPage = () => {
  const navigate = useNavigate();

  const renderOnBoardingPageHeader = () => {
    return (
      <Header title='커스텀 타투' rightSection={<IcCancelDark onClick={() => navigate('/')} />} />
    );
  };

  return (
    <PageLayout renderHeader={renderOnBoardingPageHeader}>
      <OnBoardingCarousel />
    </PageLayout>
  );
};

export default OnBoardingPage;
