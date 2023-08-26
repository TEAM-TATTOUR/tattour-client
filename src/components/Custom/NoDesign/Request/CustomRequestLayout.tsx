import { useState } from 'react';
import { IcBackDark } from '../../../../assets/icon';
import CancelBtn from '../../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../../common/ProgressBar';
import CustomRequest from './CustomRequest';
import NoDesignFooter from '../NoDesignFooter';
import Header from '../../../Header';
import PageLayout from '../../../PageLayout';
import { customInfoType } from '../../../../types/customInfoType';

interface CustomRequestLayoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  demand: string;
  setDemand: React.Dispatch<React.SetStateAction<string>>;
  customInfo: customInfoType;
  customImages: FileList | undefined;
}

const CustomRequestLayout = ({
  setStep,
  name,
  setName,
  demand,
  setDemand,
  customInfo,
  customImages,
}: CustomRequestLayoutProps) => {
  // const CUSTOM_VIEW_COUNT = 3;

  const [modalOn, setModalOn] = useState(false);
  const [isActiveNext, setIsActiveNext] = useState(false);

  const renderCustomRequestPageHeader = () => {
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
              />
            }
          />
        }
        progressBar={<ProgressBar curStep={3} maxStep={4} />}
      />
    );
  };
  return (
    <PageLayout
      renderHeader={renderCustomRequestPageHeader}
      footer={<NoDesignFooter isActiveNext={isActiveNext} setStep={setStep} />}
    >
      <CustomRequest
        setIsActiveNext={setIsActiveNext}
        setName={setName}
        setDemand={setDemand}
        writtenName={name}
        writtenDemand={demand}
      />
    </PageLayout>
  );
};

export default CustomRequestLayout;
