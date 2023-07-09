import styled from "styled-components"

const PaymentInfo = () => {
  return (
    <St.Wrapper>
        <St.Title>
            결제 정보
        </St.Title>
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
}