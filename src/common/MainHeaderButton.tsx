import { styled } from 'styled-components';
import { SetStateAction } from 'react';
import { IcMenuDark, IcMenuLight, IcSearchDark, IcSearchLight } from '../assets/icon';

interface MainHeaderButtonProps {
  setIsSideMenuOpen: React.Dispatch<SetStateAction<boolean>>;
  light: boolean;
}

const MainHeaderButton = ({ setIsSideMenuOpen, light }: MainHeaderButtonProps) => {
  const handleClickNavButton = () => {
    setIsSideMenuOpen(true);
  };

  return (
    <St.ButtonWrapper>
      <St.SearchButton type='button'>
        {light ? <IcSearchLight /> : <IcSearchDark />}
      </St.SearchButton>
      <St.NavButton type='button' onClick={handleClickNavButton}>
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
