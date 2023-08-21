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
  const [step, setStep] = useState(0);

  //step 1: 이미지 첨부하기 관련 state
  const [customImages, setCustomImages] = useState<FileList | undefined>();
  const [handDrawingImage, setHandDrawingImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string[]>([]);
  const [drawingImageUrl, setDrawingImageUrl] = useState<string | null>(null);

  //step 2: 색상 선택 state
  const [isColoredState, setIsColored] = useState(false);
  const [selectedColorMode, setSelectedColorMode] = useState('');

  //step 3: 키워드 선택 state
  const [styles, setStyles] = useState<number[]>([]);
  const [themes, setThemes] = useState<number[]>([]);

  //step 4: 타투 이름 입력 관련 state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  //step 5: 추가 요구사항 관련 state
  const [demand, setDemand] = useState('');

  //step 6: 주문 관련 state
  const [count, setCount] = useState(1);
  const [isPublic, setIsPublic] = useState(false);
  const [isCompletedState, setIsCompletedState] = useState(false);
  //이거 왜 꼭 state로 쓰는지 궁금합니다! 꼭 필요한 부분인가요?
  //=> 푸터까지 눌러서 사용자가 진짜 최종 접수하기를 한 상태였을 때에만 내 타투로 이동하고 아니면 임시저장으로 빼줘야 한다고 생각했습니다!

  const location = useLocation();

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
    name: name,
    description: description,
    demand: demand,
    viewCount: step,
    themes: themes,
    styles: styles,
    handDrawingUrl: drawingImageUrl,
    mainImageUrl: previewURL[0],
    count: count,
    isColored: isColoredState,
    isPublic: isPublic,
    isCompleted: isCompletedState,
  };

  // patch 통신 response = receipt 뷰에 넘겨줘야 하는 정보들
  const [receiptData, setReceiptData] = useState<resCustomInfoType>();

  //customSizePage 이후 시작하도록 일시적으로 추가한 코드.
  useEffect(() => {
    setStep(1);
  }, []);

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
        />
      );

    case 4:
      return (
        <CustomThemeLayout
          setStep={setStep}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
        />
      );

    case 5:
      return <AdditionalRequestLayout setStep={setStep} demand={demand} setDemand={setDemand} />;

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
          handDrawingImage={drawingImageUrl}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
          isCompletedState={isCompletedState}
          setIsCompletedState={setIsCompletedState}
        />
      );

    case 7:
      return <ReceiptLayout receiptData={receiptData} haveDesign={haveDesign} />;
  }
};

export default HaveDesignCustomPage;
