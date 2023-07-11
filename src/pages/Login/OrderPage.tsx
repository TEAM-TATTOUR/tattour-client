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
    <div>
        <ProductInfo/>
        <St.Line/>
        <DeliveryInfo handleModal={handleModal} addressRef={addressRef} postcodeRef={postcodeRef}/>
        <St.Line/>
        <PaymentInfo/>
        <St.Line/>
        <RefundInfo/>
        {isPostOpen && (
          <St.Card>
            <Postcode onComplete={handleAddress}/>
          </St.Card>
        )}
    </div>
  )
}

export default OrderPage

const St = {
    Line : styled.hr`
        height: 1.3rem;

        background-color: ${({ theme }) => theme.colors.bg};
        border-width: 0rem;
    `,
    Card : styled.div`
      padding: 0rem 10rem;
    `
}