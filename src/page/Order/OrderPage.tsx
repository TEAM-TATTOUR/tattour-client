import { useState, useEffect } from 'react';
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
import useGetOrdersheet, {
  OrderSheetRequest,
  orderAmountDetailResProps,
} from '../../libs/hooks/order/useGetOrdersheet';
import PayMethodInfo from '../../components/Order/PayMethodInfo';
import LoadingPage from '../LoadingPage';

interface dataProps {
  address: string;
  zonecode: string;
}

const renderOrderPageHeader = () => {
  return <Header leftSection={<BackBtn />} title='주문하기' />;
};

const OrderPage = () => {
  const location = useLocation();
  const state = location.state as { stickerId: number; count: number; shippingFee: number };
  const { response, error, loading } = useGetOrdersheet(
    state ? state : ({ stickerId: 0, count: 0 } as OrderSheetRequest),
  );

  const [orderLoading, setOrderLoading] = useState(false);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);

  const [isComplete, setComplete] = useState(false);
  const [input, setInput] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [zoneCode, setZoneCode] = useState<string>(''); // 우편번호
  const [address, setAddress] = useState<string>(''); // 기본주소
  const [detailAddress, setDetailAddress] = useState<string>(''); // 세부주소
  const [agree, setAgree] = useState<boolean>(false);
  const [orderAmountDetailRes, setOrderAmountDetailRes] = useState<orderAmountDetailResProps>(
    {} as orderAmountDetailResProps,
  );

  const postData = {
    productAmount: orderAmountDetailRes.productAmount,
    shippingFee: state ? state.shippingFee : 3000,
    totalAmount: orderAmountDetailRes.totalAmount,
    recipientName: input,
    contact: phone,
    mailingAddress: zoneCode,
    baseAddress: address,
    detailAddress: detailAddress,
    stickerId: state ? state.stickerId : 0,
  };

  useEffect(() => {
    if (!response) return;
    setInput(response.userProfileRes.name);
    setPhone(
      response.userProfileRes.phoneNumber
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(-{1,2})$/g, ''),
    );
    if (response?.orderAmountDetailRes) {
      setOrderAmountDetailRes(response.orderAmountDetailRes);
    }
  }, [response]);

  useEffect(() => {
    setComplete(
      input !== '' && phone.length === 13 && zoneCode !== '' && detailAddress !== '' && agree,
    );
  }, [input, phone, zoneCode, detailAddress, agree]);

  const handleModal = () => {
    setIsPostOpen(true);
  };

  const handleAddress = (data: dataProps) => {
    setZoneCode(data.zonecode);
    setAddress(data.address);
    setDetailAddress('');
    setIsPostOpen(false);
  };

  return orderLoading ? (
    <LoadingPage />
  ) : (
    <PageLayout
      renderHeader={renderOrderPageHeader}
      footer={
        <OrderFooter
          isComplete={isComplete}
          price={response && response.orderAmountDetailRes.totalAmount}
          postData={postData}
          response={response}
          stickerId={state ? state.stickerId : 0}
          count={state ? state.count : 0}
          setOrderLoading={setOrderLoading}
        />
      }
    >
      {!error && !loading && response && (
        <>
          {response.orderSheetStickersRes.map((_, idx) => (
            <ProductInfo orderSheetSticker={response.orderSheetStickersRes[idx]} key={idx} />
          ))}
          <St.Line />
          <DeliveryInfo
            handleModal={handleModal}
            setComplete={setComplete}
            input={input}
            setInput={setInput}
            phone={phone}
            setPhone={setPhone}
            zoneCode={zoneCode}
            address={address}
            detailAddress={detailAddress}
            setDetailAddress={setDetailAddress}
          />
          <St.Line />
          <PayMethodInfo />
          <St.Line />
          <PaymentInfo orderAmountDetailRes={response.orderAmountDetailRes} />
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
      max-width: 43rem;
    }

    & #region_name {
      font-size: 0.5rem;
    }
  `,
};
