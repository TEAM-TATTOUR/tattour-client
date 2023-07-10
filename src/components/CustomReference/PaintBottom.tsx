import { styled } from 'styled-components';
import Sheet from 'react-modal-sheet';

interface PaintBottomProps {
  isBottomOpen: boolean;
  setBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaintBottom = ({ isBottomOpen, setBottomOpen }: PaintBottomProps) => {
  const closeBottom = () => setBottomOpen(false);
  const openBottom = isBottomOpen;

  return (
    <CustomSheet
      isOpen={openBottom}
      onClose={closeBottom}
      detent='content-height'
      disableDrag={true}
    >
      <Sheet.Container>
        <Sheet.Header disableDrag={true} />
        <Sheet.Content>
          <St.Footer>
            <St.Button type='button'>레퍼런스로 제출하기</St.Button>
          </St.Footer>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop onClick={closeBottom} />
    </CustomSheet>
  );
};

const St = {
  Footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
    margin-top: 4rem;

    background-color: ${({ theme }) => theme.colors.gray3};
  `,
  Button: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.white};
    font: ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    border-radius: 1rem !important;
  }
  .react-modal-sheet-header {
    height: 1.6rem !important;
  }
  .react-modal-sheet-drag-indicator {
    display: none;
  }
`;

export default PaintBottom;
