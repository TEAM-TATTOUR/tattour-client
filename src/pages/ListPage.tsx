import FilterBottom from "../components/List/FilterBottom";
import TattooList from "../components/List/TattooList";
import styled from "styled-components";
import { useState } from 'react';

const ListPage = () => {
  const [isSortOpen, setSortOpen] = useState(false);
  const [isGenreOpen, setGenreOpen] = useState(false);
  const [isStyleOpen, setStyleOpen] = useState(false);
  const [buttonName, setButtonName] = useState(['정렬','장르','스타일']);

  return (
    <div>
        ListPage
        <St.Line/>
        <TattooList
          setSortOpen={setSortOpen}
          setGenreOpen={setGenreOpen}
          setStyleOpen={setStyleOpen}
          buttonName={buttonName}
        />
        <FilterBottom
          isSortOpen={isSortOpen} setSortOpen={setSortOpen}
          isGenreOpen={isGenreOpen} setGenreOpen={setGenreOpen}
          isStyleOpen={isStyleOpen} setStyleOpen={setStyleOpen}
          buttonName={buttonName} setButtonName={setButtonName}
        />
    </div>
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