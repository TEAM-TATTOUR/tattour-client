import { styled } from 'styled-components';

import CustomImgHeader from './CustomImgHeader';
import CustomImgAttach from './CustomImgAttach';

interface CustomImgProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomMainImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  attachedImg: File | null;
}

const CustomImg = ({ setIsActiveNext, setCustomMainImage, attachedImg }: CustomImgProps) => {
  return (
    <St.CustomImgWrapper>
      <CustomImgHeader />
      <CustomImgAttach
        setIsActiveNext={setIsActiveNext}
        setCustomMainImage={setCustomMainImage}
        attachedImg={attachedImg}
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
