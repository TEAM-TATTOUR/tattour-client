import { styled } from 'styled-components';
import { IcCheckSmallGray } from '../../assets/icon';

const PriceHeading = () => {
  return (
    <St.HeadingWrapper>
      <St.Title>수량을 선택해주세요</St.Title>
      <St.SubtitleWrapper>
        <St.Subtitle>
          <IcCheckSmallGray />
          도안 공개로 타투의 가격을 낮출 수 있어요
        </St.Subtitle>
        <St.Subtitle>
          <IcCheckSmallGray />
          결제는 도안 확정 이후 진행돼요
        </St.Subtitle>
      </St.SubtitleWrapper>
    </St.HeadingWrapper>
  );
};

export default PriceHeading;

const St = {
  HeadingWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;
    margin: 5.6rem 0 3.7rem 2.2rem;
  `,
  Title: styled.h2`
    ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.gray8};
  `,
  SubtitleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  `,

  Subtitle: styled.p`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
