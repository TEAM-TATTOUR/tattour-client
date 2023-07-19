import styled from 'styled-components';
import Result from '../../common/Result';
import PageLayout from '../../components/PageLayout';
import Header from '../../components/Header';
import ProductInfo from '../../components/Order/ProductInfo';
import PaymentMini from '../../components/Order/PaymentMini';
import CompleteFooter from '../../components/Complete/CompleteFooter';
import { useLocation } from 'react-router-dom';

const CompletePage = () => {
  const renderCompletePageHeader = () => {
    return <Header title='주문하기' />;
  };

  const location = useLocation();
  const { getOrderSheetStickerInfo, getOrderAmountRes } = location.state;

  console.log(location);

  return (
    <PageLayout renderHeader={renderCompletePageHeader} footer={<CompleteFooter />}>
      <Result
        mainText={'결제가 완료되었어요'}
        description={'3일 내에 배송이 시작되며, 문자로 안내드려요'}
      />
      <St.Line />
      <St.Title>주문 정보</St.Title>
      <ProductInfo getOrderSheetStickerInfo={getOrderSheetStickerInfo} />
      <St.LightLine />
      <St.PriceContainer>
        <PaymentMini getOrderAmountRes={getOrderAmountRes} />
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
