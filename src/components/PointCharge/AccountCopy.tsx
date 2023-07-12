import { styled } from 'styled-components';

const AccountCopy = () => {
  return (
    <St.TransferAccountContainer>
      <St.AccountBox>
        <St.AccountBoxNum>신한 110 498 876418 (손애진)</St.AccountBoxNum>
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
