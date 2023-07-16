import React from 'react';
import { styled } from 'styled-components';

const ReceiptDetail = () => {
  const SAMPLE = [
    {
      name: '백합 타투',
      hashtag: ['낙서타투', '시크한', '섬세한'],
      color: '흑백',
      size: '5cm 이하',
      quantity: 1,
      theme: '백조를 선으로 딴 라인 타투',
      request: '백조를 이렇게 저렇게 해주세요',
      previewURL: ['https://ibb.co/YWKwsv6', 'https://ibb.co/GFSGFvF', 'https://ibb.co/p11dRQx'],
    },
  ];

  const { name, hashtag, color, size, quantity, theme, request, previewURL } = SAMPLE[0];

  return (
    <>
      <St.Divider />
      <St.ReceiptDetailWrapper>
        <St.ReceiptTitle>{name}</St.ReceiptTitle>
        <St.PreviewSection>
          <St.ImgPreviewContainer>
            {previewURL.map((url, index) => (
              <St.Image key={index}>
                <img src={url} alt='첨부-이미지-미리보기' />
              </St.Image>
            ))}
          </St.ImgPreviewContainer>
          <St.HashtagGroup>
            {hashtag.map((tag, index) => (
              <St.Hashtag key={index}>{`#${tag}`}</St.Hashtag>
            ))}
          </St.HashtagGroup>
        </St.PreviewSection>
      </St.ReceiptDetailWrapper>
      <St.Line />
      <St.DetailWrapper>
        <St.DetailSubject>컬러</St.DetailSubject>
        <St.DetailContent>{color}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper>
        <St.DetailSubject>크기</St.DetailSubject>
        <St.DetailContent>{size}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper>
        <St.DetailSubject>수량</St.DetailSubject>
        <St.DetailContent>{quantity}개</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper>
        <St.DetailSubject>주제</St.DetailSubject>
        <St.DetailContent>{theme}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper className='request'>
        <St.DetailSubject>요청사항</St.DetailSubject>
        <St.DetailContent>{request}</St.DetailContent>
      </St.DetailWrapper>
    </>
  );
};

export default ReceiptDetail;

const St = {
  Divider: styled.div`
    height: 1.3rem;

    background-color: ${({ theme }) => theme.colors.bg};
  `,
  ReceiptDetailWrapper: styled.section`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 0 0 0 2rem;
  `,
  ReceiptTitle: styled.p`
    margin: 2.8rem 0 2.8rem 0.2rem;
    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  PreviewSection: styled.div`
    overflow-x: auto;
  `,
  ImgPreviewContainer: styled.div`
    display: flex;
    height: 11.9rem;
    gap: 1rem;

    overflow-x: scroll;
    white-space: nowrap;

    -ms-overflow-style: none; //IE and Edge
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none; // Chrome, Safari, Opera
    }
  `,
  Image: styled.article`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.gray0};

    & > img {
      width: 16rem;
      height: 11.9rem;
      object-fit: contain;
    }
  `,
  HashtagGroup: styled.div`
    display: flex;
    justify-content: start;

    height: 3rem;
    margin-top: 2rem;

    gap: 1.8rem;
  `,
  Hashtag: styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    padding: 0.6rem 1.3rem;

    border-radius: 0.5rem;
    gap: 1.6rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};
    background-color: ${({ theme }) => theme.colors.bg};
  `,
  Line: styled.div`
    height: 0.1rem;
    margin: 3.2rem 0 3rem 0;

    background-color: ${({ theme }) => theme.colors.gray0};
  `,
  DetailWrapper: styled.section`
    display: flex;

    padding: 0 0 0.8rem 2.2rem;
    gap: 3.8rem;

    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};

    &.request {
      gap: 1.5rem;
    }
  `,
  DetailSubject: styled.span`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
  DetailContent: styled.span`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};
  `,
};
