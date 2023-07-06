import styled from 'styled-components';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import TitleForm from './TitleForm';
import InputNameFooter from './InputNameFooter';

const InputName = () => {
  return (
    <St.InputNameWrapper>
      <TitleForm title={TITLE[0]} subTitle={SUB_TITLE[0]} />

      <St.InputContentsWrapper>
        <St.InputContent placeholder='실명을 입력해주세요'></St.InputContent>
      </St.InputContentsWrapper>

      <InputNameFooter />
    </St.InputNameWrapper>
  );
};

const St = {
  InputNameWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  InputContentsWrapper: styled.article`
    width: 100%;
    padding: 0rem 2rem;
  `,

  InputContent: styled.input`
    width: 100%;
    height: 4.5rem;
    padding-left: 2rem;

    border: none;
    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.bg};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }
  `,
};

export default InputName;
