import { styled } from 'styled-components';

import { IcApplyCheckLight, IcApplyCheckPink } from '../../../../assets/icon';
import { forwardRef } from 'react';

interface CustomSelectSizeBtnProps {
  id: string;
  idx: number;
  title: string;
  detail: string;
  isSelected: boolean;
  imgURL: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type Ref = HTMLButtonElement;

const CustomSelectSizeBtn = forwardRef<Ref, CustomSelectSizeBtnProps>(
  ({ id, title, detail, onClick, isSelected, imgURL }, ref) => {
    return (
      <St.SizeBtnWrapper type='button' id={id} onClick={onClick} ref={ref}>
        {isSelected ? (
          <St.SelectedSizeBtnImgBox $imgURL={imgURL}>
            <IcApplyCheckPink />
          </St.SelectedSizeBtnImgBox>
        ) : (
          <St.SizeBtnImgBox $imgURL={imgURL}>
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

export default CustomSelectSizeBtn;

// 버튼 스타일 확장을 위한 styled component 템플릿
const SizeBtnImgBoxTemplate = styled.div<{ $imgURL: string }>`
  aspect-ratio: 160 / 144;
  width: 100%;

  background: ${({ $imgURL }) => `url(${$imgURL})`};
  background-size: cover;

  & > svg {
    padding-top: 0.8rem;
  }

  pointer-events: none;
`;

const St = {
  SizeBtnWrapper: styled.button`
    display: flex;
    flex-direction: column;

    /* width: 16rem; */
    width: 100%;
    aspect-ratio: 160 / 209;
    /* height: 20.9rem; */
    /* height: 100%; */
    padding: 0;

    &.isSelected {
      box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.pink5};
      /* border: 0.1rem solid ${({ theme }) => theme.colors.pink5}; */
      border-radius: 0.5rem;
    }
  `,

  SizeBtnImgBox: styled(SizeBtnImgBoxTemplate)<{ $imgURL: string }>`
    border-radius: 0.5rem 0.5rem 0 0;

    /* background: ${({ $imgURL }) => `url(${$imgURL})`}; */
  `,

  SelectedSizeBtnImgBox: styled(SizeBtnImgBoxTemplate)`
    border-radius: 0.5rem 0.5rem 0 0;
  `,

  SizeBtnTextBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    width: 100%;
    aspect-ratio: 160 / 65;

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
