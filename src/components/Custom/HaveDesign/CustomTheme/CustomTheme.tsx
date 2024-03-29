import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
// 이모티콘 카운팅 관련 라이브러리
import GraphemeSplitter from 'grapheme-splitter';

interface CustomThemeProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const CustomTheme = ({
  setIsActiveNext,
  name,
  setName,
  description,
  setDescription,
}: CustomThemeProps) => {
  //count 될 maxCount 수
  const MAX_NAME_COUNT = 10;
  const MAX_ETC_COUNT = 100;

  //글자 수 세기 관련 state
  const [nameInputCount, setNameInputCount] = useState(0);
  const [descriptionTextAreaCount, setDescriptionTextAreaCount] = useState(0);

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionTextAreaRef = useRef<HTMLTextAreaElement | null>(null);
  //이모지 글자수 제대로 카운트 되게 수정 필요
  useEffect(() => {
    if (!name || !nameInputRef.current) return;
    nameInputRef.current.value = name;
    setNameInputCount(name.length);
    setName(name);
    setIsActiveNext(true);

    if (!description || !descriptionTextAreaRef.current) return;
    descriptionTextAreaRef.current.value = description;
    setDescriptionTextAreaCount(description.length);
    setDescription(description);
  }, []);

  useEffect(() => {
    if (nameInputCount > 0 && descriptionTextAreaCount > 0) {
      setIsActiveNext(true);
    } else {
      setIsActiveNext(false);
    }
  }, [nameInputCount, descriptionTextAreaCount]);

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
    const lengthCount = limitMaxLength(e, MAX_NAME_COUNT);
    //value가 없을 때 0으로 글자 수 세지도록
    if (e.target.value === '') {
      setNameInputCount(0);
      setIsActiveNext(false);
    } else if (nameInputCount > 0 && descriptionTextAreaCount > 0) {
      setIsActiveNext(true);
    }
    if (!lengthCount) return;
    setNameInputCount(lengthCount);
    setName(e.target.value);
  };

  const handleChangeDescriptionTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '') {
      setDescriptionTextAreaCount(0);
      setIsActiveNext(false);
    } else if (nameInputCount > 0 && descriptionTextAreaCount > 0) {
      setIsActiveNext(true);
    }
    console.log('ㅇㅇnameInputCount', nameInputCount);
    console.log('ㅇㅇdescriptionTextAreaCount', descriptionTextAreaCount);
    const lengthCount = limitMaxLength(e, MAX_ETC_COUNT);

    if (!lengthCount) return;
    setDescriptionTextAreaCount(lengthCount);
    setDescription(e.target.value);
  };

  return (
    <St.CustomRequestWrapper>
      <St.RequestNameContainer>
        <St.RequestNameTitle>타투의 이름을 지어주세요</St.RequestNameTitle>
        <St.RequestNameDetail>추후 아카이브 또는 공개 시 해당 이름이 노출돼요</St.RequestNameDetail>
        <St.RequestNameInput
          ref={nameInputRef}
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
          ref={descriptionTextAreaRef}
          onChange={handleChangeDescriptionTextArea}
          placeholder='ex. 가족이 전부 외부 선으로 따져있는 라인 타투'
        />
        <St.RequestInputCount>
          ({descriptionTextAreaCount}/{MAX_ETC_COUNT})
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
    /* align-items: center; */

    width: 100%;
    min-height: calc(100dvh - 13.6rem);
  `,

  RequestNameContainer: styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;

    margin: 5.6rem 2rem 0 2rem;
  `,

  RequestNameTitle: styled.h2`
    margin-left: 0.2rem;
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  RequestNameDetail: styled.p`
    margin-bottom: 0.8rem;
    margin-left: 0.2rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  RequestNameInput: styled.input`
    /* width: 29.5rem; */
    height: 4.8rem;
    /* padding: 1.2rem 2rem; */
    padding: 0 2rem;

    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.gray5};

    ${({ theme }) => theme.fonts.body_medium_16};

    box-sizing: content-box;
    border: none;
    border-radius: 0.5rem;

    &::placeholder {
      /* height: fit-content; */

      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      outline: 0;
    }
  `,
  RequestInputCount: styled.p`
    position: absolute;
    right: 0.4rem;
    bottom: -2.1rem;

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.detail_medium_12};
  `,

  RequestEtcContainer: styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;

    position: relative;

    margin: 0 2rem 0 2rem;
  `,

  RequestEtcTitle: styled.h2`
    padding-top: 4rem;
    margin-left: 0.2rem;

    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  RequestEtcTextArea: styled.textarea`
    /* width: 29.5rem; */
    height: 14.6rem;

    padding: 1.2rem 2rem;
    /* padding: 0 2rem; */
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
};
