import styled from "styled-components"

const PaymentInfo = () => {
  return (
    <St.Wrapper>
        <St.Title>
            결제 정보
        </St.Title>
        <St.TextBox>
            <St.MainText>총 결제 금액</St.MainText>
            <St.PriceBox>
                <St.MainPrice>5500</St.MainPrice>
                <St.MainText>원</St.MainText>
            </St.PriceBox>
        </St.TextBox>
        <St.TextBox>
            <St.SubText>총 상품 금액</St.SubText>
            <St.SubText>2500원</St.SubText>
        </St.TextBox>
        <St.TextBox>
            <St.SubText>총 배송비</St.SubText>
            <St.SubText>3000원</St.SubText>
        </St.TextBox>
        <St.LightLine/>

    </St.Wrapper>
  )
}

export default PaymentInfo

const St = {
    Wrapper : styled.section`
        padding : 2.8rem 2rem 3.6rem 2rem
    `,
    Title : styled.h2`
        margin: 0rem 0rem 3.2rem 0.2rem;
        
        ${({ theme }) => theme.fonts.title_semibold_18};
        color: ${({ theme }) => theme.colors.gray8};
    `,
    TextBox : styled.article`
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        &:nth-child(2) {
            margin-top: 1.3rem;
        }
        &:nth-child(3) {
            margin-top: 0.8rem;
        }
    `,
    PriceBox : styled.div`
        display: flex;
        align-items: center;
    `,
    MainText: styled.span`
        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray4};
    `,
    MainPrice: styled.span`
        margin: 0rem 0.4rem 0.5rem 0rem;
        ${({ theme }) => theme.fonts.title_extrabold_24};
        color: ${({ theme }) => theme.colors.pink5};
    `,
    SubText: styled.p`
        margin-top: 0.8rem;

        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray2};
    `,
    LightLine: styled.hr`
        margin: 3.4rem 0rem 3.7rem 0rem;
        height: 0.1rem;

        background-color: ${({ theme }) => theme.colors.gray0};
        border-width: 0rem;
    `
}