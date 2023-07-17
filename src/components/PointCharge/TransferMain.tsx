import { styled } from 'styled-components';
import AccountCopy from './AccountCopy';
import TransferPolicy from './TransferPolicy';

const TransferMain = () => {
  const chargedCost = 3000;

  return (
    <St.TransferMainWrapper>
      <St.TransferInfoContainer>
        <St.InfoMsgHeader>
          <St.InfoMsgTitle>아래 계좌로 금액을 송금해주세요</St.InfoMsgTitle>
          <St.InfoMsgDetail>
            정확하게 송금하지 않을 시 추후에 주문이 취소될 수 있어요
          </St.InfoMsgDetail>
        </St.InfoMsgHeader>
        <St.InfoPriceMain>
          <St.InfoPriceLeft>충전 금액</St.InfoPriceLeft>
          <St.InfoPriceRight>
            <St.RightPrice>{chargedCost.toLocaleString()}</St.RightPrice>
            <St.RightUnit>원</St.RightUnit>
          </St.InfoPriceRight>
        </St.InfoPriceMain>
        <AccountCopy />
      </St.TransferInfoContainer>
    </St.TransferMainWrapper>
  );
};

export default TransferMain;

const St = {
  TransferMainWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: calc(100dvh - 21.6rem);
  `,

  TransferInfoContainer: styled.article`
    display: flex;
    flex-direction: column;

    padding-top: 5.6rem;
  `,

  InfoMsgHeader: styled.header`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    width: 100%;
    padding-left: 2.2rem;
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

    margin: 3.4rem 0 3.7rem 0;
    padding: 0 2.2rem 0 2.2rem;
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
