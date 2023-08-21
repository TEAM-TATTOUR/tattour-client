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
          {response?.homeUserInfo.name}
          <span>님</span>
        </St.SideMenuUserName>
        <St.SideMenuUserPointWrapper>
          <St.SideMenuUserPointTitle>보유 포인트</St.SideMenuUserPointTitle>
          <St.SideMenuUserPointTextWrapper>
            <St.SideMenuUserPoint>
              {response?.homeUserInfo.point.toLocaleString()}
            </St.SideMenuUserPoint>
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

    ${({ theme }) => theme.fonts.title_bold_20};
    color: ${({ theme }) => theme.colors.white};

    & > span {
      display: inline-block;

      margin-left: 0.4rem;
      ${({ theme }) => theme.fonts.title_bold_16};
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
      ${({ theme }) => theme.fonts.title_bold_20};
      color: ${({ theme }) => theme.colors.gray2};
    }
  `,

  SideMenuUserPointTitle: styled.h2`
    ${({ theme }) => theme.fonts.detail_bold_12};
    color: ${({ theme }) => theme.colors.gray2};
  `,

  SideMenuUserPoint: styled.p`
    ${({ theme }) => theme.fonts.title_bold_24};
    color: ${({ theme }) => theme.colors.white};
  `,

  SideMenuUserPointChargeButton: styled.button`
    width: 7.9rem;
    height: 3.1rem;
    margin-top: 1.4rem;
    padding: 0;

    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 0.5rem;

    ${({ theme }) => theme.fonts.title_bold_16};
    color: ${({ theme }) => theme.colors.gray8};
  `,
};

export default UserInfoSection;
