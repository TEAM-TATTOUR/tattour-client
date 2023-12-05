import styled from 'styled-components';
import { readOrderSheetStickerInfoProps } from '../../libs/hooks/order/useGetOrdersheet';

const ProductInfo = ({
  readOrderSheetStickerInfo,
}: {
  readOrderSheetStickerInfo: readOrderSheetStickerInfoProps[];
}) => {
  // const { mainImageUrl, name, price, discountedPrice, count } = readOrderSheetStickerInfo;

  return (
    <>
      {readOrderSheetStickerInfo.map((item) => (
        <St.Wrapper>
          <St.Image>
            <img src={item.mainImageUrl} />
          </St.Image>
          <St.InfoContainer>
            <St.Name>{item.name}</St.Name>
            <St.Description>
              <St.ItemPrice>
                {item.discountedPrice && item.discountedPrice.toLocaleString()}원
              </St.ItemPrice>
              <St.OriginalPrice>{item.price && item.price.toLocaleString()}원</St.OriginalPrice>
              <St.Line></St.Line>
              <St.Count>{item.count}개</St.Count>
            </St.Description>
          </St.InfoContainer>
        </St.Wrapper>
      ))}
    </>
  );
};

export default ProductInfo;

const St = {
  Wrapper: styled.section`
    display: flex;

    padding: 1.4rem 0rem 2.4rem 2rem;
  `,
  Image: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 8.4rem;
    height: 8.4rem;

    background-color: ${({ theme }) => theme.colors.gray0};
    border-width: 0rem;

    & > img {
      width: 7.2rem;
      height: 7.2rem;
    }
  `,
  InfoContainer: styled.article`
    margin: 0.2rem 0rem 0rem 2rem;
  `,
  Name: styled.h1`
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  Description: styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    margin-top: 0.7rem;
  `,
  ItemPrice: styled.span`
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray6};
  `,
  OriginalPrice: styled.span`
    ${({ theme }) => theme.fonts.body_line_medium_14};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  Line: styled.div`
    width: 0.1rem;
    height: 1.4rem;
    margin: 0rem 0.4rem;
    background-color: ${({ theme }) => theme.colors.gray1};
  `,
  Count: styled.span`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
};
