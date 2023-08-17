import { styled } from 'styled-components';
import { IcCheckSmallGray } from '../../../../assets/icon';

const ReferenceInstruction = () => {
  return (
    <St.TitleWrapper>
      <St.CustomReferenceTitle>참고 이미지를 첨부해 주세요</St.CustomReferenceTitle>
      <St.SubtitleWrapper>
        <St.CustomReferenceSubtitle>
          <IcCheckSmallGray />
          다른 타투이스트 도안을 첨부할 경우 기각됩니다
        </St.CustomReferenceSubtitle>
        <St.CustomReferenceSubtitle>
          <IcCheckSmallGray />
          새로운 스케치를 희망하시면 기존 그림을 삭제해주세요
        </St.CustomReferenceSubtitle>
      </St.SubtitleWrapper>
    </St.TitleWrapper>
  );
};

const St = {
  TitleWrapper: styled.h2`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    margin: 5.6rem 0 4rem;
    padding: 0 2rem;
  `,

  CustomReferenceTitle: styled.p`
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  SubtitleWrapper: styled.div`
    gap: 0.3rem;
  `,

  CustomReferenceSubtitle: styled.p`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
export default ReferenceInstruction;
