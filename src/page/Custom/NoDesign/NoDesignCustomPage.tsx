import { useEffect, useState } from 'react';
// import CustomSizePage from '../Common/CustomSizePage';
import CustomImgLayout from '../../../components/Custom/NoDesign/Img/CustomImgLayout';
import CustomRequestLayout from '../../../components/Custom/NoDesign/Request/CustomRequestLayout';
import PriceLayout from '../../../components/Custom/Common/PriceLayout';
import { useLocation } from 'react-router-dom';
import ReceiptLayout from '../../../components/Custom/Common/Receipt/ReceiptLayout';
import { resCustomInfoType } from '../../../types/customInfoType';

const NoDesignCustomPage = () => {
  const location = useLocation();

  //커스텀 신청서 플로우에 따른 각 단계별 컴포넌트 렌더링 플래그
  const [step, setStep] = useState(
    location.state && location.state.step !== undefined ? location.state.step : 1,
  );

  //step 1: CustomImg - 그려둔 도안 이미지 state
  const [customImages, setCustomImages] = useState<FileList>();
  const [previewURL, setPreviewURL] = useState(
    location.state && location.state.mainImageUrl !== undefined
      ? location.state.mainImageUrl
      : null,
  );

  //step 2: CustomRequest
  //타투 이름 state
  const [name, setName] = useState(
    location.state && location.state.name !== undefined ? location.state.name : '',
  );

  //요청사항 state
  const [demand, setDemand] = useState(
    location.state && location.state.demand !== undefined ? location.state.demand : '',
  );

  //step 3: 주문 관련 state -> 이 부분 나중에 같이 논의 필요합니다
  const [count, setCount] = useState(1);
  const [isPublic, setIsPublic] = useState(false);
  const [price, setPrice] = useState(0); //수정하면서 임의로 추가했습니다!

  // 앞에 size + customId 통합 해놓은거에서 우선 navigate state로 관련 정보 불러옴 추후 통합시 제거 예정
  const size = location.state ? location.state.size : null;
  const customId = location.state ? location.state.customId : null;
  const haveDesign = location.state ? location.state.haveDesign : null; //영수증 뷰 다르게 띄워주기 위해서 임시 추가했습니다

  //patch에 보낼 정보들 객체로 모으기
  const customInfo = {
    customId: customId,
    size: size,
    name: name === '' ? '임시저장' : name,
    demand: demand,
    viewCount: step,
  };

  // patch 통신 response = receipt 뷰에 넘겨줘야 하는 정보들
  const [receiptData, setReceiptData] = useState<resCustomInfoType>();

  //customSizePage가 공통으로 쓰여 아직 처리를 못해줘, step이 1부터 시작하도록 useEffect로 테스트 코드 추가. 추후 삭제 예정
  // useEffect(() => {
  //   setStep(1);
  // }, []);

  switch (step) {
    // case 0:
    //   return <CustomSizePage setStep={setStep} />;
    case 1:
      return (
        <CustomImgLayout
          setStep={setStep}
          customImages={customImages}
          setCustomImages={setCustomImages}
          customInfo={customInfo}
          previewURL={previewURL}
          setPreviewURL={setPreviewURL}
        />
      );
    case 2:
      return (
        <CustomRequestLayout
          setStep={setStep}
          name={name}
          setName={setName}
          demand={demand}
          setDemand={setDemand}
          customInfo={customInfo}
          customImages={customImages}
        />
      );

    case 3:
      return (
        <PriceLayout
          step={step}
          setStep={setStep}
          customInfo={customInfo}
          customImages={customImages}
          setReceiptData={setReceiptData}
          count={count} //여기부터 수정하면서 필요해진 props 임시로 추가했습니다!
          setCount={setCount}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
          price={price}
          setPrice={setPrice}
        />
      );

    case 4:
      return <ReceiptLayout receiptData={receiptData} haveDesign={haveDesign} />; //haveDesign 임의로 추가해서 넘겨줬습니다
  }
};

export default NoDesignCustomPage;
