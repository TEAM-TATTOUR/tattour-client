import MainFooter from '../components/MainFooter';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import MainBanner from '../components/MainBanner';

const MainPage = () => {
  const reanderMainPageHeader = () => {
    return (
      <Header transparent={true} leftSection={<div>left</div>} rightSection={<div>right</div>} />
    );
  };

  return (
    <PageLayout renderHeader={reanderMainPageHeader} footer={<MainFooter />}>
      <MainBanner />
    </PageLayout>
  );
};

export default MainPage;
