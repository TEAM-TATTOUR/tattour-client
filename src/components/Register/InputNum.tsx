import styled from 'styled-components';
import TitleForm from './TitleForm';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';

const InputNum = () => {
  return (
    <St.InputNameWrapper>
      <TitleForm title={TITLE[1]} subTitle={SUB_TITLE[1]} />

      <St.InputContentsWrapper>
        <St.InputContent placeholder='전화번호를 입력해주세요'></St.InputContent>
        <St.CertificationBtn type='button'>인증하기</St.CertificationBtn>
      </St.InputContentsWrapper>
    </St.InputNameWrapper>
  );
};

const St = {
  InputNameWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  InputContentsWrapper: styled.div`
    display: flex;
    width: 100%;
    padding: 0rem 2rem;

    gap: 1.2rem;
  `,

  InputContent: styled.input`
    width: 23.1rem;
    height: 4.5rem;
    padding-left: 2rem;

    border: none;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.colors.gray5};
    background-color: ${({ theme }) => theme.colors.bg};

    ${({ theme }) => theme.fonts.body_medium_16};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }
  `,

  CertificationBtn: styled.button`
    width: 9.2rem;
    height: 4.5rem;

    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,
};

export default InputNum;
