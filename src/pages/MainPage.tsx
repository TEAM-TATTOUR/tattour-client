import { useState } from 'react';
import MainFooter from '../components/MainFooter';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import ProgressBar from '../common/ProgressBar';
import BackBtn from '../utils/BackBtn';
import CancelBtn from '../utils/CancelBtn';
import EscapeModal from '../common/Modal/EscapeModal/EscapeModal'

const MainPage = () => {
  const [modalOn, setModalOn] = useState(false);

  const reanderMainPageHeader = () => {
    return (
      <Header
        transparent={true}
        backBtn={<BackBtn />}
        title='Test'
        cancelBtn={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            children={<EscapeModal setModalOn={setModalOn} />}
          />
        }
        // 전체 페이지수, 현재 페이지 단계 알아서 넣기
        progressBar={<ProgressBar curStep={1} maxStep={3} />}
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
