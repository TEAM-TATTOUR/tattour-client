import styled from "styled-components";

const TattooList = () => {
  return (
    <St.Header>ALL</St.Header>
  )
}

export default TattooList

const St = {
  Header : styled.h1`
  margin: 2.8rem 0rem 2.2rem 2rem;
  ${({ theme }) => theme.fonts.title_semibold_18};  // 추후 유료 font 변경 예정 
  `
}