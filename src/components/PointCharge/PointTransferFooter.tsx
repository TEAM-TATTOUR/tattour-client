import { styled } from 'styled-components';
import CheckModal from '../../common/Modal/CheckModal/CheckModal';
import { useState } from 'react';

const PointTransferFooter = ({
  isActiveNext,
  redirectURL,
}: {
  isActiveNext: boolean;
  redirectURL: string;
}) => {
  const [modalOn, setModalOn] = useState(false);

  const handleClickFooter = () => {
    //여기 수정 필요 -> 포인트 충전으로 들어오기 전 url로 보내기
    isActiveNext && setModalOn(true);
  };

  return (
    <>
      <St.TransferFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
        <St.FooterText>송금했어요</St.FooterText>
      </St.TransferFooter>
      {modalOn && <CheckModal setModalOn={setModalOn} redirectURL={redirectURL} />}
    </>
  );
};

export default PointTransferFooter;

const St = {
  TransferFooter: styled.footer<{ $isActiveNext: boolean }>`
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
    background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
