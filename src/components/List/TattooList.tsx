import styled from 'styled-components';
import useGetAllList from '../../libs/hooks/list/useGetAllList';
import TattooCard from './TattooCard';
import FilterButton from './FilterButton';
import { buttonType } from '../../page/ListPage';

interface TattooListProps {
  setSheetOpen: React.Dispatch<React.SetStateAction<number>>;
  buttonName: string[];
  buttons: buttonType[];
}

const TattooList = ({ setSheetOpen, buttonName, buttons }: TattooListProps) => {
  const { response, error, loading } = useGetAllList(buttonName);

  return (
    <St.Wrapper>
      <St.Header>ALL</St.Header>
      <St.BtnContainer>
        {buttonName.map((el, idx) => (
          <FilterButton
            key={el}
            idx={idx}
            button={el}
            setSheetOpen={setSheetOpen}
            buttons={buttons}
          />
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
