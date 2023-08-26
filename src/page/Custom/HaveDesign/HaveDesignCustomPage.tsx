import { useEffect, useState } from 'react';
import PriceLayout from '../../../components/Custom/Common/PriceLayout';
import AdditionalRequestLayout from '../../../components/Custom/HaveDesign/AdditionalRequest/AdditionalRequestLayout';
import CustomThemeLayout from '../../../components/Custom/HaveDesign/CustomTheme/CustomThemeLayout';
import ReceiptLayout from '../../../components/Custom/Common/Receipt/ReceiptLayout';
import CustomReferenceLayout from '../../../components/Custom/HaveDesign/Reference/CustomReferenceLayout';
import StylingColorLayout from '../../../components/Custom/HaveDesign/SelectColor/StylingColorLayout';
import SelectKeywordLayout from '../../../components/Custom/HaveDesign/SelectKeyword/SelectKeywordLayout';
import { useLocation } from 'react-router-dom';
import { resCustomInfoType } from '../../../types/customInfoType';

// import CustomSizePage from '../Common/CustomSizePage';

const HaveDesignCustomPage = () => {
  const location = useLocation();
  console.log(location.state);
  const [step, setStep] = useState(
    location.state && location.state.step !== undefined ? location.state.step : 1,
  );

  //step 1: 이미지 첨부하기 관련 state
  const [customImages, setCustomImages] = useState<FileList | undefined>();
  const [handDrawingImage, setHandDrawingImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string[]>(
    location.state &&
      location.state.mainImageUrl !== undefined &&
      location.state.images !== undefined
      ? [location.state.mainImageUrl, ...location.state.images]
      : [],
  );
  const [drawingImageUrl, setDrawingImageUrl] = useState<string | null>(
    location.state &&
      location.state.handDrawingImageUrl !== undefined &&
      location.state.handDrawingImageUrl !== null
      ? location.state.handDrawingImageUrl
      : null,
  );

  //step 2: 색상 선택 state
  const [isColoredState, setIsColored] = useState(
    location.state && location.state.isColored !== undefined ? location.state.isColored : false,
  );
  const [selectedColorMode, setSelectedColorMode] = useState('');

  //step 3: 키워드 선택 state
  const [styles, setStyles] = useState<number[]>([]);
  const [themes, setThemes] = useState<number[]>([]);

  const stylesKeyword =
    location.state && location.state.styles !== undefined ? location.state.styles : [];
  const themesKeyword =
    location.state && location.state.themes !== undefined ? location.state.themes : [];

  //step 4: 타투 이름 입력 관련 state
  const [name, setName] = useState(
    location.state && location.state.name !== undefined ? location.state.name : '',
  );
  const [description, setDescription] = useState(
    location.state && location.state.description !== undefined ? location.state.description : '',
  );

  //step 5: 추가 요구사항 관련 state
  const [demand, setDemand] = useState(
    location.state && location.state.demand !== undefined ? location.state.demand : '',
  );

  //step 6: 주문 관련 state
  const [count, setCount] = useState(1);
  const [isPublic, setIsPublic] = useState(false);
  const [price, setPrice] = useState(0);

  // 앞부분 임시 통합한 곳에서 state 불러오기. 최종 통합 때 제거 예정
  const size = location.state ? location.state.size : null;
  const customId = location.state ? location.state.customId : null;
  // const haveDesign = location.state ? location.state.haveDesign : null;
  const haveDesign = true;
  //통합하면 이 부분 넘겨받는 걸로 수정하기!

  //patch에 보낼 정보들 객체로 모으기
  const customInfo = {
    customId: customId,
    size: size,
    isColored: isColoredState,
    name: name === '' ? '임시 저장' : name,
    description: description,
    demand: demand,
    viewCount: step,
    themes: themes,
    styles: styles,
  };

  // patch 통신 response = receipt 뷰에 넘겨줘야 하는 정보들
  const [receiptData, setReceiptData] = useState<resCustomInfoType>();

  // //customSizePage 이후 시작하도록 일시적으로 추가한 코드.
  // useEffect(() => {
  //   setStep(1);
  // }, []);

  switch (step) {
    // case 0:
    //   return <CustomSizePage setStep={setStep} />;
    case 1:
      return (
        <CustomReferenceLayout
          setStep={setStep}
          customImages={customImages}
          setCustomImages={setCustomImages}
          handDrawingImage={handDrawingImage}
          setHandDrawingImage={setHandDrawingImage}
          setPreviewURL={setPreviewURL}
          previewURL={previewURL}
          drawingImageUrl={drawingImageUrl}
          setDrawingImageUrl={setDrawingImageUrl}
          customInfo={customInfo}
        />
      );

    case 2:
      return (
        <StylingColorLayout
          setStep={setStep}
          isColoredState={isColoredState}
          setIsColored={setIsColored}
          selectedColorMode={selectedColorMode}
          setSelectedColorMode={setSelectedColorMode}
          customInfo={customInfo}
          customImages={customImages}
          handDrawingImage={handDrawingImage}
        />
      );

    case 3:
      return (
        <SelectKeywordLayout
          setStep={setStep}
          styles={styles}
          setStyles={setStyles}
          themes={themes}
          setThemes={setThemes}
          stylesKeyword={stylesKeyword}
          themesKeyword={themesKeyword}
          customInfo={customInfo}
          customImages={customImages}
          handDrawingImage={handDrawingImage}
        />
      );

    case 4:
      return (
        <CustomThemeLayout
          setStep={setStep}
          name={name}
          setName={setName}
          description={description}
          customInfo={customInfo}
          customImages={customImages}
          handDrawingImage={handDrawingImage}
          setDescription={setDescription}
        />
      );

    case 5:
      return (
        <AdditionalRequestLayout
          setStep={setStep}
          demand={demand}
          setDemand={setDemand}
          customInfo={customInfo}
          customImages={customImages}
          handDrawingImage={handDrawingImage}
        />
      );

    case 6:
      return (
        <PriceLayout
          step={step}
          setStep={setStep}
          count={count}
          setCount={setCount}
          customInfo={customInfo}
          customImages={customImages}
          setReceiptData={setReceiptData}
          handDrawingImage={handDrawingImage}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
          price={price}
          setPrice={setPrice}
        />
      );

    case 7:
      return <ReceiptLayout receiptData={receiptData} haveDesign={haveDesign} />;
  }
};

export default HaveDesignCustomPage;
