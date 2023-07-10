import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

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
        height: '9.6rem',
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
        <ScrollContainer className='scroll-container' vertical={false} hideScrollbars={true}>
          {dummyStyleList.map((item) => {
            return (
              <St.MainStyleItem key={item.id}>
                {renderMainStyleDummyImage()}
                <St.MainThemeItemTitle>{item.title}</St.MainThemeItemTitle>
                <St.MainThemeItemDescription>{item.description}</St.MainThemeItemDescription>
              </St.MainStyleItem>
            );
          })}
        </ScrollContainer>
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
    margin-top: 1rem;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      width: 100%;
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
