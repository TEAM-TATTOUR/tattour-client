import { styled } from 'styled-components';

const PointTransferFooter = () => {
  return (
    <St.TransferFooter>
      <St.FooterText>송금했어요</St.FooterText>
    </St.TransferFooter>
  );
};

export default PointTransferFooter;

const St = {
  TransferFooter: styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
    background-color: black;
    /* background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3}; */
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
