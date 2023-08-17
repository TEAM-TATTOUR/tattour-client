import { useState } from 'react';
import { styled } from 'styled-components';
import CustomImageAttach from './CustomImageAttach';
import PaintBottomSheet from './PaintBottomSheet';
import ReferenceInstruction from './ReferenceInstruction';

interface CustomReferenceProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  handDrawingImage: File | null;
  setHandDrawingImage: React.Dispatch<React.SetStateAction<File | null>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | null>>;
  customImages: FileList | null;
  setPreviewURL: React.Dispatch<React.SetStateAction<string[]>>;
  previewURL: string[];
  drawingImageUrl: string | null;
  setDrawingImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

const CustomReference = ({
  setIsActiveNext,
  handDrawingImage,
  setHandDrawingImage,
  setCustomImages,
  customImages,
  setPreviewURL,
  previewURL,
  drawingImageUrl,
  setDrawingImageUrl,
}: CustomReferenceProps) => {
  const [isBottomOpen, setBottomOpen] = useState(false);

  return (
    <St.PageWrapper>
      <ReferenceInstruction />
      <CustomImageAttach
        setBottomOpen={setBottomOpen}
        drawingImageUrl={drawingImageUrl}
        setDrawingImageUrl={setDrawingImageUrl}
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
          drawingImageUrl={drawingImageUrl}
          setDrawingImageUrl={setDrawingImageUrl}
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
