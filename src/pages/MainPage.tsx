import MainFooter from '../components/MainPage/MainFooter';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import MainBanner from '../components/MainPage/MainBanner';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { ImgLogoDark, ImgLogoLight } from '../assets/icon';
import MainHeaderButton from '../components/MainPage/MainHeaderButton';
import HotCustom from '../components/MainPage/HotCustom';
import MainTheme from '../components/MainPage/MainTheme';
import MainEventBanner from '../components/MainPage/MainEventBanner';
import MainStyle from '../components/MainPage/MainStyle';
import SideMenu from '../components/MainPage/SideMenu';

const MainPage = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const [isSideMenuOpen] = useState(false);

  useEffect(() => {
    const debouncedHandleScroll = throttle(handleScroll, 100);

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsHeaderTransparent(scrollY === 0);
  };
  const reanderMainPageHeader = () => {
    return (
      <Header
        transparent={isHeaderTransparent}
        leftSection={isHeaderTransparent ? <ImgLogoLight /> : <ImgLogoDark />}
        rightSection={<MainHeaderButton light={isHeaderTransparent} />}
      />
    );
  };

  return (
    <PageLayout renderHeader={reanderMainPageHeader} footer={<MainFooter />}>
      <MainBanner />
      <HotCustom />
      <MainEventBanner />
      <MainTheme />
      <MainStyle />
      {isSideMenuOpen && <SideMenu />}
    </PageLayout>
  );
};

export default MainPage;
