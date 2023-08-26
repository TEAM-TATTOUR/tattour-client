import { styled } from 'styled-components';

import CustomImgAttach from './CustomImgAttach';
import CustomImgHeader from './CustomImgHeader';

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

    width: 100%;
    min-height: calc(100dvh - 13.6rem);
    padding: 0 2rem;
  `,
};
