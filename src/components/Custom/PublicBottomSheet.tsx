import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { IcCancelDark } from '../../assets/icon';
import { CUSTOM_COPYRIGHT_POLICY } from '../../assets/data/CUSTOM_COPYRIGHT_POLICY';

interface PublicBottomProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PublicBottomSheet = ({ isSheetOpen, setSheetOpen }: PublicBottomProps) => {
  return (
    <CustomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} disableDrag={true}>
      <Sheet.Container>
        <Sheet.Header disableDrag={false}>
          <St.Title>저작권 정책</St.Title>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller>
            <St.Text>{CUSTOM_COPYRIGHT_POLICY}</St.Text>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onTap={() => setSheetOpen(false)} />
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

const CustomSheet = styled(Sheet)`
  display: flex;
  justify-content: center;

  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    padding: 2.5rem 2.4rem 0rem 2.4rem;
    // 모달 높이 낮추기
    height: calc(100% - 10.6rem) !important;
    left: initial !important;
    max-width: 43rem;

    border-radius: 1rem 1rem 0rem 0rem !important;
  }

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
