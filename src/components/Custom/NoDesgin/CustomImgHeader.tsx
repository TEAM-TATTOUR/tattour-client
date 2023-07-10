import { styled } from 'styled-components';
import { IcCheckSmallGray } from '../../../assets/icon';

const CustomImgHeader = () => {
  return (
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
  );
};

export default CustomImgHeader;

const St = {
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
};
