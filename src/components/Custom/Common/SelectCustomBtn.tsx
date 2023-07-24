import { styled } from 'styled-components';
import { IcApplyCheckGray, IcApplyCheckPink } from '../../../assets/icon';
import { forwardRef } from 'react';

interface SelectCustomBtnProps {
  id: string;
  firstTitle: string;
  secondTitle: string;
  firstDetail: string;
  secondDetail: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected: boolean;
}

export type Ref = HTMLButtonElement;

const SelectCustomBtn = forwardRef<Ref, SelectCustomBtnProps>(
  ({ id, firstTitle, secondTitle, firstDetail, secondDetail, onClick, isSelected }, ref) => {
    return (
      <St.SelectBtnContent type='button' id={id} onClick={onClick} ref={ref}>
        {isSelected ? <IcApplyCheckPink /> : <IcApplyCheckGray />}
        <St.SelectBtnTitleBox>
          <St.SelectBtnTitle>{firstTitle}</St.SelectBtnTitle>
          <St.SelectBtnTitle>{secondTitle}</St.SelectBtnTitle>
        </St.SelectBtnTitleBox>
        <St.SelectBtnDetailBox>
          <St.SelectBtnDetail $case={id}>{firstDetail}</St.SelectBtnDetail>
          <St.SelectBtnDetail $case={id}>{secondDetail}</St.SelectBtnDetail>
        </St.SelectBtnDetailBox>
      </St.SelectBtnContent>
    );
  },
);

export default SelectCustomBtn;

const St = {
  SelectBtnContent: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    width: 16rem;
    height: 16.8rem;
    padding: 0.8rem 0 3rem;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.bg};

    &.isClicked {
      border: 0.1rem solid ${({ theme }) => theme.colors.pink5};
    }
  `,

  SelectBtnTitleBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.08;

    pointer-events: none;
  `,

  SelectBtnTitle: styled.h3`
    width: 8.6rem;

    color: ${({ theme }) => theme.colors.gray5};
    ${({ theme }) => theme.fonts.title_semibold_16};

    text-align: center;

    white-space: pre-line;
    word-break: keep-all;

    pointer-events: none;
  `,

  SelectBtnDetailBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.56;

    pointer-events: none;
  `,

  SelectBtnDetail: styled.p<{ $case: string }>`
    width: ${({ $case }) => ($case === 'haveDesign' ? 12.6 : 9.7)}rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.detail_medium_12};

    text-align: center;

    white-space: pre-line;
    word-break: keep-all;

    pointer-events: none;
  `,
};
