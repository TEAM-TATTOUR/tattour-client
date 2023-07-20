import styled from 'styled-components';
import { useState } from 'react';
import { StickerItemProps } from '../../libs/hooks/detail/useGetSticker';

const DetailInfo = ({ response }: StickerItemProps) => {
  const [isOpen, setOpen] = useState(false);

  const {
    name,
    discountRate,
    discountPrice,
    price,
    composition,
    size,
    shippingCost,
    stickerThemes,
    stickerStyles,
    description,
  } = response;

  return (
    <St.Wrapper>
      <St.Header>
        <St.Name>{name}</St.Name>
        <St.New>NEW!</St.New>
      </St.Header>
      <St.PriceContainer>
        <St.Discount>{discountRate}%</St.Discount>
        <St.FinalPrice>
          {discountPrice && discountPrice.toLocaleString()}
          <span>원</span>
        </St.FinalPrice>
      </St.PriceContainer>
      <St.OriginalPrice>{price && price.toLocaleString()}원</St.OriginalPrice>
      <St.LightLine />
      <St.Description>
        <St.Category>구성</St.Category>
        <span>{composition}</span>
        <St.Category>크기</St.Category>
        <span>{size}</span>
        <St.Category>배송비</St.Category>
        <span>{shippingCost && shippingCost.toLocaleString()}원</span>
      </St.Description>
      <St.BoldLine />
      <St.TagContainer>
        {stickerThemes && stickerThemes.map((el: string) => <St.Tag key={el}>{el}</St.Tag>)}
        {stickerStyles && stickerStyles.map((el: string) => <St.Tag key={el}>{el}</St.Tag>)}
      </St.TagContainer>
      {description && (
        <p>
          <St.DetailText>{description.substring(0, 60)}</St.DetailText>
          {isOpen ? (
            <St.DetailText>{description.substring(61)}</St.DetailText>
          ) : (
            description.length > 61 && (
              <St.DetailText>
                {'···'}
                <St.Button onClick={() => setOpen(true)}>더보기</St.Button>
              </St.DetailText>
            )
          )}
        </p>
      )}
      <St.BoldLine />
    </St.Wrapper>
  );
};

export default DetailInfo;

const St = {
  Wrapper: styled.section`
    padding: 2.8rem 2.2rem;
  `,
  Header: styled.header`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1rem;
  `,
  PriceContainer: styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 0.4rem;
  `,
  Name: styled.h1`
    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray6};
  `,
  New: styled.span`
    ${({ theme }) => theme.fonts.detail_medium_12};
    color: ${({ theme }) => theme.colors.pink3};
  `,
  Discount: styled.span`
    margin-right: 1.2rem;
    ${({ theme }) => theme.fonts.title_extrabold_22};
    color: ${({ theme }) => theme.colors.pink5};
  `,
  FinalPrice: styled.span`
    display: flex;
    align-items: center;
    gap: 0.2rem;

    ${({ theme }) => theme.fonts.title_extrabold_22};
    color: ${({ theme }) => theme.colors.gray7};

    & > span {
      ${({ theme }) => theme.fonts.body_medium_16};
    }
  `,
  OriginalPrice: styled.span`
    ${({ theme }) => theme.fonts.title_line_medium_16};
    color: ${({ theme }) => theme.colors.gray1};
  `,
  LightLine: styled.hr`
    margin: 2.8rem -2.2rem 2.9rem -2.2rem;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-width: 0rem;
  `,
  Description: styled.p`
    display: grid;
    grid-template-columns: 5.7rem 1fr;
    gap: 0.6rem;
    margin-bottom: 0.2rem;

    & > span {
      ${({ theme }) => theme.fonts.body_medium_14};
      color: ${({ theme }) => theme.colors.gray4};
    }
  `,
  Category: styled.span`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  BoldLine: styled.hr`
    margin: 3rem -2.2rem 0rem -2.2rem;
    height: 1.3rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-width: 0rem;
  `,
  TagContainer: styled.article`
    display: flex;
    gap: 1rem;
    margin: 2.8rem 0rem 2rem 0rem;
  `,
  Tag: styled.span`
    padding: 0.6rem 1.3rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 0.5rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};

    &::before {
      content: '#';
    }
  `,
  DetailText: styled.span`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};
  `,
  Button: styled.button`
    display: inline;
    ${({ theme }) => theme.fonts.body_underline_medium_14};
    color: ${({ theme }) => theme.colors.gray5};
  `,
};
