import MainFooter from '../components/MainPage/MainFooter';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import MainBanner from '../components/MainPage/MainBanner';
import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { ImgLogoDark, ImgLogoLight } from '../assets/icon';
import MainHeaderButton from '../components/MainPage/MainHeaderButton';
import MainTheme from '../components/MainPage/MainTheme';
// import MainEventBanner from '../components/MainPage/MainEventBanner';
import MainStyle from '../components/MainPage/MainStyle';
import SideMenu from '../common/SideMenu';
import HotCustom from '../common/HotCustom';
import Toast from '../common/ToastMessage/Toast';
// import { useLocation } from 'react-router';
// import ChargePointCompleteModal from '../common/Modal/ChargePointModal/ChargePointCompleteModal';
import MainArticle from '../components/MainPage/MainArticle';

const MainPage = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [toast, setToast] = useState<boolean>(false);
  // const [, setIsOpenCompletModal] = useState(false);

  // const location = useLocation();

  // const [isPointModalOpen, setIsPointModalOpen] = useState(
  //   location.state?.isPointModalOpen || false,
  // );

  // const chargeAmount = location.state ? location.state.chargeAmount : null;
  // const redirectURL = location.state ? location.state.redirectURL : null;

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
    setIsFooterVisible(scrollY > 440);
  };

  const reanderMainPageHeader = () => {
    return (
      <Header
        transparent={isHeaderTransparent}
        leftSection={
          isHeaderTransparent ? (
            <ImgLogoLight onClick={() => window.location.reload()} />
          ) : (
            <ImgLogoDark onClick={() => window.location.reload()} />
          )
        }
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
      <HotCustom isList={false} />
      {/* <MainEventBanner setToast={setToast} /> */}
      <MainTheme />
      <MainStyle />
      <MainArticle />
      {toast && <Toast setToast={setToast} text='이미 참여한 이벤트예요' />}
      <SideMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
      {/* {isPointModalOpen && chargeAmount && redirectURL && (
        <ChargePointCompleteModal
          setModalOn={setIsPointModalOpen}
          chargeAmount={chargeAmount}
          redirectURL={redirectURL}
        />
      )} */}
    </PageLayout>
  );
};

export default MainPage;
