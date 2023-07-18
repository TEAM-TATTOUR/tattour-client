import styled from 'styled-components';
import { useState } from 'react';

const DetailInfo = ({ id }: { id: number }) => {
  // id로 서버통신 get

  const DISCOUNT = 5;
  const FINAL_PRICE = 2500;
  const ORIGINAL_PRICE = 4000;
  const DELIVERY_PRICE = 3000;
  const TAG = ['심플한', '레터링'];

  const TEXT = `
  우리집고양이는 츄르를 좋아하는데요. 매우 좋아합니다. 아주 많이 좋아하구요. 우주만큼 땅만큼
  좋아합니다. 사실은 고양이 가 아닙니다. 어쩌고 저쩌고 어쩌고 저쩌고...어쩌고 저쩌고 어 쩌고
  저쩌고 어쩌고 저쩌고 어쩌고 저쩌고....어쩌고 저쩌고 어 쩌고 저쩌고 어쩌고 저쩌고 어쩌고
  저쩌고...
  `;

  const [isOpen, setOpen] = useState(false);

  return (
    <St.Wrapper>
      <St.Header>
        <St.Name>우리집고양이츄르</St.Name>
        <St.New>NEW!</St.New>
      </St.Header>
      <St.PriceContainer>
        <St.Discount>{DISCOUNT}%</St.Discount>
        <St.FinalPrice>
          {FINAL_PRICE.toLocaleString()}
          <span>원</span>
        </St.FinalPrice>
      </St.PriceContainer>
      <St.OriginalPrice>{ORIGINAL_PRICE.toLocaleString()}원</St.OriginalPrice>
      <St.LightLine />
      <St.Description>
        <St.Category>구성</St.Category>
        <span>타투스티커 2EA + 알콜 스왑 2EA</span>
        <St.Category>크기</St.Category>
        <span>90*120 (mm)</span>
        <St.Category>배송비</St.Category>
        <span>{DELIVERY_PRICE.toLocaleString()}원</span>
      </St.Description>
      <St.BoldLine />
      <St.TagContainer>
        {TAG.map((el, index) => (
          <St.Tag key={index}>{el}</St.Tag>
        ))}
      </St.TagContainer>
      <p>
        <St.DetailText>{TEXT.substring(0, 65)}</St.DetailText>
        {isOpen ? (
          <St.DetailText>{TEXT.substring(65)}</St.DetailText>
        ) : (
          TEXT.length > 65 && (
            <St.DetailText>
              {'···'}
              <St.Button onClick={() => setOpen(true)}>더보기</St.Button>
            </St.DetailText>
          )
        )}
      </p>
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
