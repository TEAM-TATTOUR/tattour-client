import styled from 'styled-components';
import PaymentMini from './PaymentMini';
import {
  getOrderAmountResProps,
  getUserOrderPointResProps,
} from '../../libs/hooks/order/useGetOrdersheet';

const PaymentInfo = ({
  getOrderAmountRes,
  getUserOrderPointRes,
}: {
  getOrderAmountRes: getOrderAmountResProps;
  getUserOrderPointRes: getUserOrderPointResProps;
}) => {
  const { totalAmount, productAmount, shippingFee } = getOrderAmountRes;
  const { userPoint, resultPoint } = getUserOrderPointRes;

  return (
    <div>
      <St.PriceContainer>
        <St.Title>결제 정보</St.Title>
        <PaymentMini
          finalPrice={totalAmount}
          itemPrice={productAmount}
          deliveryPrice={shippingFee}
        />
      </St.PriceContainer>
      <St.LightLine />
      <St.PointContainer>
        <St.PointText>
          <St.MainText>보유 포인트</St.MainText>
          <St.MainText>
            <span>{userPoint && userPoint.toLocaleString()}</span>
            <span>P</span>
          </St.MainText>
        </St.PointText>
        <St.PointText>
          <St.MainText>남는 포인트</St.MainText>
          <St.MainText>
            <span>{resultPoint && resultPoint.toLocaleString()}</span>
            <span>P</span>
          </St.MainText>
        </St.PointText>
      </St.PointContainer>
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
