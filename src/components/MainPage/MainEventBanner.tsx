import { styled } from 'styled-components';

const MainEventBanner = () => {
  return <St.MainEventBanner></St.MainEventBanner>;
};

const St = {
  MainEventBanner: styled.section`
    height: 10.8rem;
    background-color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default MainEventBanner;
