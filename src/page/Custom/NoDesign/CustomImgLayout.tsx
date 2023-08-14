import { useState } from 'react';
import { IcBackDark } from '../../../assets/icon';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import CustomImg from '../../../components/Custom/NoDesign/CustomImg';
import NoDesignFooter from '../../../components/Custom/NoDesign/NoDesignFooter';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';

interface CustomImgPageProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  customImages: FileList | undefined;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | undefined>>;
}

const CustomImgPage = ({ setStep, customImages, setCustomImages }: CustomImgPageProps) => {
  // const CUSTOM_VIEW_COUNT = 2;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const attachedImg = customImages ? customImages : null;

  const renderCustomImgPageHeader = () => {
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
        progressBar={<ProgressBar curStep={2} maxStep={4} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderCustomImgPageHeader}
      footer={<NoDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <CustomImg
        setIsActiveNext={setIsActiveNext}
        setCustomImages={setCustomImages}
        attachedImg={attachedImg}
      />
    </PageLayout>
  );
};

export default CustomImgPage;
