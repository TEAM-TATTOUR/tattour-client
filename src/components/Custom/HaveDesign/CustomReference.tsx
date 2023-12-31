import { styled } from 'styled-components';
import CustomTitle from './CustomTitle';
import CustomImageAttach from './CustomImageAttach';
import PaintBottomSheet from './PaintBottomSheet';
import { useState } from 'react';

const CustomReference = ({
  setIsActiveNext,
  handDrawingImage,
  setHandDrawingImage,
  setCustomImages,
  customImages,
  setPreviewURL,
  setFreeDraw,
  previewURL,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setHandDrawingImage: React.Dispatch<React.SetStateAction<File | null>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | null>>;
  customImages: FileList | null;
  handDrawingImage: File | null;
  setFreeDraw: React.Dispatch<React.SetStateAction<boolean>>;
  previewURL: string[];
  setPreviewURL: React.Dispatch<React.SetStateAction<string[]>>;
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
        setCustomImages={setCustomImages}
        setFreeDraw={setFreeDraw}
        // freeDraw={freeDraw}
        customImages={customImages}
        setHandDrawingImage={setHandDrawingImage}
        handDrawingImage={handDrawingImage}
        previewURL={previewURL}
        setPreviewURL={setPreviewURL}
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
