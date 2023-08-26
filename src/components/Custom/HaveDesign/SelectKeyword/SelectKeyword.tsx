import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { IcCheckSmallPink } from '../../../../assets/icon';
import useGetGenre, { GenreItemProps } from '../../../../libs/hooks/list/useGetGenre';
import useGetStyle, { StyleItemProps } from '../../../../libs/hooks/list/useGetStyle';

interface SelectKeywordProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  styles: number[];
  setStyles: React.Dispatch<React.SetStateAction<number[]>>;
  themes: number[];
  setThemes: React.Dispatch<React.SetStateAction<number[]>>;
  stylesKeyword: string[];
  themesKeyword: string[];
}

const SelectKeyword = ({
  setIsActiveNext,
  styles,
  setStyles,
  themes,
  setThemes,
  stylesKeyword,
  themesKeyword,
}: SelectKeywordProps) => {
  const { genreResponse, genreError, genreLoading } = useGetGenre();
  const { styleResponse, styleError, styleLoading } = useGetStyle();

  const [genreKeywords, setGenreKeywords] = useState<
    { id: number; value: string; checked: boolean }[]
  >([]);

  const [styleKeywords, setStyleKeywords] = useState<
    { id: number; value: string; checked: boolean }[]
  >([]);

  //통신 완료하면 키워드들 불러오기
  useEffect(() => {
    if (!genreLoading && !genreError) {
      const updatedGenreKeywords = genreResponse.map((genre: GenreItemProps) => ({
        id: genre.id,
        value: genre.name,
        checked: themes.includes(genre.id) || themesKeyword.includes(genre.name),
      }));
      setGenreKeywords(updatedGenreKeywords);
    }

    if (!styleLoading && !styleError) {
      const updatedStyleKeywords = styleResponse.map((style: StyleItemProps) => ({
        id: style.id,
        value: style.name,
        checked: styles.includes(style.id) || stylesKeyword.includes(style.name),
      }));
      setStyleKeywords(updatedStyleKeywords);
    }
  }, [genreResponse, styleResponse]);

  //선택 개수에 따른 버튼 활성화
  useEffect(() => {
    const checkedStyle = styleKeywords.filter((keyword) => keyword.checked);
    const checkedGenre = genreKeywords.filter((keyword) => keyword.checked);
    const checkedKeywords = checkedStyle.length + checkedGenre.length;

    setIsActiveNext(checkedKeywords >= 1);
  }, [genreKeywords, styleKeywords]);

  //키워드 클릭 시 개수 제한에 안 걸리면 버튼 눌리고 선택된 키워드 저장되도록 설정
  const handleKeywordChange = (index: number, type: string) => {
    const checkedStyleLength = styleKeywords.filter((keyword) => keyword.checked).length;
    const checkedGenreLength = genreKeywords.filter((keyword) => keyword.checked).length;
    const checkedKeywordsLength = checkedStyleLength + checkedGenreLength;

    if (type === 'genre') {
      const updatedKeywords = [...genreKeywords];
      //스타일 선택 시 개수 제한 체크
      if (checkedKeywordsLength >= 3 && updatedKeywords[index].checked === false) {
        return;
      } else {
        updatedKeywords[index].checked = !updatedKeywords[index].checked;
        setGenreKeywords(updatedKeywords);
        //클릭해서 체크 반영되면 state에도 선택된 값 id 저장해주기
        const checkedGenre = genreKeywords.filter((keyword) => keyword.checked);
        const checkedGenreKeywords = checkedGenre.map((genre) => genre.id);
        setThemes(checkedGenreKeywords);
      }
    } else if (type === 'style') {
      const updatedKeywords = [...styleKeywords];
      //장르 선택 시 개수 제한 체크
      if (checkedKeywordsLength >= 3 && updatedKeywords[index].checked === false) {
        return;
      } else {
        updatedKeywords[index].checked = !updatedKeywords[index].checked;
        setStyleKeywords(updatedKeywords);
        //클릭해서 체크 반영되면 state에도 선택된 값 id 저장해주기
        const checkedStyle = styleKeywords.filter((keyword) => keyword.checked);
        const checkedStyleKeywords = checkedStyle.map((style) => style.id);
        setStyles(checkedStyleKeywords);
      }
    }
  };

  return (
    <St.KeywordWrapper>
      <St.Title>장르</St.Title>
      <St.RadioWrapper>
        {!genreLoading &&
          !genreError &&
          genreKeywords.map(({ value, checked }, index: number) => (
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
      <St.RadioWrapper className='style-keywords'>
        {!styleLoading &&
          !styleError &&
          styleKeywords.map(({ value, checked }, index: number) => (
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
    min-height: calc(100dvh - 28.8rem);

    .style-keywords {
      width: 26rem;
      gap: 1.2rem;

      display: flex;
      flex-wrap: wrap;
    }
  `,
  Title: styled.h3`
    ${({ theme }) => theme.fonts.body_semibold_14};
    color: ${({ theme }) => theme.colors.gray5};
  `,
  RadioWrapper: styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    width: 33.9rem;
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
