import { useState } from 'react';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../../common/ProgressBar';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import HaveDesignFooter from '../HaveDesignFooter';
import SelectKeyword from './SelectKeyword';
import SelectKeywordInstruction from './SelectKeywordInstruction';

interface SelectKeywordLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  styles: number[];
  setStyles: React.Dispatch<React.SetStateAction<number[]>>;
  themes: number[];
  setThemes: React.Dispatch<React.SetStateAction<number[]>>;
}

const SelectKeywordLayout = ({
  setStep,
  styles,
  setStyles,
  themes,
  setThemes,
}: SelectKeywordLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderSelectKeywordLayoutHeader = () => {
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
        progressBar={<ProgressBar curStep={4} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderSelectKeywordLayoutHeader}
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <SelectKeywordInstruction />
      <SelectKeyword
        setIsActiveNext={setIsActiveNext}
        styles={styles}
        setStyles={setStyles}
        themes={themes}
        setThemes={setThemes}
      />
    </PageLayout>
  );
};

export default SelectKeywordLayout;
