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
import useGetOrdersheet from '../../libs/hooks/order/useGetOrdersheet';

interface dataProps {
  address: string;
  zonecode: string;
}

const OrderPage = () => {
  const location = useLocation();
  const state = location.state as { stickerId: number; count: number; shippingFee: number };
  const { response, error, loading } = useGetOrdersheet(state);

  const [isPostOpen, setIsPostOpen] = useState(false);
  const addressRef = useRef<HTMLInputElement | null>(null);
  const postcodeRef = useRef<HTMLInputElement | null>(null);
  const [isSheetOpen, setSheetOpen] = useState(false);

  const [isComplete, setComplete] = useState(false);
  const [input, setInput] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>(''); // 우편번호
  const [firstAddress, setFirstAddress] = useState<string>(''); // 첫주소
  const [detailAddress, setDetailAddress] = useState<string>(''); // 세부주소
  const [agree, setAgree] = useState<boolean>(false);

  const postData = {
    stickerId: state.stickerId,
    productCount: state.count,
    shippingFee: state.shippingFee,
    totalAmount: response?.getOrderAmountRes.totalAmount,
    recipientName: input,
    contact: phone,
    mailingAddress: address,
    baseAddress: firstAddress,
    detailAddress: detailAddress,
  };

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
    addressRef.current.value = data.address; // 첫번쨰 주소
    postcodeRef.current.value = data.zonecode; // 우편번호
    setAddress(data.zonecode);
    setFirstAddress(data.address);
    setIsPostOpen(false);
  };

  return (
    <PageLayout
      renderHeader={renderOrderPageHeader}
      footer={
        <OrderFooter
          isComplete={isComplete}
          price={response && response.getOrderAmountRes.totalAmount}
          postData={postData}
          response={response}
        />
      }
    >
      {!error && !loading && response && (
        <>
          <ProductInfo getOrderSheetStickerInfo={response.getOrderSheetStickerInfo} />
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
            getOrderAmountRes={response.getOrderAmountRes}
            getUserOrderPointRes={response.getUserOrderPointRes}
          />
          <St.Line />
          <RefundInfo setSheetOpen={setSheetOpen} setAgree={setAgree} />
          {isPostOpen && (
            <St.Card onClick={() => setIsPostOpen(false)}>
              <Postcode onComplete={handleAddress} />
            </St.Card>
          )}
          <RefundBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
        </>
      )}
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
      //height: 46.8rem !important;
    }

    & #region_name {
      font-size: 0.5rem;
    }
  `,
};
