import { styled } from 'styled-components';
import { IcArrowRightDark, ImgHome } from '../../assets/icon';
import { renderToStaticMarkup } from 'react-dom/server';

const MainBanner = () => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<ImgHome />));

  return (
    <St.BannerWrapper $svgstring={svgString}>
      <St.CopyWright>
        Journey <br />
        of No Regrets,
      </St.CopyWright>
      <St.SmallCopy>나만의 타투 스티커를 만들어 보세요 </St.SmallCopy>
      <St.HomeButton type='button'>
        신청하기
        <IcArrowRightDark />
      </St.HomeButton>
    </St.BannerWrapper>
  );
};

const St = {
  BannerWrapper: styled.section<{ $svgstring: string }>`
    width: 100%;
    height: 76.1rem;
    padding: 0 1.7rem;
    background-image: ${({ $svgstring }) => `url("data:image/svg+xml,${$svgstring}")`};
  `,

  CopyWright: styled.p`
    padding-top: 8.1rem;

    font-size: 7.8rem;
    color: ${({ theme }) => theme.colors.white};
  `,

  SmallCopy: styled.p`
    padding-top: 6.6rem;

    ${({ theme }) => theme.fonts.body_medium_16};
    color: ${({ theme }) => theme.colors.white};
  `,

  HomeButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.4rem;

    width: 11.1rem;
    height: 4.2rem;

    background-color: ${({ theme }) => theme.colors.pink5};
    font: ${({ theme }) => theme.fonts.title_semibold_20};
    border-radius: 0.5rem;
  `,
};

export default MainBanner;
