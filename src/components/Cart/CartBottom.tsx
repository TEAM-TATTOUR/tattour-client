import styled from 'styled-components';
import PaymentMini from '../Order/PaymentMini';

const CartBottom = ({ orderAmountInfo }: { orderAmountInfo: OrderAmountInfo }) => {
  return (
    <St.CartBottom>
      <St.LightBorder />
      <St.PriceContainer>
        <St.Title>결제 정보</St.Title>
        <PaymentMini orderAmountInfo={orderAmountInfo} />
      </St.PriceContainer>
    </St.CartBottom>
  );
};

const St = {
  PriceContainer: styled.article`
    padding: 2.8rem 2.2rem 3.4rem 2.2rem;
  `,
  Title: styled.h2`
    margin-bottom: 3.2rem;

    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  LightBorder: styled.hr`
    height: 1.3rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.gray0};
  `,

  CartBottom: styled.section`
    position: fixed;
    bottom: 7rem;
    width: 100%;
  `,
};

export default CartBottom;
