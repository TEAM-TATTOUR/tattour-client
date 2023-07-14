import { styled } from 'styled-components';

const SearchResultItem = ({
  title,
  img,
  price,
  discountRate,
  originalPrice,
}: {
  title: string;
  img: string;
  price: number;
  discountRate: number;
  originalPrice: number;
}) => {
  return (
    <St.SearchResultItem>
      <St.SearchResultItemImg src={img} />
      <St.SearchResultItemDescription>
        <St.SearchResultItemTitle>{title}</St.SearchResultItemTitle>
        <St.SearchResultPriceWrapper>
          <St.SearchResultItemDiscountRate>{discountRate}%</St.SearchResultItemDiscountRate>
          <St.SearchResultItemPrice>{price}원</St.SearchResultItemPrice>
        </St.SearchResultPriceWrapper>
        <St.SearchResultItemOriginalPrice>{originalPrice}원</St.SearchResultItemOriginalPrice>
      </St.SearchResultItemDescription>
    </St.SearchResultItem>
  );
};

const St = {
  SearchResultItem: styled.li`
    display: flex;
    flex-direction: column;
    width: 18.7rem;
    height: 28.3rem;
    margin-bottom: 2.2rem;
  `,

  SearchResultItemImg: styled.img`
    width: 18.7rem;
    height: 20.1rem;

    background-color: ${({ theme }) => theme.colors.gray0};

    object-fit: contain;
  `,

  SearchResultItemDescription: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  `,

  SearchResultItemTitle: styled.p`
    margin-top: 1.5rem;
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  SearchResultPriceWrapper: styled.p`
    display: flex;
    margin-top: 0.4rem;
  `,

  SearchResultItemDiscountRate: styled.span`
    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.pink5};
  `,

  SearchResultItemPrice: styled.span`
    ${({ theme }) => theme.fonts.title_extrabold_16};
    color: ${({ theme }) => theme.colors.gray7};
  `,

  SearchResultItemOriginalPrice: styled.span`
    ${({ theme }) => theme.fonts.body_line_medium_14};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default SearchResultItem;
