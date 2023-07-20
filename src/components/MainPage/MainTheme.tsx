import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import useGetThemeCard, { MainThemeItemProps } from '../../libs/hooks/useGetThemeCard';
import { useNavigate } from 'react-router-dom';

const dummyThemeList: MainThemeItemProps[] = [
  {
    id: 1,
    imageUrl: '',
    name: '라인 타투',
    description: '깔끔한 라인으로 심플한',
  },
  {
    id: 2,
    imageUrl: '',
    name: '수채화',
    description: '물 먹은 투명한 느낌의',
  },
  {
    id: 3,
    imageUrl: '',
    name: '동양화',
    description: '고전적이면서 아름다운',
  },
  {
    id: 4,
    imageUrl: '',
    name: '일러스트',
    description: '원하는 바를 자유롭게 표현하는',
  },
  {
    id: 5,
    imageUrl: '',
    name: '블랙 워크',
    description: '블랙 타투로 강렬한',
  },
];

const renderMainThemeDummyImage = () => {
  return (
    <div
      style={{
        width: '15.3rem',
        height: '9.6rem',
        backgroundColor: 'gray',
      }}
    ></div>
  );
};

const MainTheme = () => {
  const { response, error, loading } = useGetThemeCard();

  const navigate = useNavigate();

  const handleClickCard = (name: string) => () => {
    navigate(`/list`, {
      state: {
        type: '장르',
        name: name,
      },
    });
  };

  return (
    <St.MainThemeSection>
      <St.MainThemeHeader>
        <St.MainThemeTitle>THEME</St.MainThemeTitle>
      </St.MainThemeHeader>
      <St.MainThemeWrapper>
        <ScrollContainer className='scroll-container' vertical={false} hideScrollbars={true}>
          {!loading &&
            !error &&
            response.map((item) => {
              return (
                <St.MainThemeItem key={item.id} onClick={handleClickCard(item.name)}>
                  {renderMainThemeDummyImage()}
                  <St.MainThemeItemTitle>{item.name}</St.MainThemeItemTitle>
                  <St.MainThemeItemDescription>{item.description}</St.MainThemeItemDescription>
                </St.MainThemeItem>
              );
            })}
        </ScrollContainer>
      </St.MainThemeWrapper>
    </St.MainThemeSection>
  );
};

const St = {
  MainThemeSection: styled.section`
    padding-left: 2rem;
    margin-top: 2.8rem;
  `,

  MainThemeHeader: styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
  `,

  MainThemeTitle: styled.h2`
    ${({ theme }) => theme.fonts.title_eng_bold_20};
  `,

  MainThemeWrapper: styled.div`
    margin-top: 1rem;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      width: 100%;
    }
  `,

  MainThemeItem: styled.article`
    display: flex;
    flex-direction: column;

    width: 15.3rem;
  `,

  MainThemeItemTitle: styled.h3`
    margin-top: 1rem;

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  MainThemeItemDescription: styled.p`
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;

    // detail medium 12 필요
    ${({ theme }) => theme.fonts.detail_medium_12}

    color: ${({ theme }) => theme.colors.gray3};
  `,
};

export default MainTheme;
