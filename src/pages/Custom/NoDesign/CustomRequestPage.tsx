import { useState } from 'react';
import BackBtn from '../../../common/Header/BackBtn';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import CustomRequset from '../../../components/Custom/NoDesign/CustomRequset';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';
import NextFooter from '../../../common/Footer/NextFooter';

const CustomRequestPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderCustomRequestPageHeader = () => {
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
        progressBar={<ProgressBar curStep={2} maxStep={5} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomRequestPageHeader}
      footer={<NextFooter isActiveNext={isActiveNext} navigateURL='/custom-quantity' />}
    >
      <CustomRequset setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default CustomRequestPage;
