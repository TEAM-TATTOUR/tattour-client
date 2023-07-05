import TattooList from "../components/List/TattooList";
import styled from "styled-components";

const ListPage = () => {
  return (
    <div>
        ListPage
        <St.Line/>
        <TattooList/>
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