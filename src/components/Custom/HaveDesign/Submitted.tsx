import React from 'react';
import { styled } from 'styled-components';
import { IcFinish } from '../../../assets/icon';

const Submitted = () => {
  return (
    <St.SubmittedWrapper>
      <IcFinish />
      <St.TextWrapper>
        <St.SubmittedText>신청서 접수가 완료 되었어요</St.SubmittedText>
        <St.SubmittedSubtext>2일 이내로 문자로 확정 도안을 전송 드려요</St.SubmittedSubtext>
      </St.TextWrapper>
    </St.SubmittedWrapper>
  );
};

export default Submitted;

const St = {
  SubmittedWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 4.5rem;
    margin-bottom: 5.5rem;
    gap: 1.9rem;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1.2rem;
  `,
  SubmittedText: styled.p`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray9};
  `,
  SubmittedSubtext: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
};
