import styled from "styled-components";
import ProductInfo from "../components/Order/ProductInfo";
import DeliveryInfo from "../components/Order/DeliveryInfo";
import PaymentInfo from "../components/Order/PaymentInfo";
import RefundInfo from "../components/Order/RefundInfo";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import OrderFooter from "../components/Order/OrderFooter";
import { IcBackDark, IcCancelDark } from "../assets/icon";

const OrderPage = () => {

  const renderOrderPageHeader = () => {
    return <Header leftSection={<div><IcBackDark/></div>} title='주문하기' rightSection={<div><IcCancelDark/></div>} />;
  }
  return (
    <PageLayout renderHeader={renderOrderPageHeader} footer={<OrderFooter/>}>
        <ProductInfo/>
        <St.Line/>
        <DeliveryInfo/>
        <St.Line/>
        <PaymentInfo/>
        <St.Line/>
        <RefundInfo/>
    </PageLayout>
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