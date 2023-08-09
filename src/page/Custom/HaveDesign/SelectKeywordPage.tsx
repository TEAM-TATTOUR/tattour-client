import { useState } from 'react';
import SelectKeywordHeading from '../../../components/Custom/HaveDesign/SelectKeywordHeading';
import PageLayout from '../../../components/PageLayout';
import CancelBtn from '../../../common/Header/CancelBtn';
import Header from '../../../components/Header';
import ProgressBar from '../../../common/ProgressBar';
import SelectKeyword from '../../../components/Custom/HaveDesign/SelectKeyword';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import { IcBackDark } from '../../../assets/icon';
import HaveDesignFooter from '../../../components/Custom/HaveDesign/HaveDesignFooter';

interface SelectKeywordPageProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setStyles: React.Dispatch<React.SetStateAction<number[]>>;
  setThemes: React.Dispatch<React.SetStateAction<number[]>>;
}

const SelectKeywordPage = ({ setStep, setStyles, setThemes }: SelectKeywordPageProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderSelectKeywordPageHeader = () => {
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
      renderHeader={renderSelectKeywordPageHeader}
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <SelectKeywordHeading />
      <SelectKeyword
        setIsActiveNext={setIsActiveNext}
        setStyles={setStyles}
        setThemes={setThemes}
      />
    </PageLayout>
  );
};

export default SelectKeywordPage;
