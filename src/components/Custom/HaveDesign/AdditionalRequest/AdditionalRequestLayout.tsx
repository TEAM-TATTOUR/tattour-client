import { useState } from 'react';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../../common/ProgressBar';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import HaveDesignFooter from '../HaveDesignFooter';
import AdditionalRequest from './AdditionalRequest';
import { customInfoType } from '../../../../types/customInfoType';

interface AdditionalRequestLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  demand: string;
  setDemand: React.Dispatch<React.SetStateAction<string>>;
  customInfo: customInfoType;
  customImages: FileList | undefined;
  handDrawingImage: File | null;
}

const AdditionalRequestLayout = ({
  setStep,
  demand,
  setDemand,
  customInfo,
  customImages,
  handDrawingImage,
}: AdditionalRequestLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderAdditionalRequestLayoutHeader = () => {
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
                customInfo={customInfo}
                customImages={customImages}
                handDrawingImage={handDrawingImage}
              />
            }
          />
        }
        transparent={true}
        progressBar={<ProgressBar curStep={6} maxStep={7} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderAdditionalRequestLayoutHeader}
      footer={<HaveDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <AdditionalRequest setIsActiveNext={setIsActiveNext} demand={demand} setDemand={setDemand} />
    </PageLayout>
  );
};

export default AdditionalRequestLayout;
