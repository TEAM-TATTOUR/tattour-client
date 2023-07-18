import { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import BackBtn from '../../../common/Header/BackBtn';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import AdditionalRequest from '../../../components/Custom/HaveDesign/AdditionalRequest';
import NextFooter from '../../../common/Footer/NextFooter';

const AdditionalRequestPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderAdditionalRequestPageHeader = () => {
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
        transparent={true}
        progressBar={<ProgressBar curStep={6} maxStep={7} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderAdditionalRequestPageHeader}
      footer={<NextFooter isActiveNext={isActiveNext} navigateURL={'/price'} />}
    >
      <AdditionalRequest setIsActiveNext={setIsActiveNext} />
    </PageLayout>
  );
};

export default AdditionalRequestPage;
