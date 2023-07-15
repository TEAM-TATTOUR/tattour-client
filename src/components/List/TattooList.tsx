import styled from 'styled-components';
import { IcArrowBottomSmallGray, IcArrowBottomSmallLight } from '../../assets/icon';
import { useState, useEffect, useRef } from 'react';
import { filterProps } from 'framer-motion';

interface TattooListProps {
  isSortOpen: boolean;
  setSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isGenreOpen: boolean;
  setGenreOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isStyleOpen: boolean;
  setStyleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonName: string[];
}

const TattooList = ({
  isSortOpen,
  setSortOpen,
  isGenreOpen,
  setGenreOpen,
  isStyleOpen,
  setStyleOpen,
  buttonName,
}: TattooListProps) => {
  const [count, setCount] = useState(17);

  const [selectedFilter, setSelectedFilter] = useState([false, false, false]); // 각 버튼의 선택 여부 (색이 바뀌어야하는 여부)를 저장하는 state

  const TATTOO_LIST = [
    {
      name: '고양이 리본 타투',
      price: 4000,
      discount: 25,
      finalPrice: 2500,
    },
    {
      name: '고양이 리본 타투2',
      price: 4000,
      discount: 25,
      finalPrice: 2500,
    },
  ];

  // 변화 -> bg색 to gray7, 글자색 to white, arrow icon to white
  // 변화 조건 : buttonName 배열의 각 요소가 filter.type인지 check -> 맞으면 default, 다르면 바뀐걸로
  // useEffect 사용해서 변화 감지하기 -> 위치는 TattooList에서
  const filterRef = useRef(null);
  const DEFAULT_BUTTON_NAME = ['정렬', '장르', '스타일'];

  useEffect(() => {
    buttonName.forEach((btn, idx) => {
      if (btn !== DEFAULT_BUTTON_NAME[idx]) {
        // selectedFilter에서 idx위치를 true로 변경
        const newSelectedFilter = [...selectedFilter];
        newSelectedFilter[idx] = true;
        setSelectedFilter(newSelectedFilter);
      }
    });
  }, [buttonName]);

  return (
    <St.Wrapper>
      <St.Header>ALL</St.Header>
      <St.BtnContainer ref={filterRef}>
        {buttonName.map((el, idx) => (
          <St.FilterBtn
            key={el}
            $selected={selectedFilter[idx]}
            onClick={() => {
              switch (idx) {
                case 0:
                  //if (isSortOpen) setSortOpen(false);
                  setSortOpen(true);
                  break;
                case 1:
                  //if (isGenreOpen) setGenreOpen(false);
                  setGenreOpen(true);
                  break;
                case 2:
                  //if (isStyleOpen) setStyleOpen(false);
                  setStyleOpen(true);
                  break;
              }
            }}
          >
            {el}
            {selectedFilter[idx] ? <IcArrowBottomSmallLight /> : <IcArrowBottomSmallGray />}
          </St.FilterBtn>
        ))}
      </St.BtnContainer>
      <St.CountText>전체 {count}개</St.CountText>
      <St.CardContainer>
        {TATTOO_LIST.map((el) => (
          <St.Card key={el.name}>
            <St.CardImg></St.CardImg>
            <h2>{el.name}</h2>
            <p>{el.price.toLocaleString()}원</p>
            <div>
              <St.CardDiscount>{el.discount}%</St.CardDiscount>
              <St.CardPrice>{el.finalPrice.toLocaleString()}원</St.CardPrice>
            </div>
          </St.Card>
        ))}
      </St.CardContainer>
    </St.Wrapper>
  );
};

export default TattooList;

const St = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
  `,
  Header: styled.h1`
    margin: 2.8rem 0rem 2.2rem 2rem;
    ${({ theme }) => theme.fonts.title_semibold_18}; // 추후 유료 font 변경 예정
  `,
  BtnContainer: styled.article`
    display: flex;
    gap: 1rem;
    margin-left: 2rem;
  `,
  FilterBtn: styled.button<{ $selected: boolean }>`
    display: flex;
    padding: 0.6rem 0.7rem 0.6rem 1.3rem;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    border-radius: 0.5rem;
    background-color: ${({ theme, $selected }) =>
      $selected ? theme.colors.gray7 : theme.colors.bg};

    color: ${({ theme, $selected }) => ($selected ? theme.colors.white : theme.colors.gray3)};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
  CountText: styled.p`
    margin: 2.8rem 0rem 1.6rem 2.2rem;
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
  CardContainer: styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `,
  Card: styled.article`
    display: flex;
    flex-direction: column;

    & > h2 {
      margin: 1.5rem 0rem 0rem 2rem;
      color: ${({ theme }) => theme.colors.gray7};
      ${({ theme }) => theme.fonts.title_semibold_16};
    }

    & > p {
      margin: 0.4rem 0rem 0rem 2rem;
      color: ${({ theme }) => theme.colors.gray1};
      ${({ theme }) => theme.fonts.body_line_medium_14};
    }

    & > div {
      margin: 0.3rem 0rem 0rem 2rem;
    }
  `,
  CardImg: styled.i`
    // 추후 img로 변경
    width: 18.7rem;
    height: 20.1rem;
    background-color: ${({ theme }) => theme.colors.gray1};
  `,
  CardDiscount: styled.span`
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_16};
  `,
  CardPrice: styled.span`
    margin-left: 0.5rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.title_semibold_16};
  `,
};
