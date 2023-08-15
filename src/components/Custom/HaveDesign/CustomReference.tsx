import { styled } from 'styled-components';
import CustomTitle from './CustomTitle';
import CustomImageAttach from './CustomImageAttach';
import PaintBottomSheet from './PaintBottomSheet';
import { useState, useEffect } from 'react';

interface CustomReferenceProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  handDrawingImage: File | null;
  setHandDrawingImage: React.Dispatch<React.SetStateAction<File | null>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | null>>;
  customImages: FileList | null;
  setPreviewURL: React.Dispatch<React.SetStateAction<string[]>>;
  previewURL: string[];
}

const CustomReference = ({
  setIsActiveNext,
  handDrawingImage,
  setHandDrawingImage,
  setCustomImages,
  customImages,
  setPreviewURL,
  previewURL,
}: CustomReferenceProps) => {
  const [isBottomOpen, setBottomOpen] = useState(false);
  const [drawingImageUrl, setDrawingImageUrl] = useState<string | null>(null);

  return (
    <St.PageWrapper>
      <CustomTitle />
      <CustomImageAttach
        setBottomOpen={setBottomOpen}
        drawingImageURL={drawingImageUrl}
        setDrawingImageURL={setDrawingImageUrl}
        setIsActiveNext={setIsActiveNext}
        setCustomImages={setCustomImages}
        customImages={customImages}
        handDrawingImage={handDrawingImage}
        setHandDrawingImage={setHandDrawingImage}
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
