import { styled } from 'styled-components';

import ic_check from '../../assets/icon/ic_check.svg';
import ic_check_selected from '../../assets/icon/ic_check_selected.svg';
import { IcArrowRightDark } from '../../assets/icon';
import PrePointPolicyBottom from './PrePointPolicyBottom';
import { useState } from 'react';

const TransferPolicy = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <St.TransferPolicyWrapper>
      <St.PolicyAgreeCheckBox type='checkbox' id='pointAgree' />
      <label htmlFor='pointAgree'></label>

      <St.PolicyAgreeTouchArea onClick={() => setSheetOpen(true)}>
        <St.PolicyAgreeText>예비포인트 정책 관련 설명에 동의합니다</St.PolicyAgreeText>
        <IcArrowRightDark />
      </St.PolicyAgreeTouchArea>

      <PrePointPolicyBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
    </St.TransferPolicyWrapper>
  );
};

export default TransferPolicy;

const St = {
  TransferPolicyWrapper: styled.section`
    display: flex;
    align-items: center;
    gap: 1.1rem;

    padding: 3.1rem 4.9rem 4rem 2rem;
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
