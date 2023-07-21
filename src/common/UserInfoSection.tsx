import { useLocation, useNavigate } from 'react-router-dom';
import useGetUserProfile from '../libs/hooks/useGetUserProfile';
import { styled } from 'styled-components';

const UserInfoSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currURL = location.pathname;

  const handleClickChargeBtn = () => {
    navigate('/point-charge', {
      state: {
        redirectURL: currURL,
      },
    });
  };

  const { response, error, loading } = useGetUserProfile();

  return (
    !error &&
    !loading && (
      <St.SideMenuUserInfoSection>
        <St.SideMenuUserName>
          {response?.name}
          <span>님</span>
        </St.SideMenuUserName>
        <St.SideMenuUserPointWrapper>
          <St.SideMenuUserPointTitle>보유 포인트</St.SideMenuUserPointTitle>
          <St.SideMenuUserPointTextWrapper>
            <St.SideMenuUserPoint>{response?.point.toLocaleString()}</St.SideMenuUserPoint>
            <span>P</span>
          </St.SideMenuUserPointTextWrapper>
          <St.SideMenuUserPointChargeButton onClick={handleClickChargeBtn}>
            충전하기
          </St.SideMenuUserPointChargeButton>
        </St.SideMenuUserPointWrapper>
      </St.SideMenuUserInfoSection>
    )
  );
};

const St = {
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

      margin-left: 0.4rem;
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

export default UserInfoSection;
