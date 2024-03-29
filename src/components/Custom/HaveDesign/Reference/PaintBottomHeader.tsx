import { styled } from 'styled-components';
import { IcCancelDark } from '../../../../assets/icon';

interface PaintBottomHeaderProps {
  onClose: () => void;
}

const PaintBottomHeader = ({ onClose }: PaintBottomHeaderProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <St.HeaderWrapper>
      <St.PaintTitle>간단 스케치</St.PaintTitle>
      <St.SheetClose>
        <IcCancelDark onClick={handleClose} />
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
