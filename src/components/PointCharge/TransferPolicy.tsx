import { styled } from 'styled-components';

import ic_check from '../../assets/icon/ic_check.svg';
import ic_check_selected from '../../assets/icon/ic_check_selected.svg';
import { IcArrowRightGray4 } from '../../assets/icon';
import PrePointPolicyBottom from './PrePointPolicyBottom';
import { useState } from 'react';

const TransferPolicy = ({
  setIsActiveNext,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const handleClickAgreeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setIsActiveNext(true) : setIsActiveNext(false);
  };

  return (
    <St.TransferPolicyWrapper>
      <St.PolicyAgreeCheckBox type='checkbox' id='pointAgree' onChange={handleClickAgreeCheckBox} />
      <label htmlFor='pointAgree'></label>

      <St.PolicyAgreeTouchArea onClick={() => setSheetOpen(true)}>
        <St.PolicyAgreeText>예비포인트 정책 관련 설명에 동의합니다</St.PolicyAgreeText>
        <IcArrowRightGray4 />
      </St.PolicyAgreeTouchArea>

      <PrePointPolicyBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
    </St.TransferPolicyWrapper>
  );
};

export default TransferPolicy;

const St = {
  TransferPolicyWrapper: styled.section`
    position: sticky;
    bottom: 7rem;

    display: flex;
    gap: 1.1rem;
    padding: 2.6rem 0 3.1rem 2rem;
  `,

  PolicyAgreeCheckBox: styled.input`
    display: none;

    & + label {
      display: block;

      width: 2.4rem;
      height: 2.4rem;

      background: url(${ic_check});
    }

    &:checked + label {
      display: block;

      width: 2.4rem;
      height: 2.4rem;

      background: url(${ic_check_selected});
    }
  `,

  PolicyAgreeTouchArea: styled.article`
    display: flex;
    gap: 0.3rem;
  `,

  PolicyAgreeText: styled.p`
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.body_medium_16};
  `,
};
