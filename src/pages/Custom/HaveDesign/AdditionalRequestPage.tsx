import { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import BackBtn from '../../../common/Header/BackBtn';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import AdditionalRequestFooter from '../../../components/Custom/HaveDesign/AdditionalRequestFooter';
import AdditionalRequest from '../../../components/Custom/HaveDesign/AdditionalRequest';

const AdditionalRequestPage = () => {
  const [modalOn, setModalOn] = useState(false);

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
        progressBar={<ProgressBar curStep={7} maxStep={7} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderAdditionalRequestPageHeader}
      footer={<AdditionalRequestFooter />}
    >
      <AdditionalRequest />
    </PageLayout>
  );
};

export default AdditionalRequestPage;
