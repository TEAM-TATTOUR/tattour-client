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
};

export default UserInfoSection;
