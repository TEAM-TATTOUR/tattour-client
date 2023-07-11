import styled from "styled-components";
import ProductInfo from "../../components/Order/ProductInfo";
import DeliveryInfo from "../../components/Order/DeliveryInfo";
import PaymentInfo from "../../components/Order/PaymentInfo";
import RefundInfo from "../../components/Order/RefundInfo";
import PageLayout from "../../components/PageLayout";
import Header from "../../components/Header";

const OrderPage = () => {

  const renderOrderPageHeader = () => {
    return <Header leftSection={<div>left</div>} title='주문하기' rightSection={<div>left</div>} />;
  }
  return (
    <PageLayout renderHeader={renderOrderPageHeader}>
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