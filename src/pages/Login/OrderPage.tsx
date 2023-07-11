import styled from "styled-components";
import ProductInfo from "../../components/Order/ProductInfo";
import DeliveryInfo from "../../components/Order/DeliveryInfo";
import PaymentInfo from "../../components/Order/PaymentInfo";
import RefundInfo from "../../components/Order/RefundInfo";
import Postcode from "react-daum-postcode";

const OrderPage = () => {
  return (
    <div>
        <ProductInfo/>
        <St.Line/>
        <DeliveryInfo/>
        <St.Line/>
        <PaymentInfo/>
        <St.Line/>
        <RefundInfo/>
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