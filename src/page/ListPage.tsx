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
import { FILTER_DEFAULT } from '../constants/ListInfo';

export interface buttonType {
  default: string;
  value: string;
}

const ListPage = () => {
  const { SORT, GENRE, STYLE } = FILTER_DEFAULT;
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const type = state && (state as { type: string }).type;
  const name = state && (state as { name: string }).name;

  const [buttons, setButtons] = useState<buttonType[]>([
    {
      default: SORT,
      value: SORT,
    },
    {
      default: GENRE,
      value: state && type === GENRE ? name : GENRE,
    },
    {
      default: STYLE,
      value: state && type === STYLE ? name : STYLE,
    },
  ]);

  const [isSheetOpen, setSheetOpen] = useState(-1);
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
      <TattooList setSheetOpen={setSheetOpen} buttons={buttons} />
      <FilterSheet
        isSheetOpen={isSheetOpen}
        setSheetOpen={setSheetOpen}
        buttons={buttons}
        setButtons={setButtons}
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
