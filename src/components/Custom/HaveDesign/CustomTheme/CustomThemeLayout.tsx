import { useState } from 'react';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../../common/ProgressBar';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import HaveDesignFooter from '../HaveDesignFooter';
import CustomTheme from './CustomTheme';
import { customInfoType } from '../../../../types/customInfoType';

interface CustomThemeLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  customInfo: customInfoType;
  handDrawingImage: File | null;
  customImages: FileList | undefined;
}

const CustomThemeLayout = ({
  setStep,
  name,
  setName,
  description,
  setDescription,
  customInfo,
  handDrawingImage,
  customImages,
}: CustomThemeLayoutProps) => {
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
            targetModal={
              <CustomSizeEscapeModal
                setModalOn={setModalOn}
                customImages={customImages}
                handDrawingImage={handDrawingImage}
                customInfo={customInfo}
              />
            }
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
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
      />
    </PageLayout>
  );
};

export default CustomThemeLayout;
