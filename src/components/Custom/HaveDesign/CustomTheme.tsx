import React, { useState } from 'react';
import { styled } from 'styled-components';
// 이모티콘 카운팅 관련 라이브러리
import GraphemeSplitter from 'grapheme-splitter';

const CustomTheme = ({
  setIsActiveNext,
  setName,
  setDescription,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}) => {
  //count 될 maxCount 수
  const MAX_NAME_COUNT = 10;
  const MAX_ETC_COUNT = 100;

  //글자 수 세기 관련 state
  const [nameInputCount, setNameInputCount] = useState(0);
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

  const handleChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value가 없을 때 0으로 글자 수 세지도록
    if (e.target.value === '') {
      setNameInputCount(0);
      setIsActiveNext(false);
    } else if (nameInputCount && etcTextAreaCount) {
      setIsActiveNext(true);
    }

    const lengthCount = limitMaxLength(e, MAX_NAME_COUNT);

    if (!lengthCount) return;
    setNameInputCount(lengthCount);

    setName(e.target.value);
  };

  const handleChangeEtcTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '') {
      setEtcTextAreaCount(0);
      setIsActiveNext(false);
    } else if (nameInputCount && etcTextAreaCount) {
      setIsActiveNext(true);
    }

    const lengthCount = limitMaxLength(e, MAX_ETC_COUNT);

    if (!lengthCount) return;
    setEtcTextAreaCount(lengthCount);

    setDescription(e.target.value);
  };

  return (
    <St.CustomRequestWrapper>
      <St.RequestNameContainer>
        <St.RequestNameTitle>타투의 이름을 지어주세요</St.RequestNameTitle>
        <St.RequestNameDetail>추후 아카이브 또는 공개 시 해당 이름이 노출돼요</St.RequestNameDetail>
        <St.RequestNameInput
          type='text'
          onChange={handleChangeNameInput}
          placeholder='ex. 우리 가족 타투, 백조 타투'
          autoFocus
        />
        <St.RequestInputCount>
          ({nameInputCount}/{MAX_NAME_COUNT})
        </St.RequestInputCount>
      </St.RequestNameContainer>
      <St.RequestEtcContainer>
        <St.RequestEtcTitle>주제 및 추가설명</St.RequestEtcTitle>
        <St.RequestEtcTextArea
          onChange={handleChangeEtcTextArea}
          placeholder='ex. 가족이 전부 외부 선으로 따져있는 라인 타투'
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
    align-items: center;

    min-height: calc(100dvh - 13.6rem);
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
    margin-bottom: 0.8rem;

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
