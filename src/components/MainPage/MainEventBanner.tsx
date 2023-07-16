import { styled } from 'styled-components';
import { ImgHomeBanner } from '../../assets/icon';

const MainEventBanner = () => {
  return (
    <St.MainEventBanner>
      <ImgHomeBanner />
    </St.MainEventBanner>
  );
};

const St = {
  MainEventBanner: styled.section`
    display: flex;
    justify-content: center;

    height: 10.8rem;
    background-color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default MainEventBanner;
