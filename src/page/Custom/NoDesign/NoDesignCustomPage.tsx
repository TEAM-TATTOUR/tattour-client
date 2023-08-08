import { useState } from 'react';
import CustomImgPage from './CustomImgPage';
import CustomRequestPage from './CustomRequestPage';

const NoDesignCustomPage = () => {
  //커스텀 신청서 플로우에 따른 각 단계별 컴포넌트 렌더링 플래그
  const [step, setStep] = useState(0);

  //CustomImg - 그려둔 도안 이미지 state
  const [customImages, setCustomImages] = useState<FileList>();

  console.log('!!!', customImages);

  switch (step) {
    case 0:
      return (
        <CustomImgPage
          setStep={setStep}
          customImages={customImages}
          setCustomImages={setCustomImages}
        />
      );
    case 1:
      return <CustomRequestPage setStep={setStep} />;
  }
};

export default NoDesignCustomPage;
