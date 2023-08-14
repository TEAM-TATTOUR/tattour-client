import { useState } from 'react';
import { IcBackDark } from '../../../assets/icon';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import CustomRequset from '../../../components/Custom/NoDesign/CustomRequset';
import NoDesignFooter from '../../../components/Custom/NoDesign/NoDesignFooter';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';

interface CustomRequestPageProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  demand: string;
  setDemand: React.Dispatch<React.SetStateAction<string>>;
}

const CustomRequestPage = ({
  setStep,
  name,
  setName,
  demand,
  setDemand,
}: CustomRequestPageProps) => {
  // const CUSTOM_VIEW_COUNT = 3;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderCustomRequestPageHeader = () => {
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
        progressBar={<ProgressBar curStep={3} maxStep={4} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomRequestPageHeader}
      footer={<NoDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <CustomRequset
        setIsActiveNext={setIsActiveNext}
        setName={setName}
        setDemand={setDemand}
        writtenName={name}
        writtenDemand={demand}
      />
    </PageLayout>
  );
};

export default CustomRequestPage;
