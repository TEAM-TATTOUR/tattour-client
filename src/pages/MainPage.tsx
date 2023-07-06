import MainFooter from '../components/MainFooter';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const MainPage = () => {
  const reanderMainPageHeader = () => {
    return (
      <Header
        isTransparent={true}
        leftSection={<div>left</div>}
        title='Test'
        rightSection={<div>right</div>}
      />
    );
  };

  return (
    <PageLayout renderHeader={reanderMainPageHeader} footer={<MainFooter />}>
      <div>메인 페이지</div>
    </PageLayout>
  );
};

export default MainPage;
