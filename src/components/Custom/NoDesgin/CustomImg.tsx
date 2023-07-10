import { styled } from 'styled-components';
import { IcCheckSmallGray, IcPhoto } from '../../../assets/icon';

const CustomImg = () => {
  return (
    <St.CustomImgWrapper>
      <St.ImgInfoContainer>
        <St.ImgInfoTitle>그려둔 도안 이미지를 첨부해주세요</St.ImgInfoTitle>
        <St.ImgInfoDetail>
          <IcCheckSmallGray />
          <span>선택 크기보다 0cm 이상 여유 있는 크기로 첨부해주세요</span>
        </St.ImgInfoDetail>
        <St.ImgInfoDetail>
          <IcCheckSmallGray />
          <span>투명한 배경, 고화질 png 파일로 1장 첨부해주세요</span>
        </St.ImgInfoDetail>
      </St.ImgInfoContainer>
      <St.ImgAttachContainer>
        <St.ImgAttachArea>
          <p>도안 이미지를 첨부해주세요</p>
        </St.ImgAttachArea>
        <St.ImgAttachBtn type='button'>
          <IcPhoto />
          <span>사진 첨부하기</span>
        </St.ImgAttachBtn>
      </St.ImgAttachContainer>
    </St.CustomImgWrapper>
  );
};

export default CustomImg;

const St = {
  CustomImgWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  ImgInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    margin: 5.6rem 0 3.6rem;
  `,

  ImgInfoTitle: styled.h2`
    margin-bottom: 0.9rem;

    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  ImgInfoDetail: styled.p`
    display: flex;
    align-items: center;
    gap: 0.2rem;

    & > span {
      padding-top: 0.2rem;

      color: ${({ theme }) => theme.colors.gray3};
      ${({ theme }) => theme.fonts.body_medium_14};
    }
  `,

  ImgAttachContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
  `,

  ImgAttachArea: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33.5rem;
    height: 24.6rem;

    background-color: ${({ theme }) => theme.colors.bg};

    & > p {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_14};
    }
  `,

  ImgAttachBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33.5rem;
    height: 5rem;

    background-color: ${({ theme }) => theme.colors.white};

    border: 0.1rem solid ${({ theme }) => theme.colors.gray1};
    border-radius: 0.5rem;

    & > svg {
      padding-right: 0.6rem;
    }

    & > span {
      color: ${({ theme }) => theme.colors.gray3};
      ${({ theme }) => theme.fonts.body_medium_16};
    }
  `,
};
