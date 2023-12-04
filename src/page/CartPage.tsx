import { IcBackDark } from '../assets/icon';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';
import CartFooter from '../components/Cart/CartFooter';
import CartBottom from '../components/Cart/CartBottom';
import CartItemSection from '../components/Cart/CartItemSection';

const CartPage = () => {
  const navigate = useNavigate();

  const renderCartPageHeader = () => {
    return (
      <Header
        leftSection={
          <IcBackDark
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        title='장바구니'
        fixed={true}
      />
    );
  };

  const orderAmountInfo = {
    totalAmount: 4000,
    productAmount: 5000,
    shippingFee: 3000,
  };

  return (
    <PageLayout renderHeader={renderCartPageHeader} footer={<CartFooter />}>
      {/* <EmptyView /> */}
      <CartItemSection />
      <CartBottom orderAmountInfo={orderAmountInfo} />
    </PageLayout>
  );
};

export default CartPage;
