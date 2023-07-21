import { styled } from 'styled-components';
import CustomTitle from './CustomTitle';
import CustomImageAttach from './CustomImageAttach';
import PaintBottomSheet from './PaintBottomSheet';
import { useState } from 'react';

const CustomReference = ({
  setIsActiveNext,
  setCustomMainImage,
  setCustomImages,
  attachedMainImg,
  attachedImages,
  freeDraw,
  setFreeDraw,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomMainImage: React.Dispatch<React.SetStateAction<File | null>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | null>>;
  attachedMainImg: File | null;
  attachedImages: FileList | null;
  freeDraw: boolean;
  setFreeDraw: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isBottomOpen, setBottomOpen] = useState(false);
  const [drawingImageUrl, setDrawingImageUrl] = useState<string | null>(null);

  return (
    <St.PageWrapper>
      <CustomTitle />
      <CustomImageAttach
        isBottomOpen={isBottomOpen}
        setBottomOpen={setBottomOpen}
        drawingImageURL={drawingImageUrl}
        setDrawingImageURL={setDrawingImageUrl}
        setIsActiveNext={setIsActiveNext}
        setCustomMainImage={setCustomMainImage}
        setCustomImages={setCustomImages}
        attachedMainImg={attachedMainImg}
        attachedImages={attachedImages}
        setFreeDraw={setFreeDraw}
        freeDraw={freeDraw}
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
    min-height: calc(100dvh - 13.6rem);
  `,
};

export default CustomReference;
