import { styled } from 'styled-components';
import Sheet from 'react-modal-sheet';
import PaintBottomHeader from './PaintBottomHeader';

interface PaintBottomProps {
  isBottomOpen: boolean;
  setBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaintBottomSheet = ({ isBottomOpen, setBottomOpen }: PaintBottomProps) => {
  const closeBottom = () => setBottomOpen(false);
  const openBottom = isBottomOpen;

  return (
    <CustomSheet isOpen={true} onClose={closeBottom} detent='content-height' disableDrag={true}>
      <Sheet.Container>
        <St.BottomSheetWrapper>
          <Sheet.Header disableDrag={true}>
            <PaintBottomHeader />
          </Sheet.Header>
          <Sheet.Content>
            <St.CleanButton>전체 삭제하기</St.CleanButton>
          </Sheet.Content>
        </St.BottomSheetWrapper>
        <St.Footer>
          <St.Button type='button' onClick={closeBottom}>
            레퍼런스로 제출하기
          </St.Button>
        </St.Footer>
      </Sheet.Container>
      <Sheet.Backdrop onClick={closeBottom} />
    </CustomSheet>
  );
};

const St = {
  BottomSheetWrapper: styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem 2.8rem 2rem;
  `,
  CleanButton: styled.button`
    width: 7.6rem;
    height: 1.8rem;
    padding: 0;

    margin: 2.4rem 0 2rem 0;
    color: ${({ theme }) => theme.colors.gray2};
    font: ${({ theme }) => theme.fonts.body_underline_medium_14};
  `,
  Footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
    margin-top: 4rem;

    background-color: ${({ theme }) => theme.colors.gray9};
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

export default PaintBottomSheet;
