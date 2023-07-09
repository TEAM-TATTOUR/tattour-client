import { styled } from 'styled-components';
import { IcCheckSmall } from '../../assets/icon';

const CustomReference = () => {
  return (
    <>
      <St.TitleWrapper>
        <St.CustomReferenceTitle>레퍼런스 이미지를 첨부해주세요</St.CustomReferenceTitle>
        <St.CustomReferenceSubtitle>
          <IcCheckSmall />
          다른 타투이스트 도안을 첨부할 경우 기각됩니다
          <br />
          <IcCheckSmall />
          다른 타투이스트 도안을 첨부할 경우 기각됩니다
        </St.CustomReferenceSubtitle>
      </St.TitleWrapper>
      <St.CustomReferenceWrapper>
        <St.Image></St.Image>
      </St.CustomReferenceWrapper>
    </>
  );
};

const St = {
  TitleWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    position: absolute;
    left: 0;

    width: 100%;
  `,

  CustomReferenceTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    color: ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  CustomReferenceSubtitle: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    color: ${({ theme }) => theme.fonts.body_medium_14};
  `,

  CustomReferenceWrapper: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,

  Image: styled.div`
    width: 33.5rem;
    height: 24.6rem;
    background-color: ${({ theme }) => theme.colors.bg};
  `,
};

export default CustomReference;
