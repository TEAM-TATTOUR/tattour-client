import { useEffect, useState } from 'react';
import PriceLayout from '../../../components/Custom/Common/PriceLayout';
import AdditionalRequestLayout from '../../../components/Custom/HaveDesign/AdditionalRequest/AdditionalRequestLayout';
import CustomThemeLayout from '../../../components/Custom/HaveDesign/CustomTheme/CustomThemeLayout';
import ReceiptLayout from '../../../components/Custom/HaveDesign/Receipt/ReceiptLayout';
import CustomReferenceLayout from '../../../components/Custom/HaveDesign/Reference/CustomReferenceLayout';
import StylingColorLayout from '../../../components/Custom/HaveDesign/SelectColor/StylingColorLayout';
import SelectKeywordLayout from '../../../components/Custom/HaveDesign/SelectKeyword/SelectKeywordLayout';

// import CustomSizePage from '../Common/CustomSizePage';

const HaveDesignCustomPage = () => {
  const [step, setStep] = useState(0);

  //step 1: CustomImg - 그려둔 도안 이미지 state
  const [customImages, setCustomImages] = useState<FileList | null>(null);
  const [handDrawingImage, setHandDrawingImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string[]>([]);
  const [drawingImageUrl, setDrawingImageUrl] = useState<string | null>(null);

  //step 2: 색상 선택 state
  const [isColoredState, setIsColored] = useState(false);
  const [activeBtn, setActiveBtn] = useState('');

  //step 3: 키워드 선택 state
  const [styles, setStyles] = useState<number[]>([]);
  const [themes, setThemes] = useState<number[]>([]);

  //step 4: 타투 이름 입력 관련 state
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  //step 5: 추가 요구사항 관련 state
  const [demand, setDemand] = useState('');

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
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
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
      return <PriceLayout setStep={setStep} />;

    case 7:
      return <ReceiptLayout />;
  }
};

export default HaveDesignCustomPage;
