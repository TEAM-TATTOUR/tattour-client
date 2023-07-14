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

  return (
    <>
      <St.ReceiptDetailWrapper>
        <St.SlideSection>
          <St.ReceiptTitle>{SAMPLE[0].name}</St.ReceiptTitle>
          <St.PreviewSection>
            <St.ImgPreviewContainer>
              {SAMPLE[0].previewURL.map((url, index) => (
                <St.Image key={index}>
                  <img src={url} alt='첨부-이미지-미리보기' />
                </St.Image>
              ))}
            </St.ImgPreviewContainer>
            <St.HashtagGroup>
              {SAMPLE[0].hashtag.map((tag, index) => (
                <St.Hashtag key={index}>{`#${tag}`}</St.Hashtag>
              ))}
            </St.HashtagGroup>
          </St.PreviewSection>
        </St.SlideSection>
      </St.ReceiptDetailWrapper>
      <St.Line />
      <St.DetailWrapper>
        <St.DetailSubject>컬러</St.DetailSubject>
        <St.DetailContent>{SAMPLE[0].color}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper>
        <St.DetailSubject>크기</St.DetailSubject>
        <St.DetailContent>{SAMPLE[0].size}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper>
        <St.DetailSubject>수량</St.DetailSubject>
        <St.DetailContent>{SAMPLE[0].quantity}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper>
        <St.DetailSubject>주제</St.DetailSubject>
        <St.DetailContent>{SAMPLE[0].theme}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper className='request'>
        <St.DetailSubject>요청사항</St.DetailSubject>
        <St.DetailContent>{SAMPLE[0].request}</St.DetailContent>
      </St.DetailWrapper>
    </>
  );
};

export default ReceiptDetail;

const St = {
  ReceiptDetailWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 5.3rem 0 2.4rem;
  `,
  SlideSection: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    height: 24.6rem;
    margin-bottom: 2rem;
  `,
  ReceiptTitle: styled.p`
    margin-left: 2.2rem;
    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  PreviewSection: styled.div`
    margin-left: 2rem;
  `,
  ImgPreviewContainer: styled.div`
    display: flex;

    height: 11.9rem;
    width: 100%;
    gap: 1rem;

    overflow-x: auto;
    white-space: nowrap;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  Image: styled.article`
    display: flex;
    align-items: center;

    width: 16rem;
    height: 11.9rem;
    background-color: ${({ theme }) => theme.colors.gray0};

    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `,
  HashtagGroup: styled.div`
    display: flex;

    height: 3rem;
    margin-top: 2rem;

    gap: 1.8rem;
  `,
  Line: styled.div`
    height: 0.1rem;
    width: 100%;
    padding: 0.6rem 1.3rem;

    background-color: ${({ theme }) => theme.colors.gray0};
  `,
  DetailWrapper: styled.section`
    display: flex;
    gap: 3.8rem;
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray4};
    background-color: ${({ theme }) => theme.colors.bg};

    .request {
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
