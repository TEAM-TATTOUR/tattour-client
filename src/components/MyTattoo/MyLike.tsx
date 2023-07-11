import { styled } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

const renderDummyImageComponent = () => {
  return (
    <div
      style={{
        width: '12.2rem',
        height: '13rem',
        backgroundColor: 'gray',
      }}
    ></div>
  );
};

const dummyMyLikeData = [
  {
    id: 1,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
  {
    id: 2,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
  {
    id: 3,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
  {
    id: 4,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
  {
    id: 5,
    title: '타투 제목',
    price: 2500,
    originalPrice: 4000,
    discountRate: 5,
  },
];

const MyLike = () => {
  return (
    <St.MyLikeWrapper>
      <header>
        <St.MyLikeTitle>LIKE</St.MyLikeTitle>
      </header>
      <St.MyLikeItemWrapper>
        <ScrollContainer vertical={false} className='scroll-container'>
          {dummyMyLikeData.map(({ id, title, price, originalPrice, discountRate }) => {
            return (
              <article key={id}>
                {renderDummyImageComponent()}
                <St.MyLikeItemTitle>{title}</St.MyLikeItemTitle>
                <St.MyLikeItemPriceTextWrapper>
                  <St.MyLikeItemDiscountRate>{discountRate}%</St.MyLikeItemDiscountRate>
                  <St.MyLikeItemPriceText>{price.toLocaleString()}원</St.MyLikeItemPriceText>
                </St.MyLikeItemPriceTextWrapper>
                <St.MyLikeItemOriginalPriceText>
                  {originalPrice.toLocaleString()}원
                </St.MyLikeItemOriginalPriceText>
              </article>
            );
          })}
        </ScrollContainer>
      </St.MyLikeItemWrapper>
    </St.MyLikeWrapper>
  );
};

const St = {
  MyLikeWrapper: styled.section`
    padding-left: 2rem;
    margin-top: 2.8rem;
  `,

  MyLikeTitle: styled.h2`
    // title eng bold 18 필요
    font-size: 1.8rem;
    font-weight: bold;
  `,

  MyLikeItemWrapper: styled.div`
    margin-top: 2.2rem;
    display: flex;
    gap: 1.2rem;
    justify-content: space-between;
    margin-right: 1.2rem;

    .scroll-container {
      display: flex;
      gap: 1.2rem;

      height: 28rem;
      width: 100%;
    }
  `,

  MyLikeItemTitle: styled.h3`
    margin-top: 1.3rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  MyLikeItemPriceTextWrapper: styled.div`
    display: flex;
  `,

  MyLikeItemDiscountRate: styled.p`
    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.pink5};
  `,

  MyLikeItemPriceText: styled.p`
    margin-left: 0.6rem;

    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  MyLikeItemOriginalPriceText: styled.p`
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.body_line_medium_12};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default MyLike;
