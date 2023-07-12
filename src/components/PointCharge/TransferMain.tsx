import { styled } from 'styled-components';
import AccountCopy from './AccountCopy';

const TransferMain = () => {
  return (
    <>
      <St.TransferMainWrapper>
        <St.TransferInfoContainer>
          <St.InfoMsgHeader>
            <St.InfoMsgTitle>아래 계좌로 금액을 송금해주세요</St.InfoMsgTitle>
            <St.InfoMsgDetail>
              아래 계좌로 해당 금액을 입금하면 포인트가 충전 됩니다.
            </St.InfoMsgDetail>
          </St.InfoMsgHeader>
          <St.InfoPriceMain>
            <St.InfoPriceLeft>총 충전 금액</St.InfoPriceLeft>
            <St.InfoPriceRight>
              <St.RightPrice>3000</St.RightPrice>
              <St.RightUnit>원</St.RightUnit>
            </St.InfoPriceRight>
          </St.InfoPriceMain>
        </St.TransferInfoContainer>
        <AccountCopy />
      </St.TransferMainWrapper>

      <St.TransferSectionDivide />
    </>
  );
};

export default TransferMain;

const St = {
  TransferMainWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 5.6rem 1.8rem 0 2.2rem;
  `,

  TransferInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
  `,

  InfoMsgHeader: styled.header`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
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

    padding: 1.7rem 0 2.2rem 0;
    margin: 1.7rem 0 1.5rem 0;
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

  TransferSectionDivide: styled.hr`
    width: 100%;
    height: 1.3rem;
    margin-top: 18.8rem;

    border: none;

    background-color: ${({ theme }) => theme.colors.bg};
  `,
};
