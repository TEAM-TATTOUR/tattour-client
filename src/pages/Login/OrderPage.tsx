import { useState, useRef } from "react";
import styled from "styled-components";
import ProductInfo from "../../components/Order/ProductInfo";
import DeliveryInfo from "../../components/Order/DeliveryInfo";
import PaymentInfo from "../../components/Order/PaymentInfo";
import RefundInfo from "../../components/Order/RefundInfo";
import Postcode from "react-daum-postcode";

const OrderPage = () => {

  const [isPostOpen, setIsPostOpen] = useState(false); 
  const addressRef = useRef<null | HTMLInputElement>(null);
  const postcodeRef = useRef<null | HTMLInputElement>(null);

  const handleModal = () => {
    setIsPostOpen(true);
  }

  const handleAddress = (data : any) => {
    addressRef.current.value = data.address;
    postcodeRef.current.value = data.zonecode; // 우편번호
    setIsPostOpen(false);
  }

  return (
    <St.Wrapper>
        <ProductInfo/>
        <St.Line/>
        <DeliveryInfo $handleModal={handleModal} $addressRef={addressRef} $postcodeRef={postcodeRef}/>
        <St.Line/>
        <PaymentInfo/>
        <St.Line/>
        <RefundInfo/>
        {isPostOpen && (
          <St.Card>
            <Postcode onComplete={handleAddress}/>
          </St.Card>
        )}
    </St.Wrapper>
  )
}

export default OrderPage

const St = {
    Wrapper : styled.div`
      position: relative;
    `,
    Line : styled.hr`
        height: 1.3rem;

        background-color: ${({ theme }) => theme.colors.bg};
        border-width: 0rem;
    `,
    Card : styled.div`
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;
      padding: 2rem;

      position: fixed;
      top: 0;
      left: 0;

      background-color: rgba(0,0,0,0.6);
      z-index: 1;

      & > div {
        height: 46.8rem !important;
      }

      & #region_name {
        font-size: 0.5rem;
      }
    `
  }