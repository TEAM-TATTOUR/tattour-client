import { IcBackDark } from '../assets/icon';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';
import CartFooter from '../components/Cart/CartFooter';
import CartBottom from '../components/Cart/CartBottom';
import CartItemSection from '../components/Cart/CartItemSection';
import useGetCartList, { OrderAmountDetailProps } from '../libs/hooks/useGetCartList';
import EmptyView from '../components/Cart/EmptyView';
import { useEffect, useState } from 'react';

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

  const { response, error, loading } = useGetCartList();

  const [orderAmountDetailRes, setOrderAmountDetailRes] = useState<OrderAmountDetailProps>();

  useEffect(() => {
    setOrderAmountDetailRes(response?.orderAmountDetailRes);
  }, [response]);

  // add price to orderAmountDetailRes
  const handleClickQuantityButton = (price: number) => {
    setOrderAmountDetailRes((prev) => {
      return {
        ...prev,
        totalAmount: prev?.totalAmount + price,
      };
    });
  };

  return (
    <PageLayout renderHeader={renderCartPageHeader} footer={<CartFooter />}>
      {!error &&
        !loading &&
        response &&
        (response.cartItemsRes.length === 0 ? (
          <>
            <EmptyView />
          </>
        ) : (
          <>
            <CartItemSection
              items={response?.cartItemsRes}
              handleClickQuantityButton={handleClickQuantityButton}
            />
            <CartBottom orderAmountInfo={orderAmountDetailRes} />
          </>
        ))}
    </PageLayout>
  );
};

export default CartPage;
