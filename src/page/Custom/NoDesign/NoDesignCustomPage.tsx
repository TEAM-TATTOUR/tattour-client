import { useEffect, useState } from 'react';
// import CustomSizePage from '../Common/CustomSizePage';
import PricePage from '../PricePage';
import CustomImgLayout from '../../../components/Custom/NoDesign/Img/CustomImgLayout';
import CustomRequestPage from './CustomRequestPage';

const NoDesignCustomPage = () => {
  //커스텀 신청서 플로우에 따른 각 단계별 컴포넌트 렌더링 플래그
  const [step, setStep] = useState(0);

  //step 1: CustomImg - 그려둔 도안 이미지 state
  const [customImages, setCustomImages] = useState<FileList>();

  //step 2: CustomRequest
  //타투 이름 state
  const [name, setName] = useState('');
  //요청사항 state
  const [demand, setDemand] = useState('');

  //customSizePage가 공통으로 쓰여 아직 처리를 못해줘, step이 1부터 시작하도록 useEffect로 테스트 코드 추가. 추후 삭제 예정
  useEffect(() => {
    setStep(1);
  }, []);

  switch (step) {
    // case 0:
    //   return <CustomSizePage setStep={setStep} />;
    case 1:
      return (
        <CustomImgLayout
          setStep={setStep}
          customImages={customImages}
          setCustomImages={setCustomImages}
        />
      );
    case 2:
      return (
        <CustomRequestPage
          setStep={setStep}
          name={name}
          setName={setName}
          demand={demand}
          setDemand={setDemand}
        />
      );

    case 3:
      return <PricePage setStep={setStep} />;
  }
};

export default NoDesignCustomPage;
