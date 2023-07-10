import { styled } from 'styled-components';

interface MainStyleItemProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const dummyStyleList: MainStyleItemProps[] = [
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

const renderMainStyleDummyImage = () => {
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

const MainStyle = () => {
  return (
    <St.MainStyleSection>
      <St.MainStyleHeader>
        <St.MainStyleTitle>STYLE</St.MainStyleTitle>
      </St.MainStyleHeader>
      <St.MainStyleWrapper>
        {dummyStyleList.map((item) => {
          return (
            <St.MainStyleItem key={item.id}>
              {renderMainStyleDummyImage()}
              <St.MainThemeItemTitle>{item.title}</St.MainThemeItemTitle>
              <St.MainThemeItemDescription>{item.description}</St.MainThemeItemDescription>
            </St.MainStyleItem>
          );
        })}
      </St.MainStyleWrapper>
    </St.MainStyleSection>
  );
};

const St = {
  MainStyleSection: styled.section`
    padding-left: 2rem;
    margin-top: 3.6rem;
  `,

  MainStyleHeader: styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
  `,

  MainStyleTitle: styled.h2`
    // title_eng_bold_20 필요
    font-size: 2rem;
    font-weight: bold;
  `,

  MainStyleWrapper: styled.div`
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

  MainStyleItem: styled.article`
    display: flex;
    flex-direction: column;

    width: 15.3rem;
  `,

  MainThemeItemTitle: styled.span`
    margin-top: 1rem;

    font: ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  MainThemeItemDescription: styled.span`
    margin-top: 0.2rem;
    margin-bottom: 5rem;

    // detail medium 12 필요
    font-size: 1.2rem;

    color: ${({ theme }) => theme.colors.gray3};
  `,
};

export default MainStyle;
