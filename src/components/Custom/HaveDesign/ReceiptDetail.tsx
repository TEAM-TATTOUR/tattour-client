import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const ReceiptDetail = () => {
  const location = useLocation();

  const size = location.state ? location.state.data.size : '';
  const count = location.state ? location.state.data.count : 1;
  const isColored = location.state ? location.state.data.isColored : false;
  const name = location.state ? location.state.data.name : '';
  const description = location.state ? location.state.data.description : '';
  const themes = location.state ? location.state.data.themes : [];
  const styles = location.state ? location.state.data.styles : [];
  const mainImageUrl = location.state ? location.state.data.mainImageUrl : '';
  const handDrawingImageUrl = location.state ? location.state.data.handDrawingImageUrl : '';
  const images = location.state ? location.state.data.images : [];
  const previewURL = [...themes, ...styles];
  const imagesArray = [mainImageUrl, ...images, handDrawingImageUrl];

  // const { name, hashtag, color, size, quantity, theme, request, previewURL } = SAMPLE[0];

  return (
    <>
      <St.Divider />
      <St.ReceiptDetailWrapper>
        <St.ReceiptTitle>{name}</St.ReceiptTitle>
        <St.PreviewSection>
          <St.ImgPreviewContainer>
            {imagesArray.map((url, index) => (
              <St.Image key={index}>
                <img src={url} alt='첨부-이미지-미리보기' />
              </St.Image>
            ))}
          </St.ImgPreviewContainer>
          <St.HashtagGroup>
            {previewURL.map((tag, index) => (
              <St.Hashtag key={index}>{`#${tag}`}</St.Hashtag>
            ))}
          </St.HashtagGroup>
        </St.PreviewSection>
      </St.ReceiptDetailWrapper>
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
      <St.DetailWrapper>
        <St.DetailSubject>주제</St.DetailSubject>
        <St.DetailContent>{name}</St.DetailContent>
      </St.DetailWrapper>
      <St.DetailWrapper className='request'>
        <St.DetailSubject>요청사항</St.DetailSubject>
        <St.DetailContent>{description}</St.DetailContent>
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
