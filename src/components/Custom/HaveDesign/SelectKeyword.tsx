import React, { useState } from 'react';
import { styled } from 'styled-components';
import { IcCheckSmallPink } from '../../../assets/icon';

const SelectKeyword = () => {
  const KEYWORDS_GENRE = [
    { value: '미니 타투', checked: false },
    { value: '낙서 타투', checked: false },
    { value: '라인 타투', checked: false },
    { value: '레터링', checked: false },
    { value: '캐릭터', checked: false },
    { value: '일러스트', checked: false },
    { value: '수채화', checked: false },
  ];

  const KEYWORDS_STYLE = [
    { value: '귀여운', checked: false },
    { value: '시크한', checked: false },
    { value: '섬세한', checked: false },
    { value: '심플한', checked: false },
    { value: '키치한', checked: false },
  ];

  const [genreKeywords, setGenreKeywords] = useState(KEYWORDS_GENRE);
  const [styleKeywords, setStyleKeywords] = useState(KEYWORDS_STYLE);

  const handleKeywordChange = (index: number, type: string) => {
    const checkedStyle = styleKeywords.filter((keyword) => keyword.checked).length;
    const checkedGenre = genreKeywords.filter((keyword) => keyword.checked).length;
    const checkedKeywords = checkedStyle + checkedGenre;
    if (type === 'genre') {
      const updatedKeywords = [...genreKeywords];
      //전체 개수 제한
      if (checkedKeywords >= 3 && updatedKeywords[index].checked === false) {
        alert('스타일 최소 1개, 전체 최대 3개 선택 가능합니다.');
      } else {
        updatedKeywords[index].checked = !updatedKeywords[index].checked;
        setGenreKeywords(updatedKeywords);
      }
    } else if (type === 'style') {
      const updatedKeywords = [...styleKeywords];
      //개수 제한
      if (checkedKeywords >= 3 && updatedKeywords[index].checked === false) {
        alert('스타일 최소 1개, 전체 최대 3개 선택 가능합니다.');
      } else {
        updatedKeywords[index].checked = !updatedKeywords[index].checked;
        setStyleKeywords(updatedKeywords);
      }
    }
  };
  return (
    <St.KeywordWrapper>
      <St.Title>장르</St.Title>
      <St.RadioWrapper>
        {genreKeywords.map((keyword, index: number) => (
          <St.RadioLabel key={index} htmlFor={keyword.value} checked={keyword.checked}>
            <St.RadioInput
              type='checkbox'
              id={keyword.value}
              name={keyword.value}
              checked={keyword.checked}
              onChange={() => handleKeywordChange(index, 'genre')}
            />
            <St.RadioText checked={keyword.checked}>
              {keyword.checked ? <IcCheckSmallPink /> : null}
              {keyword.value}
            </St.RadioText>
          </St.RadioLabel>
        ))}
      </St.RadioWrapper>
      <St.Title>스타일</St.Title>
      <St.RadioWrapper>
        {styleKeywords.map((keyword, index: number) => (
          <St.RadioLabel key={index} htmlFor={keyword.value} checked={keyword.checked}>
            <St.RadioInput
              type='checkbox'
              id={keyword.value}
              name={keyword.value}
              checked={keyword.checked}
              onChange={() => handleKeywordChange(index, 'style')}
            />
            <St.RadioText checked={keyword.checked}>
              {keyword.checked ? <IcCheckSmallPink /> : null}
              {keyword.value}
            </St.RadioText>
          </St.RadioLabel>
        ))}
      </St.RadioWrapper>
    </St.KeywordWrapper>
  );
};

export default SelectKeyword;

const St = {
  KeywordWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.6rem;

    width: 100%;
    padding-left: 2rem;
  `,
  Title: styled.h3`
    ${({ theme }) => theme.fonts.body_semibold_14};
    color: ${({ theme }) => theme.colors.gray5};
  `,
  RadioWrapper: styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    width: 100%;
  `,
  RadioLabel: styled.label<{ checked: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    border: 1px solid ${({ theme, checked }) => (checked ? theme.colors.pink5 : theme.colors.bg)};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.bg};
  `,
  RadioInput: styled.input`
    appearance: none;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  RadioText: styled.p<{ checked: boolean }>`
    display: flex;
    align-items: center;
    margin: ${({ checked }) => (checked ? '0.7rem 1rem 0.7rem 0.6rem' : '0.8rem 1.4rem')};

    svg {
      margin-right: 0.2rem;
      padding: 0;
    }

    color: ${({ theme, checked }) => (checked ? theme.colors.gray5 : theme.colors.gray3)};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
