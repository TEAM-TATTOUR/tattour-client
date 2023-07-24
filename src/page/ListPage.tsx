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

  const [isSortOpen, setSortOpen] = useState(false);
  const [isGenreOpen, setGenreOpen] = useState(false);
  const [isStyleOpen, setStyleOpen] = useState(false);
  const [buttonName, setButtonName] = useState([
    '정렬',
    `${state && type === '장르' ? name : '장르'}`,
    `${state && type === '스타일' ? name : '스타일'}`,
  ]);
  const [, setSelected] = useState(false);
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
        setSortOpen={setSortOpen}
        setGenreOpen={setGenreOpen}
        setStyleOpen={setStyleOpen}
        buttonName={buttonName}
      />
      <FilterBottom
        isSortOpen={isSortOpen}
        setSortOpen={setSortOpen}
        isGenreOpen={isGenreOpen}
        setGenreOpen={setGenreOpen}
        isStyleOpen={isStyleOpen}
        setStyleOpen={setStyleOpen}
        buttonName={buttonName}
        setButtonName={setButtonName}
        setSelected={setSelected}
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
