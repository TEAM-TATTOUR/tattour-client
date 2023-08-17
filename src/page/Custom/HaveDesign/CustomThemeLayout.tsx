import { useState } from 'react';
import CustomTheme from '../../../components/Custom/HaveDesign/CustomTheme';
import PageLayout from '../../../components/PageLayout';
import Header from '../../../components/Header';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import { IcBackDark } from '../../../assets/icon';
import HaveDesignFooter from '../../../components/Custom/HaveDesign/HaveDesignFooter';
interface CustomThemeLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const CustomThemeLayout = ({ setStep, setName, setDescription }: CustomThemeLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderCustomThemeLayoutHeader = () => {
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
        progressBar={<ProgressBar curStep={5} maxStep={7} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomThemeLayoutHeader}
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <CustomTheme
        setIsActiveNext={setIsActiveNext}
        setName={setName}
        setDescription={setDescription}
      />
    </PageLayout>
  );
};

export default CustomThemeLayout;
