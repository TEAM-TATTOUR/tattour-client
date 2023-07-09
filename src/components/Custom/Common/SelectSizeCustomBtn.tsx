import { styled } from 'styled-components';

import { IcApplyCheckLight } from '../../../assets/icon';
import img_home from '../../../assets/icon/img_home.svg';

interface SelectSizeCustomBtnProps {
  title: stirng;
  detail: string;
}

const SelectSizeCustomBtn = ({ title, detail }: SelectSizeCustomBtnProps) => {
  return (
    <St.SizeBtn type='button'>
      <St.SizeBtnImgBox>
        <IcApplyCheckLight />
      </St.SizeBtnImgBox>
      <St.SizeBtnTextBox>
        <St.SizeBtnTitle>{title}</St.SizeBtnTitle>
        <St.SizeBtnDetail>{detail}</St.SizeBtnDetail>
      </St.SizeBtnTextBox>
    </St.SizeBtn>
  );
};

export default SelectSizeCustomBtn;

const St = {
  SizeBtn: styled.button`
    display: flex;
    flex-direction: column;

    width: 16rem;
    height: 20.9rem;
    padding: 0;
  `,
  SizeBtnImgBox: styled.div`
    height: 16rem;
    width: 100%;

    border-radius: 0.5rem 0.5rem 0 0;

    /* background-color: ${({ theme }) => theme.colors.gray1}; */
    background: url(${img_home});

    & > svg {
      padding-top: 0.8rem;
    }
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
  `,

  SizeBtnTitle: styled.span`
    margin-top: 1rem;

    color: ${({ theme }) => theme.colors.gray5};
    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  SizeBtnDetail: styled.span`
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.detail_medium_12};
  `,
};
