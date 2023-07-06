import styled from 'styled-components';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import TitleForm from './TitleForm';

const InputName = () => {
  return (
    <St.InputNameWrapper>
      <TitleForm title={TITLE[0]} subTitle={SUB_TITLE[0]} />
    </St.InputNameWrapper>
  );
};

const St = {
  InputNameWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default InputName;
