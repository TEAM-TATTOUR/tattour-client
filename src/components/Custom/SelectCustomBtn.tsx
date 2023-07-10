import { styled } from 'styled-components';
import { IcApplyCheckGray, IcApplyCheckPink } from '../../assets/icon';
import { forwardRef } from 'react';

interface SelectCustomBtnProps {
  id: string;
  title: string;
  detail: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected: boolean;
}

export type Ref = HTMLButtonElement;

const SelectCustomBtn = forwardRef<Ref, SelectCustomBtnProps>(
  ({ id, title, detail, onClick, isSelected }, ref) => {
    return (
      <St.SelectBtnContent type='button' id={id} onClick={onClick} ref={ref}>
        {isSelected ? <IcApplyCheckPink /> : <IcApplyCheckGray />}
        <St.SelectBtnTitle $case={id}>{title}</St.SelectBtnTitle>
        <St.SelectBtnDetail $case={id}>{detail}</St.SelectBtnDetail>
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

  SelectBtnTitle: styled.h3<{ $case: string }>`
    width: ${({ $case }) => ($case === 'haveDesign' ? 10 : 8.6)}rem;

    color: ${({ theme }) => theme.colors.gray7};
    ${({ theme }) => theme.fonts.title_semibold_16};

    text-align: center;

    white-space: pre-line;

    pointer-events: none;
  `,

  SelectBtnDetail: styled.p<{ $case: string }>`
    width: ${({ $case }) => ($case === 'haveDesign' ? 11.6 : 10.6)}rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.detail_medium_12};

    text-align: center;

    white-space: pre-line;

    pointer-events: none;
  `,
};
