import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { IcCancelDark } from '../../assets/icon';

interface DetailBottomProps {
  isSheetOpen: boolean;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailBottom = ({ isSheetOpen, setSheetOpen }: DetailBottomProps) => {
  return (
    <CustomSheet isOpen={isSheetOpen} onClose={() => setSheetOpen(false)} disableDrag={true}>
      <Sheet.Container>
        <Sheet.Header disableDrag={false}>
          <St.Title>제목입니다</St.Title>
          <IcCancelDark onClick={() => setSheetOpen(false)} />
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller>
            <St.Text></St.Text>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onClick={() => setSheetOpen(false)} />
    </CustomSheet>
  );
};

export default DetailBottom;

const St = {
  Title: styled.h2`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray7};
  `,
  Text: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
};

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    padding: 2.5rem 2.4rem 4.2rem 2.4rem;
    border-radius: 1rem !important;
  }
  // .react-modal-sheet-header
  .react-modal-sheet-container > div {
    display: flex;
    justify-content: space-between !important;
    margin-bottom: 2.8rem;
  }
  .react-modal-sheet-drag-indicator {
    display: none;
  }
`;
