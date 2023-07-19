import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProductInfo from '../../components/Order/ProductInfo';
import DeliveryInfo from '../../components/Order/DeliveryInfo';
import PaymentInfo from '../../components/Order/PaymentInfo';
import RefundInfo from '../../components/Order/RefundInfo';
import Postcode from 'react-daum-postcode';
import PageLayout from '../../components/PageLayout';
import Header from '../../components/Header';
import OrderFooter from '../../components/Order/OrderFooter';
import RefundBottom from '../../components/Order/RefundBottom';
import BackBtn from '../../common/Header/BackBtn';
import { useLocation } from 'react-router-dom';

interface dataProps {
  address: string;
  zonecode: string;
}

const OrderPage = () => {
  const location = useLocation();
  const state = location.state as { id: number };
  const id = state.id;
  // id로 서버에서 데이터 받아오기
  console.log(id);
  // 사용자 포인트 정보는 토큰으로 받아온다고 함

  const [isPostOpen, setIsPostOpen] = useState(false);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const postcodeRef = useRef<HTMLInputElement | null>(null);
  const [isSheetOpen, setSheetOpen] = useState(false);

  // 추후 서버통신 시 변수 변경 예정
  const ORIGINAL_PRICE = 4000;
  const FINAL_PRICE = 5500;
  const ITEM_PRICE = 2500;
  const DELIVERY_PRICE = 3000;
  const MY_POINT = 10000;
  const RESULT_POINT = 4500;
  const COUNT = 1;

  const [isComplete, setComplete] = useState(false);
  const [input, setInput] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [detailAddress, setDetailAddress] = useState<string>('');
  const [agree, setAgree] = useState<boolean>(false);

  useEffect(() => {
    if (input === '' || phone === '' || address === '' || detailAddress === '' || agree === false) {
      setComplete(false);
    } else {
      setComplete(true);
    }
  }, [input, phone, address, detailAddress, agree]);

  const renderOrderPageHeader = () => {
    return <Header leftSection={<BackBtn />} title='주문하기' />;
  };

  const handleModal = () => {
    setIsPostOpen(true);
  };

  const handleAddress = (data: dataProps) => {
    if (!addressRef.current || !postcodeRef.current) return;
    addressRef.current.value = data.address;
    postcodeRef.current.value = data.zonecode; // 우편번호
    setAddress(data.zonecode);
    setIsPostOpen(false);
  };

  return (
    <PageLayout
      renderHeader={renderOrderPageHeader}
      footer={<OrderFooter isComplete={isComplete} />}
    >
      <ProductInfo originialPrice={ORIGINAL_PRICE} itemPrice={ITEM_PRICE} count={COUNT} />
      <St.Line />
      <DeliveryInfo
        handleModal={handleModal}
        addressRef={addressRef}
        postcodeRef={postcodeRef}
        setComplete={setComplete}
        input={input}
        setInput={setInput}
        phone={phone}
        setPhone={setPhone}
        detailAddress={detailAddress}
        setDetailAddress={setDetailAddress}
      />
      <St.Line />
      <PaymentInfo
        finalPrice={FINAL_PRICE}
        itemPrice={ITEM_PRICE}
        deliveryPrice={DELIVERY_PRICE}
        myPoint={MY_POINT}
        resultPoint={RESULT_POINT}
      />
      <St.Line />
      <RefundInfo setSheetOpen={setSheetOpen} setAgree={setAgree} />
      {isPostOpen && (
        <St.Card onClick={() => setIsPostOpen(false)}>
          <Postcode onComplete={handleAddress} />
        </St.Card>
      )}
      <RefundBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
    </PageLayout>
  );
};

export default OrderPage;

const St = {
  Line: styled.hr`
    height: 1.3rem;

    background-color: ${({ theme }) => theme.colors.bg};
    border-width: 0rem;
  `,
  Card: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 2rem;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;

    & > div {
      height: 46.8rem !important;
    }

    & #region_name {
      font-size: 0.5rem;
    }
  `,
};
