import { useEffect, useState } from 'react';
// import CustomSizePage from '../Common/CustomSizePage';
import CustomReferencePage from './CustomReferencePage';
import StylingColorPage from './StylingColorPage';
import SelectKeywordPage from './SelectKeywordPage';
import CustomThemePage from './CustomThemePage';
import AdditionalRequestPage from './AdditionalRequestPage';

const HaveDesignCustomPage = () => {
  const [step, setStep] = useState(0);

  //step 1: CustomImg - 그려둔 도안 이미지 state
  const [customImages, setCustomImages] = useState<FileList | null>(null);
  const [handDrawingImage, setHandDrawingImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string[]>([]);

  //step 2: 색상 선택 state
  const [isColoredState, setIsColored] = useState(false);

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
        <CustomReferencePage
          setStep={setStep}
          customImages={customImages}
          setCustomImages={setCustomImages}
          setHandDrawingImage={setHandDrawingImage}
        />
      );

    case 2:
      return (
        <StylingColorPage
          setStep={setStep}
          isColoredState={isColoredState}
          setIsColored={setIsColored}
        />
      );

    case 3:
      return <SelectKeywordPage setStep={setStep} setStyles={setStyles} setThemes={setThemes} />;

    case 4:
      return (
        <CustomThemePage setStep={setStep} setName={setName} setDescription={setDescription} />
      );

    case 5:
      return <AdditionalRequestPage setStep={setStep} setDemand={setDemand} />;
  }
};

export default HaveDesignCustomPage;
