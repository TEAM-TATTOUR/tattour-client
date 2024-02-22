import { styled } from 'styled-components';
import { IcCancelDark } from '../../../../assets/icon';
import { REFUND_CUSTOM_POLICY } from '../../../../assets/data/REFUND_CUSTOM_POLICY';
import { CustomSheet } from '../../../../common/BottomSheet';
interface PrePointPolicyProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectCustomPolicyBottom = ({ isSheetOpen, setSheetOpen }: PrePointPolicyProps) => {
  return (
    <CustomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} disableDrag={true}>
      <CustomSheet.Container className='text-bottom-sheet'>
        <CustomSheet.Header disableDrag={false}>
          <St.SheetTitle>커스텀 도안 환불 정책</St.SheetTitle>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </CustomSheet.Header>
        <CustomSheet.Content>
          <CustomSheet.Scroller>
            <St.SheetText> {REFUND_CUSTOM_POLICY}</St.SheetText>
          </CustomSheet.Scroller>
        </CustomSheet.Content>
      </CustomSheet.Container>
      <CustomSheet.Backdrop onTap={() => setSheetOpen(false)} />
    </CustomSheet>
  );
};

export default SelectCustomPolicyBottom;

const St = {
  SheetTitle: styled.h2`
    margin-bottom: 2.8rem;

    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray7};
  `,
  SheetText: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};

    overflow: auto;
    white-space: pre-wrap;
  `,
};
