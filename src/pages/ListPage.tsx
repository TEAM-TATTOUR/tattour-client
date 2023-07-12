import FilterBottom from "../components/List/FilterBottom";
import TattooList from "../components/List/TattooList";
import styled from "styled-components";
import { useState } from 'react';
import PageLayout from "../components/PageLayout";
import { ImgLogoDark } from "../assets/icon";
import Header from "../components/Header";
import HotCustom from "../common/HotCustom";

const ListPage = () => {
  const [isSortOpen, setSortOpen] = useState(false);
  const [isGenreOpen, setGenreOpen] = useState(false);
  const [isStyleOpen, setStyleOpen] = useState(false);

  const renderListPageHeader = () => {
    return (
      <Header
        leftSection={<ImgLogoDark />}
      />
    );}

  return (
    <PageLayout
      renderHeader={renderListPageHeader}>
        <HotCustom/>
        <St.Line/>
        <TattooList
          setSortOpen={setSortOpen}
          setGenreOpen={setGenreOpen}
          setStyleOpen={setStyleOpen}
        />
        <FilterBottom
          isSortOpen={isSortOpen} setSortOpen={setSortOpen}
          isGenreOpen={isGenreOpen} setGenreOpen={setGenreOpen}
          isStyleOpen={isStyleOpen} setStyleOpen={setStyleOpen}
        />
    </PageLayout>
  )
}

export default ListPage

const St = {
    Line : styled.hr`
        height: 1.3rem;

        background-color: ${({ theme }) => theme.colors.bg};
        border-width: 0rem;
    `
}