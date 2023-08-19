import { useState } from 'react';
import { styled } from 'styled-components';
import { IcBackDark } from '../../../assets/icon';
import CancelBtn from '../../../common/Header/CancelBtn';
import CustomSizeEscapeModal from '../../../common/Modal/EscapeModal/CustomSizeEscapeModal';
import ProgressBar from '../../../common/ProgressBar';
import CountPrice from '../CountPrice';
import MakePublic from '../MakePublic';
import PriceFooter from '../PriceFooter';
import PriceHeading from '../PriceHeading';
import Header from '../../Header';
import PageLayout from '../../PageLayout';
import { customInfoType, resCustomInfoType } from '../../../types/customInfoType';

interface PriceLayoutProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;

  customInfo: customInfoType;
  customImages: FileList | undefined;
  handDrawingImage?: string;

  setReceiptData: React.Dispatch<React.SetStateAction<resCustomInfoType | undefined>>;
}

const PriceLayout = ({
  step,
  setStep,
  customInfo,
  customImages,
  handDrawingImage,
  setReceiptData,
}: PriceLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [count, setCount] = useState(1);
  const [isCompletedState, setIsCompletedState] = useState(true);

  const handleCompletedState = () => {
    setIsCompletedState(true);
  };

  const updatedCustomInfo = {
    ...customInfo,
    count: count,
    isPublic: isPublic,
    isCompleted: true,
    price: 0, //price 최상단(여기 layout 컴포넌트)에서 관리할 수 있게 + 할인 로직까지 포함해서 수정 부탁해용 !!
    viewCount: step,
  };

  const renderPriceLayoutHeader = () => {
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
        progressBar={<ProgressBar curStep={step} maxStep={step} />}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={renderPriceLayoutHeader}
      footer={
        <PriceFooter
          customInfo={updatedCustomInfo}
          handDrawingImage={handDrawingImage ? handDrawingImage : ''}
          customImages={customImages}
          handleCompletedState={handleCompletedState}
          isCompletedState={isCompletedState}
          setStep={setStep}
          setReceiptData={setReceiptData}
        />
      }
    >
      <St.TopWrapper>
        <PriceHeading />
        <CountPrice isPublic={isPublic} setCount={setCount} size={customInfo.size} />
      </St.TopWrapper>
      <MakePublic isPublic={isPublic} setIsPublic={setIsPublic} />
    </PageLayout>
  );
};

export default PriceLayout;

const St = {
  TopWrapper: styled.section`
    display: flex;
    flex-direction: column;

    height: calc(100dvh - 25.7rem);
  `,
};
