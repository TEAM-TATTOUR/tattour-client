import { styled } from 'styled-components';

import CustomImgAttach from './CustomImgAttach';
import CustomImgHeader from './CustomImgHeader';

interface CustomImgProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | undefined>>;
  attachedImg: FileList | null;
  previewURL: string;
  setPreviewURL: React.Dispatch<React.SetStateAction<string>>;
}

const CustomImg = ({
  setIsActiveNext,
  setCustomImages,
  attachedImg,
  previewURL,
  setPreviewURL,
}: CustomImgProps) => {
  return (
    <St.CustomImgWrapper>
      <CustomImgHeader />
      <CustomImgAttach
        setIsActiveNext={setIsActiveNext}
        attachedImg={attachedImg}
        setCustomImages={setCustomImages}
        previewURL={previewURL}
        setPreviewURL={setPreviewURL}
      />
    </St.CustomImgWrapper>
  );
};

export default CustomImg;

const St = {
  CustomImgWrapper: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: calc(100dvh - 13.6rem);
    padding: 0 2rem;
  `,
};
