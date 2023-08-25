import { styled } from 'styled-components';
import { IcArrowRightDark } from '../../../assets/icon';
import SelectCustomPolicyBottom from './SelectCustomPolicyBottom';
import { useState } from 'react';

const SelectCustomPolicy = () => {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <St.SelectCustomPolicyWrapper>
      <St.PolicyAgreeTouchArea onClick={() => setSheetOpen(true)}>
        <St.PolicyAgreeMainText>커스텀 도안 환불 정책에 동의합니다</St.PolicyAgreeMainText>
        <IcArrowRightDark />
      </St.PolicyAgreeTouchArea>
      <St.PolicyAgreeSubTextBox>
        <St.PolicyAgreeSubText>
          다음 페이지로 넘어가 신청서 작성을 시작하면 커스텀
        </St.PolicyAgreeSubText>
        <St.PolicyAgreeSubText>도안 정책에 동의하는 것으로 간주합니다</St.PolicyAgreeSubText>
      </St.PolicyAgreeSubTextBox>
      <SelectCustomPolicyBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
    </St.SelectCustomPolicyWrapper>
  );
};

export default SelectCustomPolicy;

const St = {
  SelectCustomPolicyWrapper: styled.section`
    position: sticky;
    bottom: 7rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    height: 6.7rem;
    padding-left: 2.4rem;
  `,

  PolicyAgreeTouchArea: styled.article`
    display: flex;
    gap: 0.3rem;

    cursor: pointer;
  `,

  PolicyAgreeMainText: styled.p`
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  PolicyAgreeSubTextBox: styled.div`
    display: flex;
    flex-direction: column;
  `,

  PolicyAgreeSubText: styled.p`
    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
