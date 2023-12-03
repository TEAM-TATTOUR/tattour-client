import { styled } from 'styled-components';

interface DepositInfoProps {
  depositAmount: number;
  children: React.ReactNode;
}

const DepositInfo = ({ depositAmount, children }: DepositInfoProps) => {
  return (
    <St.TransferMainWrapper>
      <St.TransferInfoContainer>
        {children}
        <St.InfoPriceMain>
          <St.InfoPriceLeft>결제 금액</St.InfoPriceLeft>
          <St.InfoPriceRight>
            <St.RightPrice>{depositAmount.toLocaleString()}</St.RightPrice>
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
  `,

  InfoPriceMain: styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 3.4rem 0 3.7rem 0;
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
