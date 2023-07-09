import styled from "styled-components";
import ProductInfo from "../../components/Order/ProductInfo";
import DeliveryInfo from "../../components/Order/DeliveryInfo";
import PaymentInfo from "../../components/Order/PaymentInfo";

const OrderPage = () => {
  return (
    <div>
        <ProductInfo/>
        <DeliveryInfo/>
        <PaymentInfo/>
    </div>
  )
}

export default OrderPage