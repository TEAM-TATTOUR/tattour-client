import { styled } from 'styled-components';
import { resCustomInfoType } from '../../../../types/customInfoType';

interface ReceiptDetailProps {
  receiptData: resCustomInfoType | undefined;
  haveDesign: boolean;
}

const ReceiptDetail = ({ receiptData, haveDesign }: ReceiptDetailProps) => {
  //typeError 방지용 early return
  if (receiptData === undefined) return;

  const {
    size,
    count,
    isColored,
    name,
    description,
    demand,
    themes,
    styles,
    mainImageUrl,
    handDrawingImageUrl,
    images,
  } = receiptData;

  const keywords = [...themes, ...styles];
  const imagesArray = handDrawingImageUrl
    ? [mainImageUrl, ...images, handDrawingImageUrl]
    : [mainImageUrl, ...images];

  return (
    <St.ReceiptDetailWrapper>
      <St.Divider />
      <St.ReceiptDetailContainer>
        <St.ReceiptTitle>{name}</St.ReceiptTitle>
        <St.PreviewSection>
          {haveDesign ? (
            <St.HaveDesignPreviewContainer>
              {imagesArray.map((url, index) => (
                <St.Image key={index}>
                  <img src={url} alt='첨부-이미지-미리보기' />
                </St.Image>
              ))}
            </St.HaveDesignPreviewContainer>
          ) : (
            <img src={mainImageUrl} alt='첨부-이미지-미리보기' />
          )}
          {haveDesign ? (
            <St.HashtagGroup>
              {keywords.map((tag, index) => (
                <St.Hashtag key={index}>{`#${tag}`}</St.Hashtag>
              ))}
            </St.HashtagGroup>
          ) : (
            <></>
          )}
        </St.PreviewSection>
      </St.ReceiptDetailContainer>
      <St.Line />
      <St.DetailWrapper>
        <St.DetailSubject>컬러</St.DetailSubject>
        <St.DetailContent>{isColored ? '컬러' : '흑백'}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper>
        <St.DetailSubject>크기</St.DetailSubject>
        <St.DetailContent>{size}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper>
        <St.DetailSubject>수량</St.DetailSubject>
        <St.DetailContent>{count}개</St.DetailContent>
      </St.DetailWrapper>
      {haveDesign ? (
        <St.DetailWrapper>
          <St.DetailSubject>주제</St.DetailSubject>
          <St.DetailContent>{description}</St.DetailContent>
        </St.DetailWrapper>
      ) : (
        <></>
      )}
      <St.DetailWrapper className='request'>
        <St.DetailSubject>요청사항</St.DetailSubject>
        <St.DetailContent>{demand}</St.DetailContent>
      </St.DetailWrapper>
    </St.ReceiptDetailWrapper>
  );
};

export default ReceiptDetail;

const St = {
  ReceiptDetailWrapper: styled.section`
    display: flex;
    flex-direction: column;

    min-height: calc(100dvh - 36.92rem);
  `,

  Divider: styled.div`
    height: 1.3rem;

    background-color: ${({ theme }) => theme.colors.bg};
  `,
  ReceiptDetailContainer: styled.section`
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
  HaveDesignPreviewContainer: styled.div`
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
  NoDesignPreviewContainer: styled.div`
    display: flex;
    height: 18rem;
    width: 33.5rem;
    gap: 1rem;
    & > img {
      object-fit: contain;
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
