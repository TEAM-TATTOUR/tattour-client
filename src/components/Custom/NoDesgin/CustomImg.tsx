import { styled } from 'styled-components';

import CustomImgHeader from './CustomImgHeader';
import CustomImgAttach from './CustomImgAttach';

const CustomImg = () => {
  return (
    <St.CustomImgWrapper>
      <CustomImgHeader />
      <CustomImgAttach />
    </St.CustomImgWrapper>
  );
};

export default CustomImg;

const St = {
  CustomImgWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
