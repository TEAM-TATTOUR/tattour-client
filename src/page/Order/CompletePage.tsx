import styled from 'styled-components';
import Result from '../../common/Result';
import PageLayout from '../../components/PageLayout';
import Header from '../../components/Header';
import ProductInfo from '../../components/Order/ProductInfo';
import PaymentMini from '../../components/Order/PaymentMini';
import CompleteFooter from '../../components/Complete/CompleteFooter';
import { useLocation } from 'react-router-dom';
import {
  orderSheetStickersResProps,
  orderAmountDetailResProps,
} from '../../libs/hooks/order/useGetOrdersheet';

const CompletePage = () => {
  const renderCompletePageHeader = () => {
    return <Header title='주문하기' />;
  };

  const location = useLocation();
  const { orderSheetStickersRes, orderAmountDetailRes } = location.state as {
    orderSheetStickersRes: orderSheetStickersResProps[];
    orderAmountDetailRes: orderAmountDetailResProps;
  };

  return (
    <PageLayout renderHeader={renderCompletePageHeader} footer={<CompleteFooter />}>
      <St.Container>
        <Result
          mainText={'결제가 완료되었어요'}
          description={'7일 내에 배송이 시작되며, 문자로 안내드려요'}
        />
        <St.Line />
        <St.Title>주문 정보</St.Title>
        {orderSheetStickersRes.map((item) => {
          return <ProductInfo key={item.name} orderSheetSticker={item} />;
        })}
        <St.LightLine />
        <St.PriceContainer>
          <PaymentMini orderAmountDetailRes={orderAmountDetailRes} />
        </St.PriceContainer>
      </St.Container>
    </PageLayout>
  );
};

export default CompletePage;

const St = {
  Container: styled.section`
    height: calc(100vh - 12.6rem);
  `,
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
    padding: 2.8rem 2.2rem 14.5rem 2.2rem;
  `,
};
