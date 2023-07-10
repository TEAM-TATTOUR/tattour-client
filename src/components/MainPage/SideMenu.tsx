import { styled } from 'styled-components';
import { IcCustom, IcShop, IcMy } from '../../assets/icon';
import { useState } from 'react';
import SideMenuUserInfo from './SideMenuUserInfo';

const SideMenu = () => {
  const [isLogin] = useState(false);

  const NAV_MENU_ITEM = [
    {
      icon: <IcShop />,
      text: '타투 스티커',
    },
    {
      icon: <IcCustom />,
      text: '커스텀 타투',
    },
    {
      icon: <IcMy />,
      text: '내 타투',
    },
  ];

  return (
    <St.SideMenuWrapper>
      <SideMenuUserInfo isLogin={isLogin} />
      <St.SideMenuItemSection>
        <St.SideMenuItemWrapper>
          {NAV_MENU_ITEM.map(({ icon, text }) => (
            <li key={text}>
              {icon}
              <St.SideMenuItemText>{text}</St.SideMenuItemText>
            </li>
          ))}
        </St.SideMenuItemWrapper>
      </St.SideMenuItemSection>
      <St.SideMenuEtcButtonWrapper>
        <St.SideMenuCSButton type='button'>문의하기</St.SideMenuCSButton>
        {isLogin && (
          <>
            <St.Delimeter />
            <St.SideMenuLogOutButton type='button'>로그아웃</St.SideMenuLogOutButton>
          </>
        )}
      </St.SideMenuEtcButtonWrapper>
    </St.SideMenuWrapper>
  );
};

const St = {
  SideMenuWrapper: styled.div`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;

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
  `,

  SideMenuItemText: styled.span`
    margin-left: 0.8rem;

    ${({ theme }) => theme.fonts.title_semibold_18};
    color: ${({ theme }) => theme.colors.gray8};
  `,

  SideMenuEtcButtonWrapper: styled.div`
    position: fixed;
    bottom: 3.6rem;
    right: 2.4rem;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
