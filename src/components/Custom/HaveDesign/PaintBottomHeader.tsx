import { styled } from 'styled-components';
import { IcCancelDark } from '../../assets/icon';

const PaintBottomHeader = () => {
  return (
    <St.HeaderWrapper>
      <St.PaintTitle>대충 그려보기</St.PaintTitle>
      <St.SheetClose>
        <IcCancelDark />
      </St.SheetClose>
    </St.HeaderWrapper>
  );
};

const St = {
  HeaderWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  PaintTitle: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  SheetClose: styled.div`
    color: ${({ theme }) => theme.colors.gray2};
  `,
};

export default PaintBottomHeader;
