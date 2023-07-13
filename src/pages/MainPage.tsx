import MainFooter from '../components/MainFooter';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const MainPage = () => {
  // 모달 사용할 때  활용
  // const [modalOn, setModalOn] = useState(false);

  const reanderMainPageHeader = () => {
    return (
      <Header
        transparent={true}
        leftSection={<div>left</div>}
        title='Test'
        rightSection={<div>right</div>}

        // 이런 식으로 헤더 공통 컴포넌트 활용
        // leftSection={<BackBtn />}
        // rightSection={
        //   <CancelBtn
        //     modalOn={modalOn}
        //     setModalOn={setModalOn}
        //     targetModal={<LoginEscapeModal setModalOn={setModalOn} />}
        //   />
        // }
        // 이런 식으로 프로그레스 바 활용
        // 전체 페이지수, 현재 페이지 단계 알아서 넣기
        // progressBar={<ProgressBar curStep={1} maxStep={3} />}
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
