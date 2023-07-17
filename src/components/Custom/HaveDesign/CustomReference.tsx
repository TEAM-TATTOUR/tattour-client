import { styled } from 'styled-components';
import CustomTitle from './CustomTitle';
import CustomImageAttach from './CustomImageAttach';
import PaintBottomSheet from './PaintBottomSheet';
import { useState } from 'react';

const CustomReference = () => {
  const [isBottomOpen, setBottomOpen] = useState(false);
  const [drawingImageUrl, setDrawingImageUrl] = useState<string | null>(null);

  return (
    <St.PageWrapper>
      <CustomTitle />
      <CustomImageAttach
        isBottomOpen={isBottomOpen}
        setBottomOpen={setBottomOpen}
        drawingImageURL={drawingImageUrl}
      />
      {isBottomOpen && (
        <PaintBottomSheet
          isBottomOpen={isBottomOpen}
          setBottomOpen={setBottomOpen}
          drawingImageURL={drawingImageUrl}
          setDrawingImageURL={setDrawingImageUrl}
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

    padding: 0 2rem;
  `,
};

export default CustomReference;
