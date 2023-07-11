import { styled } from 'styled-components';
import { IcMenuDark, IcMenuLight, IcSearchDark, IcSearchLight } from '../../assets/icon';
import { SetStateAction } from 'react';

const MainHeaderButton = ({
  setIsSideMenuOpen,
  light,
}: {
  setIsSideMenuOpen: React.Dispatch<SetStateAction<boolean>>;
  light: boolean;
}) => {
  const handleClickNavButton = () => {
    setIsSideMenuOpen(true);
  };

  return (
    <St.ButtonWrapper>
      <St.SearchButton>{light ? <IcSearchLight /> : <IcSearchDark />}</St.SearchButton>
      <St.NavButton onClick={handleClickNavButton}>
        {light ? <IcMenuLight /> : <IcMenuDark />}
      </St.NavButton>
    </St.ButtonWrapper>
  );
};

const St = {
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6.2rem;
  `,

  SearchButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  `,

  NavButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  `,
};

export default MainHeaderButton;
