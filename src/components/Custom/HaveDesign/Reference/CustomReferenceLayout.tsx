import { useState } from 'react';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../../common/ProgressBar';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import HaveDesignFooter from '../HaveDesignFooter';
import CustomReference from './CustomReference';

interface CustomReferenceLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  customImages: FileList | undefined;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | undefined>>;
  handDrawingImage: File | null;
  setHandDrawingImage: React.Dispatch<React.SetStateAction<File | null>>;
  setPreviewURL: React.Dispatch<React.SetStateAction<string[]>>;
  previewURL: string[];
  drawingImageUrl: string | null;
  setDrawingImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

const CustomReferenceLayout = ({
  setStep,
  customImages,
  setCustomImages,
  handDrawingImage,
  setHandDrawingImage,
  setPreviewURL,
  previewURL,
  drawingImageUrl,
  setDrawingImageUrl,
}: CustomReferenceLayoutProps) => {
  // 모달 사용할 때  활용
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderCustomReferenceLayoutHeader = () => {
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
        progressBar={<ProgressBar curStep={2} maxStep={7} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderCustomReferenceLayoutHeader}
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <CustomReference
        setIsActiveNext={setIsActiveNext}
        handDrawingImage={handDrawingImage}
        setHandDrawingImage={setHandDrawingImage}
        setCustomImages={setCustomImages}
        customImages={customImages}
        setPreviewURL={setPreviewURL}
        previewURL={previewURL}
        drawingImageUrl={drawingImageUrl}
        setDrawingImageUrl={setDrawingImageUrl}
      />
    </PageLayout>
  );
};

export default CustomReferenceLayout;
