import { styled } from 'styled-components';
import Sheet from 'react-modal-sheet';
import { IcCancelDark } from '../../assets/icon';
import { PREPOINT_POLICY } from '../../assets/data/PREPOINT_POLICY';

interface PrePointPolicyProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrePointPolicyBottom = ({ isSheetOpen, setSheetOpen }: PrePointPolicyProps) => {
  return (
    <CustomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} disableDrag={true}>
      <Sheet.Container>
        <Sheet.Header disableDrag={false}>
          <St.SheetTitle>예비포인트 정책</St.SheetTitle>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller>
            <St.SheetText>{PREPOINT_POLICY}</St.SheetText>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setSheetOpen(false)} />
    </CustomSheet>
  );
};

export default PrePointPolicyBottom;

const St = {
  SheetTitle: styled.h2`
    margin-bottom: 2.8rem;

    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray7};
  `,
  SheetText: styled.p`
    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.gray3};

    overflow: auto;
    white-space: pre-wrap;
  `,
};

const CustomSheet = styled(Sheet)`
  display: flex;
  justify-content: center;

  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    left: initial !important;
    max-width: 43rem;
    height: calc(90% - env(safe-area-inset-top) - 34px) !important;
    padding: 2.5rem 2.4rem 0rem 2.4rem;

    border-radius: 1rem 1rem 0rem 0rem !important;
  }

  // .react-modal-sheet-header
  .react-modal-sheet-container > div {
    display: flex;
    justify-content: space-between !important;
  }

  .react-modal-sheet-scroller {
    padding-bottom: 6rem;
  }

  .react-modal-sheet-drag-indicator {
    display: none;
  }
`;
