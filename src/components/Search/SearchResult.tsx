import { styled } from 'styled-components';
import SearchResultItem from './SearchResultItem';
import { useParams } from 'react-router-dom';
import useGetSearchSticker from '../../libs/hooks/useGetSearchSticker';
const SearchResult = () => {
  const { keyword } = useParams<{ keyword: string }>();

  const { response } = useGetSearchSticker(keyword as string);

  return (
    <St.SearchResultPageWrapper>
      <St.SearchResultText>
        전체
        <St.SearchNumberText>{' ' + response.length}</St.SearchNumberText>개
      </St.SearchResultText>
      <St.SearchResultList>
        {response.map(({ id, imageUrl, name, discountRate, discountPrice, price }) => (
          <SearchResultItem
            key={id}
            id={id}
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

    ${({ theme }) => theme.fonts.body_medium_14};

    color: ${({ theme }) => theme.colors.gray4};
  `,

  SearchResultList: styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.1rem;
    justify-content: center;
    margin-top: 1.6rem;
    overflow-x: hidden;
  `,

  SearchNumberText: styled.span`
    ${({ theme }) => theme.fonts.body_semibold_14};
    color: ${({ theme }) => theme.colors.gray4};
  `,
};

export default SearchResult;
