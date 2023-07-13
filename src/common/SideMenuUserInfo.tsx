import { styled } from 'styled-components';
import { IcArrowRightLight } from '../assets/icon';

const SideMenuUserInfo = ({ isLogin }: { isLogin: boolean }) => {
  const point = 2000;

  return isLogin ? (
    <St.SideMenuUserInfoSection>
      <St.SideMenuUserName>
        김희진
        <span>님</span>
      </St.SideMenuUserName>
      <St.SideMenuUserPointWrapper>
        <St.SideMenuUserPointTitle>보유 포인트</St.SideMenuUserPointTitle>
        <St.SideMenuUserPointTextWrapper>
          <St.SideMenuUserPoint>{point.toLocaleString()}</St.SideMenuUserPoint>
          <span>P</span>
        </St.SideMenuUserPointTextWrapper>
        <St.SideMenuUserPointChargeButton>충전하기</St.SideMenuUserPointChargeButton>
      </St.SideMenuUserPointWrapper>
    </St.SideMenuUserInfoSection>
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

  SideMenuUserInfoSection: styled.section`
    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  SideMenuUserName: styled.div`
    padding: 2.8rem 0 2.8rem 3rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray7};

    font: ${({ theme }) => theme.fonts.title_semibold_20};
    color: ${({ theme }) => theme.colors.white};

    & > span {
      display: inline-block;
      font: ${({ theme }) => theme.fonts.body_medium_16};
      color: ${({ theme }) => theme.colors.gray2};
    }
  `,

  SideMenuUserPointWrapper: styled.article`
    display: flex;
    flex-direction: column;

    margin: 2.8rem 0 3.6rem 3rem;
  `,

  SideMenuUserPointTextWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;

    margin-top: 0.5rem;

    & > span {
      margin-left: 0.4rem;
      font: ${({ theme }) => theme.fonts.title_semibold_20};
      color: ${({ theme }) => theme.colors.gray2};
    }
  `,

  SideMenuUserPointTitle: styled.h2`
    font: ${({ theme }) => theme.fonts.detail_medium_12};
    color: ${({ theme }) => theme.colors.gray2};
  `,

  SideMenuUserPoint: styled.p`
    font: ${({ theme }) => theme.fonts.title_semibold_24};
    color: ${({ theme }) => theme.colors.white};
  `,

  SideMenuUserPointChargeButton: styled.button`
    width: 7.9rem;
    height: 3.1rem;
    margin-top: 1.4rem;

    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 0.5rem;

    font: ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray8};
  `,
};

export default SideMenuUserInfo;
