import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ProductInfo from '../components/Order/ProductInfo';
import DeliveryInfo from '../components/Order/DeliveryInfo';
import PaymentInfo from '../components/Order/PaymentInfo';
import RefundInfo from '../components/Order/RefundInfo';
import Postcode from 'react-daum-postcode';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import OrderFooter from '../components/Order/OrderFooter';
import RefundBottom from '../components/Order/RefundBottom';
import BackBtn from '../common/Header/BackBtn';

const OrderPage = () => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const addressRef = useRef<null | HTMLInputElement>(null);
  const postcodeRef = useRef<null | HTMLInputElement>(null);
  const [isSheetOpen, setSheetOpen] = useState(false);

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

  const handleAddress = (data: any) => {
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
      <ProductInfo />
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
      <PaymentInfo />
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
