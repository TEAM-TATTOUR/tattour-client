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
    title: '추상적인',
    description: '무형의 깊은 의미를 담은',
  },
  {
    id: 2,
    img: '',
    title: '심플한',
    description: '간단하고 부담스럽지 않은',
  },
  {
    id: 3,
    img: '',
    title: '사실적인',
    description: '세심하게 개체를 표현하는',
  },
  {
    id: 4,
    img: '',
    title: '귀여운',
    description: '몽글몽글 사랑스러운',
  },
  {
    id: 5,
    img: '',
    title: '감성적인',
    description: '부드럽고 분위기 있는',
  },
  {
    id: 6,
    img: '',
    title: '다크한',
    description: '강렬하고 짙은',
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
    ${({ theme }) => theme.fonts.title_eng_bold_20};
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

    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  MainThemeItemDescription: styled.span`
    margin-top: 0.2rem;
    margin-bottom: 5rem;

    // detail medium 12 필요
    ${({ theme }) => theme.fonts.detail_medium_12};

    color: ${({ theme }) => theme.colors.gray3};
  `,
};

export default MainStyle;
