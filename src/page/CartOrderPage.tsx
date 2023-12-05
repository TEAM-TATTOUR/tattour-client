import styled from 'styled-components';
import useGetCartList, { OrderAmountDetailProps } from '../libs/hooks/useGetCartList';
import { useEffect, useState, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import OrderFooter from '../components/Order/OrderFooter';
import ProductInfo from '../components/Order/ProductInfo';
import DeliveryInfo from '../components/Order/DeliveryInfo';
import PaymentInfo from '../components/Order/PaymentInfo';
import RefundInfo from '../components/Order/RefundInfo';
import Postcode from 'react-daum-postcode';
import Header from '../components/Header';
import BackBtn from '../common/Header/BackBtn';
import RefundBottom from '../components/Order/RefundBottom';
import { useNavigate } from 'react-router-dom';
import { readOrderSheetStickerInfoProps } from '../libs/hooks/order/useGetOrdersheet';

interface dataProps {
  address: string;
  zonecode: string;
}

const CartOrderPage = () => {
  const { response, error, loading } = useGetCartList();

  const [orderAmountDetailRes, setOrderAmountDetailRes] = useState<OrderAmountDetailProps>(
    {} as OrderAmountDetailProps,
  );

  const [readOrderSheetStickerInfo, setReadOrderSheetStickerInfo] = useState<
    readOrderSheetStickerInfoProps[]
  >([]);

  useEffect(() => {
    if (response) {
      setOrderAmountDetailRes(response.orderAmountDetailRes);
    }
    if (response.cartItemsRes) {
      setReadOrderSheetStickerInfo(
        response.cartItemsRes.map((item) => {
          return {
            mainImageUrl: item.mainImageUrl,
            name: item.name,
            price: item.price,
            discountedPrice: item.discountPrice,
            count: item.count,
          };
        }),
      );
    }
  }, [response]);

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

  //   const postData = {
  //     stickerId: state.stickerId,
  //     productCount: state.count,
  //     shippingFee: state.shippingFee,
  //     totalAmount: response?.orderAmountDetailRes.totalAmount,
  //     recipientName: input,
  //     contact: phone,
  //     mailingAddress: address,
  //     baseAddress: firstAddress,
  //     detailAddress: detailAddress,
  //   };

  //   useEffect(() => {
  //     if (!response) return;
  //     setInput(response.userProfileInfo.name);
  //     setPhone(
  //       response.userProfileInfo.phoneNumber
  //         .replace(/[^0-9]/g, '')
  //         .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
  //         .replace(/(-{1,2})$/g, ''),
  //     );
  //   }, [response]);

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
    <PageLayout renderHeader={renderOrderPageHeader}>
      {!error && !loading && response && orderAmountDetailRes && (
        <>
          <ProductInfo readOrderSheetStickerInfo={readOrderSheetStickerInfo} />
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
            orderAmountInfo={orderAmountDetailRes}
            // userPointAfterOrderInfo={orderAmountDetailRes.userPointAfterOrderInfo}
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

export default CartOrderPage;
