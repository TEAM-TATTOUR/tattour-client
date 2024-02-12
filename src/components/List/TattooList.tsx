import styled from 'styled-components';
import { IcArrowBottomSmallGray, IcArrowBottomSmallLight } from '../../assets/icon';
import { useState, useEffect } from 'react';
import useGetAllList from '../../libs/hooks/list/useGetAllList';
import TattooCard from './TattooCard';

interface TattooListProps {
  setSheetOpen: React.Dispatch<React.SetStateAction<number>>;
  buttonName: string[];
  defaultName: string[];
}

const TattooList = ({ setSheetOpen, buttonName, defaultName }: TattooListProps) => {
  // 각 버튼의 선택 여부 (색이 바뀌어야하는 여부)를 저장하는 state
  const [selectedFilter, setSelectedFilter] = useState([false, false, false]);
  useEffect(() => {
    const newSelectedFilter = [...selectedFilter];
    buttonName.forEach((btn, idx) => {
      if (btn !== defaultName[idx]) {
        newSelectedFilter[idx] = true;
      } else if (btn === defaultName[idx]) {
        newSelectedFilter[idx] = false;
      }
    });
    setSelectedFilter(newSelectedFilter);
  }, [buttonName]);

  const { response, error, loading } = useGetAllList(buttonName);

  return (
    <St.Wrapper>
      <St.Header>ALL</St.Header>
      <St.BtnContainer>
        {buttonName.map((el, idx) => (
          <St.FilterBtn
            key={el}
            $selected={selectedFilter[idx]}
            onClick={() => {
              // 필터 버튼을 클릭하여 바텀시트를 켜는 부분
              setSheetOpen(idx); // 어떤 필터 버튼을 클릭했는지에 따라 isSheetOpen 값이 0, 1, 2로 바뀜
            }}
          >
            {el}
            {selectedFilter[idx] ? <IcArrowBottomSmallLight /> : <IcArrowBottomSmallGray />}
          </St.FilterBtn>
        ))}
      </St.BtnContainer>
      <St.CountText>
        전체 <span>{response.length}</span>개
      </St.CountText>
      <St.CardContainer>
        {!loading && !error && response.map((data, idx) => <TattooCard data={data} key={idx} />)}
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

    & > span {
      ${({ theme }) => theme.fonts.body_semibold_14};
    }
  `,
  CardContainer: styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.1rem;
    padding-bottom: 1.4rem;
  `,
};
