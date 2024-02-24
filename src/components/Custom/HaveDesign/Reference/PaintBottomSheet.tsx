import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Canvas from './Canvas';
import PaintBottomHeader from './PaintBottomHeader';
import { CustomSheet } from '../../../../common/BottomSheet';

interface PaintBottomProps {
  isBottomOpen: boolean;
  setBottomOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDrawingImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
  drawingImageUrl: string | null;
}

const PaintBottomSheet = ({
  isBottomOpen,
  setBottomOpen,
  setDrawingImageUrl,
  drawingImageUrl,
}: PaintBottomProps) => {
  const [canvasState, setCanvasState] = useState<HTMLCanvasElement | null>(null);

  const closeBottom = () => setBottomOpen(false);

  useEffect(() => {
    setDrawingImageUrl(drawingImageUrl);
  }, [drawingImageUrl]);

  const onClickSubmitImage = () => {
    // 캔버스 저장 후 전달
    if (!canvasState) return;
    setDrawingImageUrl(canvasState.toDataURL());
    setBottomOpen(false);
  };

  return (
    <CustomSheet
      isOpen={isBottomOpen}
      onClose={closeBottom}
      detent='content-height'
      disableDrag={true}
    >
      <CustomSheet.Container>
        <St.BottomSheetWrapper>
          <CustomSheet.Header disableDrag={true}>
            <PaintBottomHeader onClose={closeBottom} />
          </CustomSheet.Header>
          <CustomSheet.Content>
            <St.ContentWrapper>
              <Canvas setCanvasState={setCanvasState} />
            </St.ContentWrapper>
          </CustomSheet.Content>
        </St.BottomSheetWrapper>
        <St.Footer>
          <St.Button type='button' onClick={onClickSubmitImage}>
            레퍼런스로 제출하기
          </St.Button>
        </St.Footer>
      </CustomSheet.Container>
      <CustomSheet.Backdrop onTap={closeBottom} />
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
  ContentWrapper: styled.div``,
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

export default PaintBottomSheet;
