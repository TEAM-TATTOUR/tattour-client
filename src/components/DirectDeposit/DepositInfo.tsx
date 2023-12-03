import { styled } from 'styled-components';

interface DepositInfoProps {
  chargeAmount: number;
  children: React.ReactNode;
}

const DepositInfo = ({ chargeAmount, children }: DepositInfoProps) => {
  return (
    <St.TransferMainWrapper>
      <St.TransferInfoContainer>
        {/* <St.InfoMsgHeader>
          <St.InfoMsgTitle>아래 계좌로 금액을 송금해주세요</St.InfoMsgTitle>
          <St.InfoMsgDetail>
            정확하게 송금하지 않을 시 추후에 주문이 취소될 수 있어요
          </St.InfoMsgDetail>
        </St.InfoMsgHeader> */}
        {children}
        <St.InfoPriceMain>
          <St.InfoPriceLeft>결제 금액</St.InfoPriceLeft>
          <St.InfoPriceRight>
            <St.RightPrice>{chargeAmount.toLocaleString()}</St.RightPrice>
            <St.RightUnit>원</St.RightUnit>
          </St.InfoPriceRight>
        </St.InfoPriceMain>
      </St.TransferInfoContainer>
    </St.TransferMainWrapper>
  );
};

export default DepositInfo;

const St = {
  TransferMainWrapper: styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 0.2rem;
  `,

  TransferInfoContainer: styled.article`
    display: flex;
    flex-direction: column;

    padding-top: 6rem;
  `,

  InfoMsgHeader: styled.header`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;
  `,

  InfoMsgTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  InfoMsgDetail: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  InfoPriceMain: styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 3.4rem 0 rem 0;
  `,

  InfoPriceLeft: styled.p`
    width: fit-content;

    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  InfoPriceRight: styled.p`
    display: flex;
    align-items: center;
    gap: 0.4rem;
  `,

  RightPrice: styled.span`
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_24};
  `,

  RightUnit: styled.span`
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.body_medium_16};
  `,
};
