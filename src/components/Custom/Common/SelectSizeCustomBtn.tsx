import { styled } from 'styled-components';

import { IcApplyCheckLight, IcApplyCheckPink } from '../../../assets/icon';
import img_home from '../../../assets/icon/img_home.svg';
import { forwardRef } from 'react';

interface SelectSizeCustomBtnProps {
  id: string;
  title: string;
  detail: string;
  selectedBtn: string;
  // ref: (element: HTMLButtonElement) => HTMLButtonElement;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Ref = HTMLButtonElement;

const SelectSizeCustomBtn = forwardRef<Ref, SelectSizeCustomBtnProps>(
  ({ id, title, detail, onClick, selectedBtn }, ref) => {
    return (
      <St.SizeBtnWrapper type='button' id={id} onClick={onClick} ref={ref}>
        {selectedBtn === id ? (
          <St.SelectedSizeBtnImgBox>
            <IcApplyCheckPink />
          </St.SelectedSizeBtnImgBox>
        ) : (
          <St.SizeBtnImgBox>
            <IcApplyCheckLight />
          </St.SizeBtnImgBox>
        )}
        <St.SizeBtnTextBox>
          <St.SizeBtnTitle>{title}</St.SizeBtnTitle>
          <St.SizeBtnDetail>{detail}</St.SizeBtnDetail>
        </St.SizeBtnTextBox>
      </St.SizeBtnWrapper>
    );
  },
);

export default SelectSizeCustomBtn;

// 버튼 스타일 확장을 위한 styled component 템플릿
const SizeBtnImgBoxTemplate = styled.div`
  height: 16rem;
  width: 100%;

  background: url(${img_home});

  & > svg {
    padding-top: 0.8rem;
  }

  pointer-events: none;
`;

const St = {
  SizeBtnWrapper: styled.button`
    display: flex;
    flex-direction: column;

    width: 16rem;
    height: 20.9rem;
    padding: 0;

    &.isSelected {
      border: 0.1rem solid ${({ theme }) => theme.colors.pink5};
      border-radius: 0.5rem;
    }
  `,

  SizeBtnImgBox: styled(SizeBtnImgBoxTemplate)`
    border-radius: 0.5rem 0.5rem 0 0;
  `,

  SelectedSizeBtnImgBox: styled(SizeBtnImgBoxTemplate)`
    border-radius: 0.4rem 0.4rem 0 0;
  `,

  SizeBtnTextBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    width: 100%;
    height: 6.5rem;

    border-radius: 0 0 0.5rem 0.5rem;

    background-color: ${({ theme }) => theme.colors.bg};

    pointer-events: none;
  `,

  SizeBtnTitle: styled.span`
    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.gray5};
    ${({ theme }) => theme.fonts.body_medium_16};

    pointer-events: none;
  `,

  SizeBtnDetail: styled.span`
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.detail_medium_12};

    pointer-events: none;
  `,
};
