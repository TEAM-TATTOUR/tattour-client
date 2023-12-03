import { styled } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import Toast from '../../common/ToastMessage/Toast';

const AccountCopy = () => {
  const ACCOUNT_INFO = '우리은행 1002259752313';

  const [toast, setToast] = useState(false);

  const handleCopyClipboard = () => {
    setToast(true);
  };

  return (
    <St.TransferAccountContainer>
      <CopyToClipboard onCopy={handleCopyClipboard} text={ACCOUNT_INFO}>
        <St.AccountBox>
          <St.AccountBoxNum>{ACCOUNT_INFO}&nbsp;(손*진)</St.AccountBoxNum>
          <St.AccountBoxCopy>복사하기</St.AccountBoxCopy>
        </St.AccountBox>
      </CopyToClipboard>
      {toast && <Toast setToast={setToast} text='계좌번호가 복사 되었습니다.' />}
    </St.TransferAccountContainer>
  );
};

export default AccountCopy;

const St = {
  TransferAccountContainer: styled.article`
    width: 100%;
  `,

  AccountBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    width: 100%;
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
