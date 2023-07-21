import MainFooter from '../components/MainPage/MainFooter';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import MainBanner from '../components/MainPage/MainBanner';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { ImgLogoDark, ImgLogoLight } from '../assets/icon';
import MainHeaderButton from '../components/MainPage/MainHeaderButton';
import MainTheme from '../components/MainPage/MainTheme';
import MainEventBanner from '../components/MainPage/MainEventBanner';
import MainStyle from '../components/MainPage/MainStyle';
import SideMenu from '../common/SideMenu';
import HotCustom from '../common/HotCustom';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

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
    // image 사이즈나오면 변경 예정
    setIsFooterVisible(scrollY > 500);
  };

  const reanderMainPageHeader = () => {
    return (
      <Header
        transparent={isHeaderTransparent}
        leftSection={isHeaderTransparent ? <ImgLogoLight /> : <ImgLogoDark />}
        rightSection={
          <MainHeaderButton setIsSideMenuOpen={setIsSideMenuOpen} light={isHeaderTransparent} />
        }
        fixed={true}
      />
    );
  };

  return (
    <PageLayout
      renderHeader={reanderMainPageHeader}
      footer={<MainFooter isFooterVisible={isFooterVisible} />}
    >
      <MainBanner />
      <HotCustom />
      <MainEventBanner />
      <MainTheme />
      <MainStyle />
      <SideMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
    </PageLayout>
  );
};

export default MainPage;
