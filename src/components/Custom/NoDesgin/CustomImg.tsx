import { styled } from 'styled-components';

import CustomImgHeader from './CustomImgHeader';
import CustomImgAttach from './CustomImgAttach';

interface CustomImgProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomImages: React.Dispatch<React.SetStateAction<FileList | undefined>>;
  attachedImg: FileList | null;
}

const CustomImg = ({ setIsActiveNext, setCustomImages, attachedImg }: CustomImgProps) => {
  return (
    <St.CustomImgWrapper>
      <CustomImgHeader />
      <CustomImgAttach
        setIsActiveNext={setIsActiveNext}
        attachedImg={attachedImg}
        setCustomImages={setCustomImages}
      />
    </St.CustomImgWrapper>
  );
};

export default CustomImg;

const St = {
  CustomImgWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: calc(100dvh - 13.6rem);
  `,
};
