import { useState } from 'react';
import BackBtn from '../../../common/Header/BackBtn';
import CustomImg from '../../../components/Custom/NoDesgin/CustomImg';
import Header from '../../../components/Header';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import CancelBtn from '../../../common/Header/CancelBtn';
import ProgressBar from '../../../common/ProgressBar';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';

const CustomImgPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderCustomImgPageHeader = () => {
    return (
      <Header
        leftSection={<BackBtn />}
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
      footer={<NextFooter isActiveNext={isActiveNext} navigateURL='/custom-request' />}
    >
      <CustomImg setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default CustomImgPage;
