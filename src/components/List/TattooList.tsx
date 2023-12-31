import styled from 'styled-components';
import {
  IcArrowBottomSmallGray,
  IcArrowBottomSmallLight,
  LabelCustomSmall,
} from '../../assets/icon';
import { useState, useEffect, useRef } from 'react';
import useGetAllList from '../../libs/hooks/list/useGetAllList';
import { useNavigate } from 'react-router-dom';

interface TattooListProps {
  setSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGenreOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setStyleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonName: string[];
}

const TattooList = ({ setSortOpen, setGenreOpen, setStyleOpen, buttonName }: TattooListProps) => {
  const [selectedFilter, setSelectedFilter] = useState([false, false, false]); // 각 버튼의 선택 여부 (색이 바뀌어야하는 여부)를 저장하는 state

  const navigate = useNavigate();
  const filterRef = useRef(null);
  const DEFAULT_BUTTON_NAME = ['정렬', '장르', '스타일'];

  useEffect(() => {
    const newSelectedFilter = [...selectedFilter];
    buttonName.forEach((btn, idx) => {
      if (btn !== DEFAULT_BUTTON_NAME[idx]) {
        newSelectedFilter[idx] = true;
      } else if (btn === DEFAULT_BUTTON_NAME[idx]) {
        newSelectedFilter[idx] = false;
      }
    });
    setSelectedFilter(newSelectedFilter);
  }, [buttonName]);

  const { response, error, loading } = useGetAllList(buttonName);

  const handleClickCard = (id: number) => {
    navigate(`/detail/${id}`);
  };

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
                  setSortOpen(true);
                  break;
                case 1:
                  setGenreOpen(true);
                  break;
                case 2:
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
      <St.CountText>전체 {response.length}개</St.CountText>
      <St.CardContainer>
        {!loading &&
          !error &&
          response.map(({ id, name, imageUrl, price, discountRate, discountPrice, isCustom }) => {
            return (
              <St.Card key={id} onClick={() => handleClickCard(id)}>
                <St.CardImg>
                  {isCustom && <LabelCustomSmall />}
                  <img src={imageUrl} />
                </St.CardImg>
                <h2>{name}</h2>
                <div>
                  <St.CardDiscount>{discountRate}%</St.CardDiscount>
                  <St.CardPrice>{discountPrice && discountPrice.toLocaleString()}원</St.CardPrice>
                </div>
                <p>{price.toLocaleString()}원</p>
              </St.Card>
            );
          })}
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
    ${({ theme }) => theme.fonts.title_eng_bold_18};
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
    gap: 0.1rem;
  `,
  Card: styled.article`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.2rem;

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
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    height: 20.1rem;
    background-color: ${({ theme }) => theme.colors.gray0};

    & > img {
      width: 18.3rem;
      height: 18.3rem;
    }

    & > svg {
      position: absolute;
      top: 0;
      left: 0;
    }
  `,
  CardDiscount: styled.span`
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_extrabold_16};
  `,
  CardPrice: styled.span`
    margin-left: 0.5rem;

    color: ${({ theme }) => theme.colors.gray7};
    ${({ theme }) => theme.fonts.title_extrabold_16};
  `,
};
