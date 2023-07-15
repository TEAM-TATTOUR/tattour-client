import { styled } from 'styled-components';
import { IcCheckSmallGray } from '../../../assets/icon';

const CustomImgHeader = () => {
  return (
    <St.ImgInfoContainer>
      <St.ImgInfoTitle>그려둔 도안 이미지를 첨부해주세요</St.ImgInfoTitle>
      <St.ImgInfoDetail>
        <IcCheckSmallGray />
        <span>선택 크기보다 1cm 이상 여유가 필요해요</span>
      </St.ImgInfoDetail>
      <St.ImgInfoDetail>
        <IcCheckSmallGray />
        <span>다른 타투이스트의 도안을 첨부할 경우 저작권 문제로 신청서가 반려될 수 있어요</span>
      </St.ImgInfoDetail>
    </St.ImgInfoContainer>
  );
};

export default CustomImgHeader;

const St = {
  ImgInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    margin: 5.6rem 0 3.6rem;
  `,

  ImgInfoTitle: styled.h2`
    margin-bottom: 0.9rem;

    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  ImgInfoDetail: styled.p`
    display: flex;
    align-items: flex-start;
    gap: 0.2rem;

    white-space: pre-line;

    & > span {
      max-width: 28.4rem;
      padding-top: 0.2rem;

      color: ${({ theme }) => theme.colors.gray3};
      ${({ theme }) => theme.fonts.body_medium_14};
    }
  `,
  ImgInfoDetailBox: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
