import { styled } from 'styled-components';

const AccountCopy = () => {
  const ACCOUNT_INFO = '우리은행 1002259752313 (손*진)';

  return (
    <St.TransferAccountContainer>
      <St.AccountBox>
        <St.AccountBoxNum>{ACCOUNT_INFO}</St.AccountBoxNum>
        <St.AccountBoxCopy>복사하기</St.AccountBoxCopy>
      </St.AccountBox>
    </St.TransferAccountContainer>
  );
};

export default AccountCopy;

const St = {
  TransferAccountContainer: styled.article``,

  AccountBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    width: 33.5rem;
    height: 12.2rem;

    background-color: ${({ theme }) => theme.colors.bg};

    border-radius: 0.6rem;
  `,

  AccountBoxNum: styled.p`
    color: ${({ theme }) => theme.colors.gray7};
    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  AccountBoxCopy: styled.p`
    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_underline_medium_14};
  `,
};
