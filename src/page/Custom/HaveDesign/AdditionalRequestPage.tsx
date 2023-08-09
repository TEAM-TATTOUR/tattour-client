import { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import AdditionalRequest from '../../../components/Custom/HaveDesign/AdditionalRequest';
import { IcBackDark } from '../../../assets/icon';
import HaveDesignFooter from '../../../components/Custom/HaveDesign/HaveDesignFooter';

interface AdditionalRequestPageProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setDemand: React.Dispatch<React.SetStateAction<string>>;
}

const AdditionalRequestPage = ({ setStep, setDemand }: AdditionalRequestPageProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderAdditionalRequestPageHeader = () => {
    return (
      <Header
        leftSection={<IcBackDark onClick={() => setStep((prev) => prev - 1)} />}
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
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <AdditionalRequest setIsActiveNext={setIsActiveNext} setDemand={setDemand} />
    </PageLayout>
  );
};

export default AdditionalRequestPage;
