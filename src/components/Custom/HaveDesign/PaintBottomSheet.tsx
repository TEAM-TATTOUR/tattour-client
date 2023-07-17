import { styled } from 'styled-components';
import Sheet from 'react-modal-sheet';
import PaintBottomHeader from './PaintBottomHeader';
import Canvas from './Canvas';
import { useState } from 'react';

interface PaintBottomProps {
  isBottomOpen: boolean;
  setBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDrawingImageURL: React.Dispatch<React.SetStateAction<string | null>>;
  drawingImageURL: string | null;
}

const PaintBottomSheet = ({ setBottomOpen, setDrawingImageURL }: PaintBottomProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [savedCanvas, setSavedCanvas] = useState<string | null>('');
  const [_canvas, setTempCanvas] = useState<HTMLCanvasElement>();

  const closeBottom = () => setBottomOpen(false);

  const onClickSubmitImage = () => {
    // 캔버스 저장 후 전달
    setDrawingImageURL(_canvas?.toDataURL());
    // setDrawingImageURL(savedCanvas);
    setSubmitted(true);
    setBottomOpen(false);
    // closeBottom;
  };

  return (
    <CustomSheet isOpen={true} onClose={closeBottom} detent='content-height' disableDrag={true}>
      <Sheet.Container>
        <St.BottomSheetWrapper>
          <Sheet.Header disableDrag={true}>
            <PaintBottomHeader />
          </Sheet.Header>
          <Sheet.Content>
            <St.ContentWrapper>
              <Canvas
                setTempCanvas={setTempCanvas}
                submitted={submitted}
                setSavedCanvas={setSavedCanvas}
              />
            </St.ContentWrapper>
          </Sheet.Content>
        </St.BottomSheetWrapper>
        <St.Footer>
          <St.Button type='button' onClick={onClickSubmitImage}>
            레퍼런스로 제출하기
          </St.Button>
        </St.Footer>
      </Sheet.Container>
      <Sheet.Backdrop onTap={closeBottom} />
    </CustomSheet>
  );
};

const St = {
  BottomSheetWrapper: styled.section`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem 2.8rem 2rem;
    width: 100%;
  `,
  ContentWrapper: styled.div`
    height: 100%;
    overflow-y: auto;
  `,
  Footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,
  Button: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
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