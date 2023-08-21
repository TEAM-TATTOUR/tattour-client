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

  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isPublic: boolean;
  setIsPublic: React.Dispatch<React.SetStateAction<boolean>>;
  isCompletedState: boolean;
  setIsCompletedState: React.Dispatch<React.SetStateAction<boolean>>;

  setReceiptData: React.Dispatch<React.SetStateAction<resCustomInfoType | undefined>>;
}

const PriceLayout = ({
  step,
  setStep,
  customInfo,
  customImages,
  handDrawingImage,
  count,
  setCount,
  isPublic,
  setIsPublic,
  isCompletedState,
  setIsCompletedState,
  setReceiptData,
}: PriceLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);
  // const [isCompletedState, setIsCompletedState] = useState(false); //이거 왜 꼭 state로 쓰는지 궁금합니다! 꼭 필요한 부분인가요? => 푸터까지 눌러서 사용자가 진짜 최종 접수하기를 한 상태였을 때에만 내 타투로 이동하고 아니면 임시저장으로 빼줘야 한다고 생각했습니다!

  //isPublic 여부에 따라 바꿔줘야 할듯
  const updatedCustomInfo = {
    ...customInfo,
    count: count,
    isPublic: isPublic,
    isCompleted: true,
    // price: price, //price 최상단(여기 layout 컴포넌트)에서 관리할 수 있게 + 할인 로직까지 포함해서 수정 부탁해용 !! => 우리 patch할 때 가격 안 보내는 걸로 알아서 확인 필요..!
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
          setIsCompletedState={setIsCompletedState}
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
