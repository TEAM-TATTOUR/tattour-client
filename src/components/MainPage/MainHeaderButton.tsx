import { styled } from 'styled-components';
import { IcMenuDark, IcMenuLight, IcSearchDark, IcSearchLight } from '../../assets/icon';

const MainHeaderButton = ({ light }: { light: boolean }) => {
  return (
    <St.ButtonWrapper>
      <St.SearchButton>{light ? <IcSearchLight /> : <IcSearchDark />}</St.SearchButton>
      <St.NavButton>{light ? <IcMenuLight /> : <IcMenuDark />}</St.NavButton>
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
