import ScrollContainer from 'react-indiana-drag-scroll';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainArticle = () => {
  const navigate = useNavigate();

  const handleClickArticle = (id: number) => () => {
    navigate(`/article/${id}`);
  };

  return (
    <St.MainArticleSection>
      <St.MainArticleHeader>
        <St.MainArticleTitle>MAGAZINE</St.MainArticleTitle>
      </St.MainArticleHeader>
      <St.MainArticleWrapper>
        <ScrollContainer className='scroll-container' vertical={false} hideScrollbars={true}>
          <St.MainArticleItem onClick={handleClickArticle(1)}>
            <St.MainArticleItemImage src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
            <St.MainArticleTextWrapper>
              <St.MainArticleItemTitle>타투, 어디에 하는게 후회 안할까?</St.MainArticleItemTitle>
              <St.MainArticleItemContent>
                첫 타투는 충분히 고민을 해도 좋고, 즉흥적인 것도 괜찮다. 스스로 하고 싶다는 생각이
                들 때가 적당한 때라고 생각
              </St.MainArticleItemContent>
            </St.MainArticleTextWrapper>
          </St.MainArticleItem>
          <St.MainArticleItem onClick={handleClickArticle(1)}>
            <St.MainArticleItemImage src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
            <St.MainArticleTextWrapper>
              <St.MainArticleItemTitle>타투, 어디에 하는게 후회 안할까?</St.MainArticleItemTitle>
              <St.MainArticleItemContent>
                첫 타투는 충분히 고민을 해도 좋고, 즉흥적인 것도 괜찮다. 스스로 하고 싶다는 생각이
                들 때가 적당한 때라고 생각
              </St.MainArticleItemContent>
            </St.MainArticleTextWrapper>
          </St.MainArticleItem>
          <St.MainArticleItem onClick={handleClickArticle(1)}>
            <St.MainArticleItemImage src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
            <St.MainArticleTextWrapper>
              <St.MainArticleItemTitle>타투, 어디에 하는게 후회 안할까?</St.MainArticleItemTitle>
              <St.MainArticleItemContent>
                첫 타투는 충분히 고민을 해도 좋고, 즉흥적인 것도 괜찮다. 스스로 하고 싶다는 생각이
                들 때가 적당한 때라고 생각
              </St.MainArticleItemContent>
            </St.MainArticleTextWrapper>
          </St.MainArticleItem>
        </ScrollContainer>
      </St.MainArticleWrapper>
    </St.MainArticleSection>
  );
};

const St = {
  MainArticleSection: styled.section`
    padding-left: 2rem;
    margin-top: 2.8rem;
  `,

  MainArticleHeader: styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
  `,

  MainArticleTitle: styled.h2`
    ${({ theme }) => theme.fonts.title_eng_bold_20};
  `,

  MainArticleWrapper: styled.div`
    margin-top: 2.2rem;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      width: 100%;
    }
  `,

  MainArticleItem: styled.article``,

  MainArticleItemImage: styled.img`
    width: 31.8rem;
    height: 24.3rem;
  `,

  MainArticleTextWrapper: styled.div`
    margin-top: 1.8rem;
    margin-bottom: 7rem;
    width: 31.7rem;
  `,

  MainArticleItemTitle: styled.h3`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray8};
  `,

  MainArticleItemContent: styled.p`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};
  `,
};

export default MainArticle;
