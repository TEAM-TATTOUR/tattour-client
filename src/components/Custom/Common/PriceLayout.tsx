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
  handDrawingImage?: File | null;

  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isPublic: boolean;
  setIsPublic: React.Dispatch<React.SetStateAction<boolean>>;

  setReceiptData: React.Dispatch<React.SetStateAction<resCustomInfoType | undefined>>;
  totalPrice: number;
  setTotalPrice: (newTotalPrice: number) => void;
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
  setReceiptData,
  totalPrice,
  setTotalPrice,
}: PriceLayoutProps) => {
  const [modalOn, setModalOn] = useState(false);

  //isPublic 여부에 따라 바꿔줘야 할듯
  const updatedCustomInfo = {
    ...customInfo,
    count: count,
    isPublic: isPublic,
    isCompleted: true,
    price: totalPrice,
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
            targetModal={
              <CustomSizeEscapeModal
                setModalOn={setModalOn}
                customInfo={customInfo}
                customImages={customImages}
              />
            }
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
          handDrawingImage={handDrawingImage ? handDrawingImage : null}
          customImages={customImages}
          setStep={setStep}
          setReceiptData={setReceiptData}
        />
      }
    >
      <St.TopWrapper>
        <PriceHeading />
        <CountPrice
          isPublic={isPublic}
          setCount={setCount}
          size={customInfo.size}
          setTotalPrice={setTotalPrice}
        />
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
