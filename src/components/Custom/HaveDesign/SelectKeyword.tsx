import React, { useState } from 'react';
import { styled } from 'styled-components';
import { IcCheckSmallPink } from '../../../assets/icon';
import { KEYWORDS_GENRE } from '../../../assets/data/KEYWORDS_GENRE';
import { KEYWORDS_STYLE } from '../../../assets/data/KEYWORDS_STYLE';

const SelectKeyword = () => {
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
        {genreKeywords.map(({ value, checked }, index: number) => (
          <St.RadioLabel key={index} htmlFor={value} checked={checked}>
            <St.RadioInput
              type='checkbox'
              id={value}
              name={value}
              checked={checked}
              onChange={() => handleKeywordChange(index, 'genre')}
            />
            <St.RadioText checked={checked}>
              {checked && <IcCheckSmallPink />}
              {value}
            </St.RadioText>
          </St.RadioLabel>
        ))}
      </St.RadioWrapper>
      <St.Title>스타일</St.Title>
      <St.RadioWrapper>
        {styleKeywords.map(({ value, checked }, index: number) => (
          <St.RadioLabel key={index} htmlFor={value} checked={checked}>
            <St.RadioInput
              type='checkbox'
              id={value}
              name={value}
              checked={checked}
              onChange={() => handleKeywordChange(index, 'style')}
            />
            <St.RadioText checked={checked}>
              {checked && <IcCheckSmallPink />}
              {value}
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
    display: none;
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
