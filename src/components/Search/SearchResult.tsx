import { styled } from 'styled-components';
import SearchResultItem from './SearchResultItem';
import { useParams } from 'react-router-dom';
import useGetSearchSticker from '../../libs/hooks/useGetSearchSticker';
const SearchResult = () => {
  const { keyword } = useParams<{ keyword: string }>();

  const { response, error, loading } = useGetSearchSticker(keyword as string);

  return (
    <St.SearchResultPageWrapper>
      <St.SearchResultText>전체 {response.length}개</St.SearchResultText>
      <St.SearchResultList>
        {response.map(({ id, imageUrl, name, discountRate, discountPrice, price }) => (
          <SearchResultItem
            key={id}
            img={imageUrl}
            title={name}
            discountRate={discountRate}
            price={discountPrice}
            originalPrice={price}
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
