import { useEffect, useState } from 'react';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../../common/ProgressBar';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import HaveDesignFooter from '../HaveDesignFooter';
import SelectColor from './SelectColor';

interface StylingColorLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isColoredState: boolean;
  setIsColored: React.Dispatch<React.SetStateAction<boolean>>;
  selectedColorMode: string;
  setSelectedColorMode: React.Dispatch<React.SetStateAction<string>>;
}

const StylingColorLayout = ({
  setStep,
  isColoredState,
  setIsColored,
  selectedColorMode,
  setSelectedColorMode,
}: StylingColorLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  useEffect(() => {
    setIsColored(isColoredState);
  }, [isColoredState]);

  const renderStylingColorLayoutHeader = () => {
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
      renderHeader={renderStylingColorLayoutHeader}
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <SelectColor
        setIsActiveNext={setIsActiveNext}
        setIsColored={setIsColored}
        isColoredState={isColoredState}
        selectedColorMode={selectedColorMode}
        setSelectedColorMode={setSelectedColorMode}
      />
    </PageLayout>
  );
};

export default StylingColorLayout;
