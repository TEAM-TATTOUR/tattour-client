import { styled } from 'styled-components';
import CustomTitle from './CustomTitle';
import CustomImageAttach from './CustomImageAttach';

const CustomReference = () => {
  return (
    <St.PageWrapper>
      <CustomTitle />
      <CustomImageAttach />
    </St.PageWrapper>
  );
};

const St = {
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 2rem 0 2rem;
  `,
};

export default CustomReference;
