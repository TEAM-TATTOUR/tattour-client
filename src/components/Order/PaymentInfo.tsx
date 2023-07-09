import styled from "styled-components"

const PaymentInfo = () => {
  return (
    <St.Wrapper>
        <St.Title>
            결제 정보
        </St.Title>
        <St.TextBox>
            <St.MainText>총 결제 금액</St.MainText>
            <St.MainPrice>5500</St.MainPrice>
            <St.MainText>원</St.MainText>
        </St.TextBox>
        <St.TextBox>
            <St.SubText>총 상품 금액</St.SubText>
            <St.SubText>2500원</St.SubText>
        </St.TextBox>
        <St.TextBox>
            <St.SubText>총 배송비</St.SubText>
            <St.SubText>3000원</St.SubText>
        </St.TextBox>

    </St.Wrapper>
  )
}

export default PaymentInfo

const St = {
    Wrapper : styled.section`
        padding : 2.8rem 2rem 3.6rem 2rem
    `,
    Title : styled.h2`
        margin-left: 0.2rem;
        
        ${({ theme }) => theme.fonts.title_semibold_18};
        color: ${({ theme }) => theme.colors.gray8};
    `,
    TextBox : styled.article`
        display: flex;
        justify-content: space-between;

        width: 100%;
    `,
    MainText: styled.span`
        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray4};
    `,
    MainPrice: styled.span`
        ${({ theme }) => theme.fonts.title_extrabold_24};
        color: ${({ theme }) => theme.colors.pink5};
    `,
    SubText: styled.p`
        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray2};
    `,
}