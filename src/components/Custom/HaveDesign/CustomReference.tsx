import { styled } from 'styled-components';
import CustomTitle from './CustomTitle';
import CustomImageAttach from './CustomImageAttach';
import PaintBottomSheet from './PaintBottomSheet';
import { useEffect, useState } from 'react';
import { customInfo } from '../../../types/customInfo';

const CustomReference = ({
  setIsActiveNext,
  setCustomMainImg,
  setCustomImg,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
        setCustomMainImg : React.Dispatch<React.SetStateAction<File>>;
        setCustomImg : React.Dispatch<React.SetStateAction<FileList>>;
}) => {
  const [isBottomOpen, setBottomOpen] = useState(false);
  const [drawingImageUrl, setDrawingImageUrl] = useState<string | null>(null);

  useEffect(() => {
    {drawingImageUrl? setCustomImg()}
  }, [drawingImageUrl]);
  return (
    <St.PageWrapper>
      <CustomTitle />
      <CustomImageAttach
        isBottomOpen={isBottomOpen}
        setBottomOpen={setBottomOpen}
        drawingImageURL={drawingImageUrl}
        setDrawingImageURL={setDrawingImageUrl}
        setIsActiveNext={setIsActiveNext}
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
