import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomDirectDepositLayout from '../../../components/Custom/Common/DirectDeposit/CustomDirectDepositLayout';
import PriceLayout from '../../../components/Custom/Common/PriceLayout';
import ReceiptLayout from '../../../components/Custom/Common/Receipt/ReceiptLayout';
import CustomSizeLayout from '../../../components/Custom/Common/Size/CustomSizeLayout';
import CustomImgLayout from '../../../components/Custom/NoDesign/Img/CustomImgLayout';
import CustomRequestLayout from '../../../components/Custom/NoDesign/Request/CustomRequestLayout';
import { api } from '../../../libs/api';
import { resCustomInfoType } from '../../../types/customInfoType';
import LoadingPage from '../../LoadingPage';

const NoDesignCustomPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
  const [size, setSize] = useState(location.state ? location.state.size : null);
  // const size = location.state ? location.state.size : null;
  const customId = location.state ? location.state.customId : null;
  const haveDesign = location.state ? location.state.haveDesign : null; //영수증 뷰 다르게 띄워주기 위해서 임시 추가했습니다

  //patch에 보낼 정보들 객체로 모으기
  const customInfo = {
    customId: customId, //id
    size: size, //타투 사이즈
    name: name === '' ? '임시저장' : name, //이름
    demand: demand, //요청사항
    viewCount: step, //뷰카운트(임시저장용)
    count: count, //수량
    isPublic: isPublic, //도안 공개 여부
    price: price, //최종 가격
    haveDesign: haveDesign,
  };

  // patch 통신 response = receipt 뷰에 넘겨줘야 하는 정보들
  const [receiptData, setReceiptData] = useState<resCustomInfoType>();

  //customSizePage가 공통으로 쓰여 아직 처리를 못해줘, step이 1부터 시작하도록 useEffect로 테스트 코드 추가. 추후 삭제 예정
  // useEffect(() => {
  //   setStep(1);
  // }, []);

  const [receiptLoading, setReceiptLoading] = useState(false);

  // 무통장 입금에서 '송금했어요' 버튼 클릭시의 핸들러
  const handleClickCustomDepositBtn = async () => {
    const formData = new FormData();

    // 무통장 입금 핸들러가 실행 될 때는 모든 커스텀 신청 플로우를 마쳤을 때이므로, customInfo에 isCompleted 플래그를 true로 바꿔 통신한다.
    const updatedCustomInfo = {
      ...customInfo,
      isCompleted: true,
    };

    setReceiptLoading(true);

    try {
      // 1. customInfo(커스텀 정보들) append
      const json = JSON.stringify(updatedCustomInfo);
      const blob = new Blob([json], { type: 'application/json' });
      formData.append('customInfo', blob);

      // 2. customImage(도안 이미지) append
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

      setReceiptData(data.data);
      if (data) {
        setReceiptLoading(false);
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
          // setReceiptData={setReceiptData}
          // count={count} //여기부터 수정하면서 필요해진 props 임시로 추가했습니다!
          setCount={setCount}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
          // totalPrice={price}
          setTotalPrice={setPrice}
        />
      );

    case 4:
      return receiptLoading ? (
        <LoadingPage />
      ) : (
        <CustomDirectDepositLayout
          setStep={setStep}
          totalPrice={price}
          handleClickCustomDepositBtn={handleClickCustomDepositBtn}
        />
      );

    case 5:
      return <ReceiptLayout receiptData={receiptData} haveDesign={haveDesign} />; //haveDesign 임의로 추가해서 넘겨줬습니다
  }
};

export default NoDesignCustomPage;
