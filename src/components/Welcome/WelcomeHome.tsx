import { styled } from 'styled-components';
import { ImgWelcomeLogo } from '../../assets/icon';


const WelcomeHome = () => {
  return (
    <St.WelcomeWrapper>
      <St.ContentsWrapper>
        <ImgWelcomeLogo />
        <St.Title>타투어가 되신 것을 환영해요</St.Title>
        <St.SubTitle>후회없는 타투 선택의 여정을 함께 할게요</St.SubTitle>
      </St.ContentsWrapper>
    </St.WelcomeWrapper>
  );
};

const St = {
  WelcomeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    min-height: 100dvh;
    max-width: 43rem;
    width: 100%;
  `,

  ContentsWrapper: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled.p`
    margin-top: 2.4rem;

    color: ${({ theme }) => theme.colors.gray8};

    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  SubTitle: styled.p`
    margin-top: 1.2rem;

    color: ${({ theme }) => theme.colors.gray3};

    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};

export default WelcomeHome;
