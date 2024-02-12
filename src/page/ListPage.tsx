import TattooList from '../components/List/TattooList';
import styled from 'styled-components';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { ImgLogoDark } from '../assets/icon';
import Header from '../components/Header';
import HotCustom from '../common/HotCustom';
import MainHeaderButton from '../common/MainHeaderButton';
import SideMenu from '../common/SideMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterSheet from '../components/List/FilterSheet';

export interface buttonType {
  default: string;
  value: string;
}

const ListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // ✅ MainPage의 장르/스타일을 선택했을 때 List로 넘어오는 경우 state로 넘겨줌
  const state = location.state;
  const type = state && (state as { type: string }).type;
  const name = state && (state as { name: string }).name;

  const [buttons, setButtons] = useState<buttonType[]>([
    {
      default: '정렬',
      value: '정렬',
    },
    {
      default: '장르',
      value: state && type === '장르' ? name : '장르',
    },
    {
      default: '스타일',
      value: state && type === '스타일' ? name : '스타일',
    },
  ]);
  const [isSheetOpen, setSheetOpen] = useState(-1); // -1이 바텀시트 off 상태

  const [buttonName, setButtonName] = useState([
    buttons[0].value,
    buttons[1].value,
    buttons[2].value,
  ]);

  // 사이드 메뉴 관리 상태
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const renderListPageHeader = () => {
    const handleClickLogo = () => {
      navigate('/');
    };
    return (
      <Header
        leftSection={<ImgLogoDark onClick={handleClickLogo} />}
        rightSection={<MainHeaderButton setIsSideMenuOpen={setSideMenuOpen} light={false} />}
      />
    );
  };

  return (
    <PageLayout renderHeader={renderListPageHeader}>
      <HotCustom isList={true} />
      <St.Line />
      <TattooList setSheetOpen={setSheetOpen} buttonName={buttonName} buttons={buttons} />
      <FilterSheet
        isSheetOpen={isSheetOpen}
        setSheetOpen={setSheetOpen}
        buttonName={buttonName}
        setButtonName={setButtonName}
        buttons={buttons}
      />
      <SideMenu isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setSideMenuOpen} />
    </PageLayout>
  );
};

export default ListPage;

const St = {
  Line: styled.hr`
    height: 1.3rem;

    background-color: ${({ theme }) => theme.colors.bg};
    border-width: 0rem;
  `,
};
