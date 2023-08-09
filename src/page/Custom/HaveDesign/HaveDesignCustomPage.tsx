import { useEffect, useState } from 'react';
// import CustomSizePage from '../Common/CustomSizePage';
import PricePage from '../PricePage';
import CustomReferencePage from './CustomReferencePage';

const HaveDesignCustomPage = () => {
  const [step, setStep] = useState(0);

  //step 1: CustomImg - 그려둔 도안 이미지 state
  const [customImages, setCustomImages] = useState<FileList>();
  const [handDrawingImage, setHandDrawingImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string[]>([]); //페이지로 뺴주기


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
        />
      );

    case 3:
      return <PricePage setStep={setStep} />;
  }
};

export default HaveDesignCustomPage;
