import styled from 'styled-components';

interface DirectDepositFooterProps {
  isActiveNext: boolean;
  handleClickFooter: () => void;
}

const DirectDepositFooter = ({ isActiveNext, handleClickFooter }: DirectDepositFooterProps) => {
  return (
    <St.DirectDepositFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
      <St.FooterText>송금했어요</St.FooterText>
    </St.DirectDepositFooter>
  );
};

export default DirectDepositFooter;

const St = {
  DirectDepositFooter: styled.footer<{ $isActiveNext: boolean }>`
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    height: 7rem;

    background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
