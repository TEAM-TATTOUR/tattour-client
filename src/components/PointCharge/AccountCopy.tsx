import { styled } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const AccountCopy = () => {
  const ACCOUNT_INFO = '우리은행 1002259752313';

  const handleCopyClipboard = () => {
    alert('계좌번호가 복사되었습니다.');
  };

  return (
    <St.TransferAccountContainer>
      <CopyToClipboard onCopy={handleCopyClipboard} text={ACCOUNT_INFO}>
        <St.AccountBox>
          <St.AccountBoxNum>{ACCOUNT_INFO}&nbsp;(손*진)</St.AccountBoxNum>
          <St.AccountBoxCopy>복사하기</St.AccountBoxCopy>
        </St.AccountBox>
      </CopyToClipboard>
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

    pointer-events: none;
  `,

  AccountBoxCopy: styled.p`
    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_underline_medium_14};

    pointer-events: none;
  `,
};
