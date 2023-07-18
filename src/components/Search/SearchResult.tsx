import { styled } from 'styled-components';
import SearchResultItem from './SearchResultItem';

const DUMMY_DATA = {
  data: [
    {
      id: 1,
      title: '테스트',
      img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/5fd1d215-c2a2-4624-b82f-549fd7896b31',
      price: 1000,
      discountRate: 5,
      originalPrice: 950,
    },
    {
      id: 2,
      title: '테스트',
      img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/5fd1d215-c2a2-4624-b82f-549fd7896b31',
      price: 1000,
      discountRate: 5,
      originalPrice: 950,
    },
    {
      id: 3,
      title: '테스트',
      img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/5fd1d215-c2a2-4624-b82f-549fd7896b31',
      price: 1000,
      discountRate: 5,
      originalPrice: 950,
    },
    {
      id: 4,
      title: '테스트',
      img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/5fd1d215-c2a2-4624-b82f-549fd7896b31',
      price: 1000,
      discountRate: 5,
      originalPrice: 950,
    },
    {
      id: 5,
      title: '테스트',
      img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/5fd1d215-c2a2-4624-b82f-549fd7896b31',
      price: 1000,
      discountRate: 5,
      originalPrice: 950,
    },
    {
      id: 6,
      title: '테스트',
      img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/5fd1d215-c2a2-4624-b82f-549fd7896b31',
      price: 1000,
      discountRate: 5,
      originalPrice: 950,
    },
    {
      id: 7,
      title: '테스트',
      img: 'https://github.com/TEAM-TATTOUR/tattour-client/assets/51692363/5fd1d215-c2a2-4624-b82f-549fd7896b31',
      price: 1000,
      discountRate: 5,
      originalPrice: 950,
    },
  ],

  length: 7,
};

const SearchResult = () => {
  return (
    <St.SearchResultPageWrapper>
      <St.SearchResultText>전체 {DUMMY_DATA.length}개</St.SearchResultText>
      <St.SearchResultList>
        {DUMMY_DATA.data.map(({ id, img, title, discountRate, price, originalPrice }) => (
          <SearchResultItem
            key={id}
            img={img}
            title={title}
            discountRate={discountRate}
            price={price}
            originalPrice={originalPrice}
          />
        ))}
      </St.SearchResultList>
    </St.SearchResultPageWrapper>
  );
};

const St = {
  SearchResultPageWrapper: styled.section``,

  SearchResultText: styled.p`
    margin-top: 2.2rem;
    margin-left: 2.2rem;

    ${({ theme }) => theme.fonts.body_semibold_14};

    color: ${({ theme }) => theme.colors.gray4};
  `,

  SearchResultList: styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0.1rem;
    margin-top: 1.6rem;
  `,
};

export default SearchResult;
