import styled from 'styled-components';
import { IcCancelDark } from '../../assets/icon';
import { REFUND_ORDER_POLICY } from '../../assets/data/REFUND_ORDER_POLICY';
import { CustomSheet } from '../../common/BottomSheet';

interface RefundBottomProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RefundBottom = ({ isSheetOpen, setSheetOpen }: RefundBottomProps) => {
  return (
    <CustomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} disableDrag={true}>
      <CustomSheet.Container className='text-bottom-sheet'>
        <CustomSheet.Header disableDrag={false}>
          <St.Title>환불 정책</St.Title>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </CustomSheet.Header>
        <CustomSheet.Content>
          <CustomSheet.Scroller>
            <St.Text>{REFUND_ORDER_POLICY}</St.Text>
          </CustomSheet.Scroller>
        </CustomSheet.Content>
      </CustomSheet.Container>
      <CustomSheet.Backdrop onTap={() => setSheetOpen(false)} />
    </CustomSheet>
  );
};

export default RefundBottom;

const St = {
  Title: styled.h2`
    margin-bottom: 2.8rem;
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray7};
  `,
  Text: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};

    white-space: pre-wrap;
  `,
};
