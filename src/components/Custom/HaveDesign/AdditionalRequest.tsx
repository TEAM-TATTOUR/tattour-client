import React, { useState } from 'react';
import { styled } from 'styled-components';
// 이모티콘 카운팅 관련 라이브러리
import GraphemeSplitter from 'grapheme-splitter';

const CustomTheme = () => {
  //count 될 maxCount 수
  const MAX_ETC_COUNT = 100;

  //글자 수 세기 관련 state
  const [etcTextAreaCount, setEtcTextAreaCount] = useState(0);

  // 이모티콘을 한 문자로 취급하여 글자 수 제한을 구현하는 함수
  const limitMaxLength = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    MAXLength: number,
  ) => {
    const splitter = new GraphemeSplitter();
    const parsedValue = splitter.splitGraphemes(e.target.value);

    if (!parsedValue) return;

    if (parsedValue.length > MAXLength) {
      e.target.value = parsedValue.splice(0, MAXLength).join('');
      return;
    }

    return parsedValue.length;
  };

  const handleChangeEtcTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '') setEtcTextAreaCount(0);

    const lengthCount = limitMaxLength(e, MAX_ETC_COUNT);

    if (!lengthCount) return;
    setEtcTextAreaCount(lengthCount);
  };

  return (
    <St.CustomRequestWrapper>
      <St.RequestNameContainer>
        <St.RequestNameTitle>추가 요청 사항</St.RequestNameTitle>
        <St.RequestNameDetail>
          여러분이 상상하는 타투가 되기 위해,
          <br />
          추가적인 요청 사항이 있다면 자유롭게 작성해주세요.
        </St.RequestNameDetail>
      </St.RequestNameContainer>
      <St.RequestEtcContainer>
        <St.RequestEtcTextArea
          onChange={handleChangeEtcTextArea}
          placeholder='ex. 라인 1mm로 얇게 그려주세요 &#13;&#10; &nbsp; &nbsp;  추가적인 명암은 넣지 말아주세요.'
        />
        <St.RequestInputCount>
          ({etcTextAreaCount}/{MAX_ETC_COUNT})
        </St.RequestInputCount>
      </St.RequestEtcContainer>
    </St.CustomRequestWrapper>
  );
};

export default CustomTheme;

const St = {
  CustomRequestWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  RequestNameContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    position: relative;

    margin: 5.6rem 2rem 0 2.2rem;
  `,

  RequestNameTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  RequestNameDetail: styled.p`
    margin-bottom: 2rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  RequestNameInput: styled.input`
    width: 29.5rem;
    height: 2.1rem;

    padding: 1.2rem 2rem;

    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.gray5};

    ${({ theme }) => theme.fonts.body_medium_16};

    box-sizing: content-box;
    border: none;
    border-radius: 0.5rem;

    &::placeholder {
      height: fit-content;

      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      outline: 0;
    }
  `,

  RequestEtcContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    position: relative;

    margin: 0 2rem 0 2.2rem;
  `,

  RequestEtcTitle: styled.h2`
    padding-top: 4rem;

    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  RequestEtcTextArea: styled.textarea`
    width: 29.5rem;
    height: 14.6rem;

    padding: 1.2rem 2rem;

    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.gray5};

    ${({ theme }) => theme.fonts.body_medium_16};

    box-sizing: content-box;
    border: none;
    border-radius: 0.5rem;

    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      outline: 0;
    }
  `,

  RequestInputCount: styled.p`
    position: absolute;
    right: 0;
    bottom: -2.1rem;

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.detail_medium_12};
  `,
};