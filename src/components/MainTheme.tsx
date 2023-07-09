import { styled } from 'styled-components';

interface MainThemeItemProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const dummyThemeList: MainThemeItemProps[] = [
  {
    id: 1,
    img: '',
    title: '동양화',
    description: '고전적이면서 아름다운',
  },
  {
    id: 2,
    img: '',
    title: '동양화',
    description: '고전적이면서 아름다운',
  },
  {
    id: 3,
    img: '',
    title: '동양화',
    description: '고전적이면서 아름다운',
  },
];

const renderMainThemeDummyImage = () => {
  return (
    <div
      style={{
        width: '15.3rem',
        height: '14.5rem',
        backgroundColor: 'gray',
      }}
    ></div>
  );
};

const MainTheme = () => {
  return (
    <St.MainThemeSection>
      <St.MainThemeHeader>
        <St.MainThemeTitle>THEME</St.MainThemeTitle>
      </St.MainThemeHeader>
      <St.MainThemeWrapper>
        {dummyThemeList.map((item) => {
          return (
            <St.MainThemeItem key={item.id}>
              {renderMainThemeDummyImage()}
              <St.MainThemeItemTitle>{item.title}</St.MainThemeItemTitle>
              <St.MainThemeItemDescription>{item.description}</St.MainThemeItemDescription>
            </St.MainThemeItem>
          );
        })}
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
    // title_eng_bold_20 필요
    font-size: 2rem;
    font-weight: bold;
  `,

  MainThemeWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.2rem;
    margin-top: 1rem;
    margin-right: 1.2rem;

    overflow-x: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  MainThemeItem: styled.article`
    display: flex;
    flex-direction: column;

    width: 15.3rem;
  `,

  MainThemeItemTitle: styled.h3`
    margin-top: 1rem;

    font: ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  MainThemeItemDescription: styled.p`
    margin-top: 0.2rem;

    // detail medium 12 필요
    font-size: 1.2rem;

    color: ${({ theme }) => theme.colors.gray3};
  `,
};

export default MainTheme;
