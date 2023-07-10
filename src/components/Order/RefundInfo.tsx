import styled from "styled-components"

const RefundInfo = () => {
  return (
    <St.Wrapper>
        <St.Checkbox type="checkbox"/>
        <St.Button>
            <St.Text>타투어 환불 정책에 동의합니다</St.Text>
            <St.Arrow/>
        </St.Button>
    </St.Wrapper>
  )
}

export default RefundInfo

const St = {
    Wrapper : styled.section`
        display: flex;
        align-items: center;
        gap: 1.8rem;

        margin: 2.8rem 0rem 4.8rem 2rem;

    `,
    Checkbox : styled.input`
        width: 2.4rem;
        height: 2.4rem;

        background-color: ${({ theme }) => theme.colors.gray0};
        border-radius: 0.4rem;

        &:checked {
            background-color: ${({ theme }) => theme.colors.gray6};
            color: ${({ theme }) => theme.colors.white};
        }
    `,
    Button : styled.article`
        display: flex;
        gap: 0.3rem;
    `,
    Text : styled.p`
        ${({ theme }) => theme.fonts.body_medium_16};
        color: ${({ theme }) => theme.colors.gray4};
    `,
    Arrow : styled.i`
        
    `
}