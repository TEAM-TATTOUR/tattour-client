import styled from 'styled-components';
import PaymentMini from './PaymentMini';
import { orderAmountDetailResProps } from '../../libs/hooks/order/useGetOrdersheet';
import { useEffect } from 'react';

const PaymentInfo = ({
  orderAmountDetailRes,
}: {
  orderAmountDetailRes: orderAmountDetailResProps;
}) => {
  useEffect(() => {
    console.log('PaymentInfo 리렌더링');
  });
  return (
    <div>
      <St.PriceContainer>
        <St.Title>결제 정보</St.Title>
        <PaymentMini orderAmountDetailRes={orderAmountDetailRes} />
      </St.PriceContainer>
    </div>
  );
};

export default PaymentInfo;

const St = {
  PriceContainer: styled.article`
    padding: 2.8rem 2.2rem 3.4rem 2.2rem;
  `,
  Title: styled.h2`
    margin-bottom: 3.2rem;

    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
};
