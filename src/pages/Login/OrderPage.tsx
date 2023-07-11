import { useState } from "react";
import styled from "styled-components";
import ProductInfo from "../../components/Order/ProductInfo";
import DeliveryInfo from "../../components/Order/DeliveryInfo";
import PaymentInfo from "../../components/Order/PaymentInfo";
import RefundInfo from "../../components/Order/RefundInfo";
import Postcode from "react-daum-postcode";

const OrderPage = () => {

  const [isPostOpen, setIsPostOpen] = useState(false); 

  const handleModal = () => {
    setIsPostOpen(true);
  }

  const handleAddress = (data) => {
    document.getElementById('input').value = data.address;
    document.getElementById('post_code').value = data.zonecode; // 우편번호
    setIsPostOpen(false);
  }

  return (
    <div>
        <ProductInfo/>
        <St.Line/>
        <DeliveryInfo handleModal={handleModal}/>
        <St.Line/>
        <PaymentInfo/>
        <St.Line/>
        <RefundInfo/>
        {isPostOpen && (
          <div className="card">
            <Postcode onComplete={handleAddress}/>
          </div>
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
    `
}