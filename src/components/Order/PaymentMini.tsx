import styled from 'styled-components';
import { orderAmountDetailResProps } from '../../libs/hooks/order/useGetOrdersheet';

const PaymentMini = ({
  orderAmountDetailRes,
}: {
  orderAmountDetailRes: orderAmountDetailResProps;
}) => {
  const { totalAmount, productAmount, shippingFee } = orderAmountDetailRes;
  return (
    <>
      <St.TextBox>
        <St.MainText>결제 금액</St.MainText>
        <St.PriceBox>
          <St.MainPrice>{totalAmount && totalAmount.toLocaleString()}</St.MainPrice>
          <St.MainText>원</St.MainText>
        </St.PriceBox>
      </St.TextBox>
      <St.TextBox>
        <St.SubText>상품 금액</St.SubText>
        <St.SubText>{productAmount && productAmount.toLocaleString()}원</St.SubText>
      </St.TextBox>
      <St.TextBox>
        <St.SubText>배송비</St.SubText>
        <St.SubText>{shippingFee && shippingFee.toLocaleString()}원</St.SubText>
      </St.TextBox>
    </>
  );
};

export default PaymentMini;

const St = {
  TextBox: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  `,
  PriceBox: styled.div`
    display: flex;
    align-items: center;
  `,
  MainText: styled.span`
    display: flex;
    align-items: center;

    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};

    & > span:nth-child(1) {
      ${({ theme }) => theme.fonts.title_semibold_18};
    }
    & > span:nth-child(2) {
      margin-left: 0.4rem;
      ${({ theme }) => theme.fonts.body_medium_16};
    }
  `,

  MainPrice: styled.span`
    margin: 0rem 0.4rem 0.5rem 0rem;
    ${({ theme }) => theme.fonts.title_extrabold_24};
    color: ${({ theme }) => theme.colors.pink5};
  `,
  SubText: styled.p`
    margin-top: 0.8rem;

    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray2};
  `,
  LightLine: styled.hr`
    height: 0.1rem;

    background-color: ${({ theme }) => theme.colors.gray0};
    border-width: 0rem;
  `,
  PointContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    padding: 3.4rem 2.2rem 3.6rem 2.2rem;
  `,
  PointText: styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  `,
  ChargeBtn: styled.button`
    padding: 1.2rem 1.8rem;
    width: 9.1rem;
    height: 4.5rem;
    margin-left: 24.2rem;

    background-color: ${({ theme }) => theme.colors.gray7};
    border-radius: 0.6rem;
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.white};
  `,
};
