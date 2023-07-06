import styled from 'styled-components';
import TitleForm from './TitleForm';
import { TITLE, SUB_TITLE } from '../../constants/TitleInfo';
import { useEffect, useState } from 'react';

const InputNum = () => {
  const [isChanged, setIsChanged] = useState(false);

  const handleIsChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value.length === 0 ? setIsChanged(false) : setIsChanged(true);
  };

  useEffect(() => {
    setIsChanged(isChanged);
  }, [isChanged]);

  return (
    <St.InputNameWrapper>
      <TitleForm title={TITLE[1]} subTitle={SUB_TITLE[1]} />

      <St.InputContentsWrapper>
        <St.InputContent
          placeholder='전화번호를 입력해주세요'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleIsChanged(e)}
        ></St.InputContent>
        <St.CertificationBtn type='button' ischanged={isChanged ? 'true' : 'false'}>
          인증하기
        </St.CertificationBtn>
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

  CertificationBtn: styled.button<{ ischanged?: string }>`
    width: 9.2rem;
    height: 4.5rem;

    border: none;
    border-radius: 0.6rem;

    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ ischanged, theme }) =>
      ischanged === 'true' ? theme.colors.gray7 : theme.colors.gray3};

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,
};

export default InputNum;
