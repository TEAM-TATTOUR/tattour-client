import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomDirectDepositLayout from '../../../components/Custom/Common/DirectDeposit/CustomDirectDepositLayout';
import PriceLayout from '../../../components/Custom/Common/PriceLayout';
import ReceiptLayout from '../../../components/Custom/Common/Receipt/ReceiptLayout';
import CustomSizeLayout from '../../../components/Custom/Common/Size/CustomSizeLayout';
import AdditionalRequestLayout from '../../../components/Custom/HaveDesign/AdditionalRequest/AdditionalRequestLayout';
import CustomThemeLayout from '../../../components/Custom/HaveDesign/CustomTheme/CustomThemeLayout';
import CustomReferenceLayout from '../../../components/Custom/HaveDesign/Reference/CustomReferenceLayout';
import StylingColorLayout from '../../../components/Custom/HaveDesign/SelectColor/StylingColorLayout';
import SelectKeywordLayout from '../../../components/Custom/HaveDesign/SelectKeyword/SelectKeywordLayout';
import { api } from '../../../libs/api';
import { resCustomInfoType } from '../../../types/customInfoType';
import LoadingPage from '../../LoadingPage';

const HaveDesignCustomPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleTotalPriceChange = (newTotalPrice: number) => {
    setPrice(newTotalPrice);
  };

  // 앞부분 임시 통합한 곳에서 state 불러오기. 최종 통합 때 제거 예정
  const [size, setSize] = useState(location.state ? location.state.size : null);
  const customId = location.state ? location.state.customId : null;
  const haveDesign = true;

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
    count: count, //수량
    isPublic: isPublic, //도안 공개 여부
    price: price, //최종 가격
  };

  // patch 통신 response = receipt 뷰에 넘겨줘야 하는 정보들
  const [receiptData, setReceiptData] = useState<resCustomInfoType>();

  // 이미지 용량 이슈로 receipt 페이지로 넘어갈 때, 데이터 통신 완료 이전 로딩 스피너 보여주기 위해 쓰이는 플래그
  const [receiptLoading, setReceiptLoading] = useState(false);

  const handleClickCustomDepositBtn = async () => {
    const formData = new FormData();

    // 무통장 입금 핸들러가 실행 될 때는 모든 커스텀 신청 플로우를 마쳤을 때이므로, customInfo에 isCompleted 플래그를 true로 바꿔 통신한다.
    const updatedCustomInfo = {
      ...customInfo,
      isCompleted: true,
    };

    setReceiptLoading(true);

    try {
      // 1. handDrawingImage(손 그림) append
      if (handDrawingImage) {
        formData.append('handDrawingImage', handDrawingImage);
      }

      // 2. customInfo(커스텀 정보들) append
      const json = JSON.stringify(updatedCustomInfo);
      const blob = new Blob([json], { type: 'application/json' });
      formData.append('customInfo', blob);

      // 3. customImage(도안 이미지) append
      if (customImages) {
        for (let i = 0; i < customImages.length; i++) {
          formData.append('customImages', customImages.item(i) as File);
        }
      }

      const { data } = await api.patch('/custom/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (data) {
        setReceiptLoading(false);
        setReceiptData(data.data);
        setStep((prev: number) => prev + 1);
      }
    } catch (err) {
      navigate('/error');
    }
  };

  switch (step) {
    case 0:
      return (
        <CustomSizeLayout
          setStep={setStep}
          size={size}
          setSize={setSize}
          haveDesign={haveDesign}
          customId={customId}
        />
      );
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
          // count={count}
          setCount={setCount}
          customInfo={customInfo}
          customImages={customImages}
          // setReceiptData={setReceiptData}
          // handDrawingImage={handDrawingImage}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
          // totalPrice={price}
          setTotalPrice={handleTotalPriceChange}
        />
      );

    case 7:
      return receiptLoading ? (
        <LoadingPage />
      ) : (
        <CustomDirectDepositLayout
          totalPrice={price}
          handleClickCustomDepositBtn={handleClickCustomDepositBtn}
        />
      );

    case 8:
      return <ReceiptLayout receiptData={receiptData} haveDesign={haveDesign} />;
  }
};

export default HaveDesignCustomPage;
