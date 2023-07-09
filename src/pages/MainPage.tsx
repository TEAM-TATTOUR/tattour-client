import MainFooter from '../components/MainFooter';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import MainBanner from '../components/MainBanner';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { ImgLogoDark, ImgLogoLight } from '../assets/icon';
import MainHeaderButton from '../components/MainHeaderButton';
import HotCustom from '../components/HotCustom';
import MainTheme from '../components/MainTheme';
import MainEventBanner from '../components/MainEventBanner';
import MainStyle from '../components/MainStyle';

const MainPage = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

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
    </PageLayout>
  );
};

export default MainPage;
