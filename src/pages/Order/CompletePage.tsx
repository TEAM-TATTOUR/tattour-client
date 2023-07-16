import styled from 'styled-components';
import Result from '../../common/Result';
import PageLayout from '../../components/PageLayout';
import Header from '../../components/Header';
import ProductInfo from '../../components/Order/ProductInfo';
import PaymentMini from '../../components/Order/PaymentMini';

const CompletePage = () => {
  // 추후 서버통신 시 받아옴
  const ORIGINAL_PRICE = 4000;
  const FINAL_PRICE = 5500;
  const ITEM_PRICE = 2500;
  const DELIVERY_PRICE = 3000;
  const COUNT = 1;

  const renderCompletePageHeader = () => {
    return <Header title='주문하기' />;
  };

  return (
    <PageLayout renderHeader={renderCompletePageHeader}>
      <Result
        mainText={'결제가 완료되었어요'}
        description={'3일 내에 배송이 시작되며, 문자로 안내드려요'}
      />
      <St.Line />
      <St.Title>주문 정보</St.Title>
      <ProductInfo originialPrice={ORIGINAL_PRICE} itemPrice={ITEM_PRICE} count={COUNT} />
      <St.LightLine />
      <St.PriceContainer>
        <PaymentMini
          finalPrice={FINAL_PRICE}
          itemPrice={ITEM_PRICE}
          deliveryPrice={DELIVERY_PRICE}
        />
      </St.PriceContainer>
    </PageLayout>
  );
};

export default CompletePage;

const St = {
  Line: styled.hr`
    height: 1.3rem;

    background-color: ${({ theme }) => theme.colors.bg};
    border-width: 0rem;
  `,
  Title: styled.h2`
    margin: 2.8rem 0rem 1.4rem 2.2rem;
    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  LightLine: styled.hr`
    height: 0.1rem;

    background-color: ${({ theme }) => theme.colors.bg};
    border-width: 0rem;
  `,
  PriceContainer: styled.article`
    padding: 2.8rem 2.2rem 7.5rem 2.2rem;
  `,
};
