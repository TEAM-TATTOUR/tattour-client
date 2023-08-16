import FilterBottom from '../components/List/FilterBottom';
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

const ListPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const type = state && (state as { type: string }).type;
  const name = state && (state as { name: string }).name;

  const DEFAULT_BUTTON_NAME = ['정렬', '장르', '스타일'];
  const [isSheetOpen, setSheetOpen] = useState(-1); // -1이 바텀시트 off 상태

  // state && : 선택된 필터가 있을 경우
  // state.type이 장르일 때 버튼명을 state.name 값으로, 아니면 '장르'
  // state.type이 스타일일 때 버튼명을 state.name 값으로, 아니면 '스타일'
  const [buttonName, setButtonName] = useState([
    '정렬',
    `${state && type === '장르' ? name : '장르'}`,
    `${state && type === '스타일' ? name : '스타일'}`,
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
      <HotCustom />
      <St.Line />
      <TattooList
        setSheetOpen={setSheetOpen}
        buttonName={buttonName}
        defaultName={DEFAULT_BUTTON_NAME}
      />
      <FilterBottom
        isSheetOpen={isSheetOpen}
        setSheetOpen={setSheetOpen}
        buttonName={buttonName}
        setButtonName={setButtonName}
        defaultName={DEFAULT_BUTTON_NAME}
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
