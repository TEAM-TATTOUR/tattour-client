import styled from "styled-components";
import { IcDownArrow } from "../../assets/icon";
import { useState } from "react";

const TattooList = () => {
  const BUTTON = ['정렬','장르','스타일'];
  const [count,setCount] = useState(17);

  return (
    <St.Wrapper>
      <St.Header>ALL</St.Header>
      <St.BtnContainer>
        {BUTTON.map((el)=>(
          <St.FilterBtn>
            {el}
            <IcDownArrow/>
          </St.FilterBtn>
        ))}
      </St.BtnContainer>
      <St.CountText>전체 {count}개</St.CountText>
    </St.Wrapper>
  )
}

export default TattooList

const St = {
  Wrapper : styled.section`
    display: flex;
    flex-direction: column;
  `,
  Header : styled.h1`
    margin: 2.8rem 0rem 2.2rem 2rem;
    ${({ theme }) => theme.fonts.title_semibold_18};  // 추후 유료 font 변경 예정 
  `,
  BtnContainer : styled.article`
    display:flex;
    gap: 1rem;
    margin-left: 2rem;
  `,
  FilterBtn : styled.button`
    display: flex;
    padding: 0.6rem 0.7rem 0.6rem 1.3rem;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
  CountText: styled.p`
    margin: 2.8rem 0rem 1.6rem 2.2rem;
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.body_medium_14};
  `
}