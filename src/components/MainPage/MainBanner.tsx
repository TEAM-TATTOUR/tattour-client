import { styled } from 'styled-components';
import { IcArrowRightDark } from '../../assets/icon';
import { useNavigate } from 'react-router-dom';
import bannerVideo from '../../assets/video/tattour_home_banner.mp4';
import { getAccessToken } from '../../libs/api';

const MainBanner = () => {
  const navigate = useNavigate();

  const handleClickHomekButton = () => {
    getAccessToken() ? navigate('/onboarding') : navigate('/login');
  };

  return (
    <>
      <St.MainWrapper>
        <St.Video loop={true} muted={true} autoPlay={true} playsInline={true}>
          <source src={bannerVideo} type='video/mp4'></source>
        </St.Video>
      </St.MainWrapper>
      <St.SubWrapper>
        <St.SmallCopy>커스텀 타투로 후회 없는 선택의 여정을</St.SmallCopy>
        <St.HomeButton onClick={handleClickHomekButton} type='button'>
          신청하기
          <IcArrowRightDark />
        </St.HomeButton>
      </St.SubWrapper>
    </>
  );
};

const St = {
  MainWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  BannerWrapper: styled.section<{ $svgstring: string }>`
    width: 100%;
    height: 76.1rem;
    padding: 0 1.7rem;
    background-image: ${({ $svgstring }) => `url("data:image/svg+xml,${$svgstring}")`};
  `,

  Video: styled.video`
    position: relative;
    width: 37.5rem;
    height: 34rem;
    margin-top: 7rem;
  `,

  SubWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2.2rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  SmallCopy: styled.p`
    padding-top: 1.2rem;
    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.white};
  `,

  HomeButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 5.3rem;
    width: 11.1rem;
    height: 4.2rem;

    background-color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};

    color: ${({ theme }) => theme.colors.gray9};
    border-radius: 0.5rem;
  `,
};

export default MainBanner;
