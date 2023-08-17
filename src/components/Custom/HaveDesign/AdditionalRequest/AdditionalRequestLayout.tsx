import { useState } from 'react';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../../common/ProgressBar';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import HaveDesignFooter from '../HaveDesignFooter';
import AdditionalRequest from './AdditionalRequest';

interface AdditionalRequestLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setDemand: React.Dispatch<React.SetStateAction<string>>;
}

const AdditionalRequestLayout = ({ setStep, setDemand }: AdditionalRequestLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderAdditionalRequestLayoutHeader = () => {
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
      renderHeader={renderAdditionalRequestLayoutHeader}
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <AdditionalRequest setIsActiveNext={setIsActiveNext} setDemand={setDemand} />
    </PageLayout>
  );
};

export default AdditionalRequestLayout;
