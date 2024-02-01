import styled from 'styled-components';

const OrderDepositInfo = () => {
  return (
    <St.OrderDepositInfoHeader>
      <St.DepositInfoTitle>아래 계좌로 금액을 송금해주세요</St.DepositInfoTitle>
      <St.DepositInfoDetail>
        정확하게 송금하지 않을 시 추후에 주문이 취소될 수 있어요
      </St.DepositInfoDetail>
    </St.OrderDepositInfoHeader>
  );
};

export default OrderDepositInfo;

const St = {
  OrderDepositInfoHeader: styled.header`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;
    padding-top: 6.3rem;
  `,

  DepositInfoTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  DepositInfoDetail: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
