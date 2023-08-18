import { useState } from 'react';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../../common/ProgressBar';
import CustomImg from './CustomImg';
import NoDesignFooter from '../NoDesignFooter';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';

interface CustomImgLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  customImages: FileList | undefined;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | undefined>>;
}

const CustomImgLayout = ({ setStep, customImages, setCustomImages }: CustomImgLayoutProps) => {
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

export default CustomImgLayout;
