import { useEffect, useState } from 'react';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomReference from '../../../components/Custom/HaveDesign/CustomReference';
import Header from '../../../components/Header';
import PageLayout from '../../../components/PageLayout';
import ProgressBar from '../../../common/ProgressBar';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import { IcBackDark } from '../../../assets/icon';
import HaveDesignFooter from '../../../components/Custom/HaveDesign/HaveDesignFooter';

interface CustomReferencePageProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  customImages: FileList | null;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | null>>;
  handDrawingImage: File | null;
  setHandDrawingImage: React.Dispatch<React.SetStateAction<File | null>>;
  setPreviewURL: React.Dispatch<React.SetStateAction<string[]>>;
  previewURL: string[];
}

const CustomReferencePage = ({
  setStep,
  customImages,
  setCustomImages,
  handDrawingImage,
  setHandDrawingImage,
  setPreviewURL,
  previewURL
}: CustomReferencePageProps) => {
  // 모달 사용할 때  활용
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderCustomReferencePageHeader = () => {
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
      renderHeader={renderCustomReferencePageHeader}
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
      />
    </PageLayout>
  );
};

export default CustomReferencePage;
