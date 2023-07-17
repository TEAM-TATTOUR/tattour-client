import { styled } from 'styled-components';

const OnBoardingFooter = () => {
  return (
    <St.OnBoardingFooter>
      <St.FooterText>990P 내고 신청서 작성하기</St.FooterText>
    </St.OnBoardingFooter>
  );
};

export default OnBoardingFooter;

const St = {
  OnBoardingFooter: styled.footer`
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
    z-index: 2;
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
