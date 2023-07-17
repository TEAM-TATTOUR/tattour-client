import { styled } from 'styled-components';
import CustomTitle from './CustomTitle';
import CustomImageAttach from './CustomImageAttach';
import PaintBottomSheet from './PaintBottomSheet';
import { useState } from 'react';

const CustomReference = ({
  setIsActiveNext,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isBottomOpen, setBottomOpen] = useState(false);
  const [drawingImageUrl, setDrawingImageUrl] = useState<string | null>(null);
  const [freeDrawing, setFreeDrawing] = useState<boolean>(false);
  
  return (
    <St.PageWrapper>
      <CustomTitle />
      <CustomImageAttach
        isBottomOpen={isBottomOpen}
        setBottomOpen={setBottomOpen}
        drawingImageURL={drawingImageUrl}
        setIsActiveNext={setIsActiveNext}
      />
      {isBottomOpen && (
        <PaintBottomSheet
          isBottomOpen={isBottomOpen}
          setBottomOpen={setBottomOpen}
          drawingImageURL={drawingImageUrl}
          setDrawingImageURL={setDrawingImageUrl}
          setFreeDrawing={setFreeDrawing}
        />
      )}
    </St.PageWrapper>
  );
};

const St = {
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100dvh - 13.6rem);
  `,
};

export default CustomReference;
