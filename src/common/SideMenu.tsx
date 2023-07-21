import { styled } from 'styled-components';
import { IcCustom, IcShop, IcMy } from '../assets/icon';
import { useEffect } from 'react';
import SideMenuUserInfo from './SideMenuUserInfo';
import { useNavigate } from 'react-router-dom';
import { IcInformation } from '../assets/icon';
import { getAccessToken, removeAccessToken } from '../libs/api';

interface SideMenuProps {
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu = ({ isSideMenuOpen, setIsSideMenuOpen }: SideMenuProps) => {
  const isLogin = getAccessToken() !== null;

  const navigate = useNavigate();

  const handelClickShopButton = () => {
    navigate('/list');
  };

  const handleClickCustomButton = () => {
    navigate('/onboarding');
  };

  const handleClickMyTattooButton = () => {
    navigate('/my-tattoo');
  };

  const NAV_MENU_ITEM = [
    {
      icon: <IcShop />,
      text: '타투 샵',
      clickHandler: handelClickShopButton,
    },
    {
      icon: <IcCustom />,
      text: '커스텀 타투 신청',
      clickHandler: handleClickCustomButton,
    },
    {
      icon: <IcMy />,
      text: '내 타투',
      clickHandler: handleClickMyTattooButton,
    },
  ];

  useEffect(() => {
    // scorll lock
    if (isSideMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSideMenuOpen]);

  const handleClickBackDrop = () => {
    setIsSideMenuOpen(false);
  };

  const handleClickLogOutButton = () => {
    // remove access token
    removeAccessToken();
    // redirect to home
    navigate('/');
    setIsSideMenuOpen(false);
  };

  return (
    <>
      <St.BackDrop onClick={handleClickBackDrop} $isSideMenuOpen={isSideMenuOpen} />
      <St.SideMenuWrapper $isSideMenuOpen={isSideMenuOpen}>
        <SideMenuUserInfo isLogin={isLogin} />
        <St.SideMenuItemSection>
          <St.SideMenuItemWrapper>
            {NAV_MENU_ITEM.map(({ icon, text, clickHandler }) => (
              <li key={text}>
                <button onClick={clickHandler}>
                  {icon}
                  <St.SideMenuItemText>{text}</St.SideMenuItemText>
                </button>
              </li>
            ))}
          </St.SideMenuItemWrapper>
        </St.SideMenuItemSection>
        <St.SideMenuEtcButtonWrapper>
          <a
            // 약관 동의 페이지
            href='https://hallowed-passive-714.notion.site/c96132451bf54800ab488d21a12a3a3f?pvs=4'
            target='_blank'
            rel='noreferrer'
          >
            <IcInformation />
          </a>
          <St.SideMenuCSButtonWrapper>
            <St.SideMenuCSButton type='button'>문의하기</St.SideMenuCSButton>
            {isLogin && (
              <>
                <St.Delimeter />
                <St.SideMenuLogOutButton type='button' onClick={handleClickLogOutButton}>
                  로그아웃
                </St.SideMenuLogOutButton>
              </>
            )}
          </St.SideMenuCSButtonWrapper>
        </St.SideMenuEtcButtonWrapper>
      </St.SideMenuWrapper>
    </>
  );
};

const St = {
  BackDrop: styled.div<{ $isSideMenuOpen: boolean }>`
    position: fixed;
    display: ${({ $isSideMenuOpen }) => ($isSideMenuOpen ? 'block' : 'none')};
    right: 0;
    top: 0;
    z-index: 998;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  `,

  SideMenuWrapper: styled.div<{ $isSideMenuOpen: boolean }>`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;
    transform: ${({ $isSideMenuOpen }) =>
      $isSideMenuOpen ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.1s ease-in-out;

    width: 24rem;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.bg};
  `,

  SideMenuItemSection: styled.section`
    padding-left: 3rem;
    padding-top: 3.4rem;
  `,

  SideMenuItemWrapper: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.2rem;

    & > li > button {
      display: flex;
      align-items: center;

      padding: 0rem;
    }
  `,

  SideMenuItemText: styled.span`
    margin-left: 0.8rem;

    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,

  SideMenuEtcButtonWrapper: styled.div`
    position: fixed;
    bottom: 3.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 3rem;
    padding-right: 2.4rem;

    text-align: center;

    & > a {
      height: 2rem;
    }
  `,

  SideMenuCSButtonWrapper: styled.div`
    display: flex;
    align-items: center;
  `,

  SideMenuCSButton: styled.button`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,

  Delimeter: styled.div`
    width: 0.1rem;
    height: 1.4rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray1};
  `,

  SideMenuLogOutButton: styled.button`
    ${({ theme }) => theme.fonts.body_medium_14};
    color: ${({ theme }) => theme.colors.gray3};
  `,
};

export default SideMenu;
