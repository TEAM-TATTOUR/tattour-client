import { styled } from 'styled-components';
import { IcArrowRightLight } from '../assets/icon';
import UserInfoSection from './UserInfoSection';

const SideMenuUserInfo = ({ isLogin }: { isLogin: boolean }) => {
  return isLogin ? (
    <UserInfoSection />
  ) : (
    <St.SideMenuAnonymousSection>
      <St.SideMenuLoginButton>
        <St.SideMenuAnoymousTitle>로그인이 필요합니다</St.SideMenuAnoymousTitle>
        <IcArrowRightLight />
      </St.SideMenuLoginButton>
    </St.SideMenuAnonymousSection>
  );
};

const St = {
  SideMenuAnonymousSection: styled.section`
    padding: 2.9rem 0 2.9rem 3rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  SideMenuLoginButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem;
  `,

  SideMenuAnoymousTitle: styled.h2`
    font: ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray1};
  `,
};

export default SideMenuUserInfo;
