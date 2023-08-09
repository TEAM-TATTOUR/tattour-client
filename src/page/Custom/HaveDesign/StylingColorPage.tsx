import { useState } from 'react';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import SelectColor from '../../../components/Custom/HaveDesign/SelectColor';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';
import { IcBackDark } from '../../../assets/icon';
import HaveDesignFooter from '../../../components/Custom/HaveDesign/HaveDesignFooter';
interface StylingColorPageProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isColoredState: boolean;
  setIsColored: React.Dispatch<React.SetStateAction<boolean>>;
}

const StylingColorPage = ({ setStep, isColoredState, setIsColored }: StylingColorPageProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderStylingColorPageHeader = () => {
    return (
      <Header
        transparent={true}
        leftSection={<IcBackDark onClick={() => setStep((prev) => prev - 1)} />}
        title='커스텀 타투'
        rightSection={
          <CancelBtn
            modalOn={modalOn}
            setModalOn={setModalOn}
            targetModal={<CustomSizeEscapeModal setModalOn={setModalOn} />}
          />
        }
        progressBar={<ProgressBar curStep={3} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderStylingColorPageHeader}
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <SelectColor
        setIsActiveNext={setIsActiveNext}
        setIsColored={setIsColored}
        isColoredState={isColoredState}
      />
    </PageLayout>
  );
};

export default StylingColorPage;
