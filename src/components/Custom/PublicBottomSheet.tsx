import styled from 'styled-components';
import { IcCancelDark } from '../../assets/icon';
import { CUSTOM_COPYRIGHT_POLICY } from '../../assets/data/CUSTOM_COPYRIGHT_POLICY';
import { CustomSheet } from '../../common/BottomSheet';

interface PublicBottomProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PublicBottomSheet = ({ isSheetOpen, setSheetOpen }: PublicBottomProps) => {
  return (
    <CustomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} disableDrag={true}>
      <CustomSheet.Container className='public-bottom-sheet'>
        <CustomSheet.Header disableDrag={false}>
          <St.Title>저작권 정책</St.Title>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </CustomSheet.Header>
        <CustomSheet.Content>
          <CustomSheet.Scroller>
            <St.Text>{CUSTOM_COPYRIGHT_POLICY}</St.Text>
          </CustomSheet.Scroller>
        </CustomSheet.Content>
      </CustomSheet.Container>
      <CustomSheet.Backdrop onTap={() => setSheetOpen(false)} />
    </CustomSheet>
  );
};

export default PublicBottomSheet;

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
