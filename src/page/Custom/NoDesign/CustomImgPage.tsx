import { useState } from 'react';
import CustomImg from '../../../components/Custom/NoDesgin/CustomImg';
import Header from '../../../components/Header';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import CancelBtn from '../../../common/Header/CancelBtn';
import ProgressBar from '../../../common/ProgressBar';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';
import { IcBackDark } from '../../../assets/icon';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomImgPage = () => {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);
  const location = useLocation();
  const stateList = location.state;

  const renderCustomImgPageHeader = () => {
    return (
      <Header
        leftSection={<IcBackDark onClick={() => navigate('/custom-size')} />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        progressBar={<ProgressBar curStep={2} maxStep={4} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderCustomImgPageHeader}
      footer={
        <NextFooter
          isActiveNext={isActiveNext}
          navigateURL='/custom-request'
          stateList={stateList}
        />
      }
    >
      <CustomImg setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default CustomImgPage;
