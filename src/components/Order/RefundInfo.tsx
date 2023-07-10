import styled from "styled-components"

const RefundInfo = () => {
  return (
    <St.Wrapper>
        <St.Checkbox type="checkbox"/>
        <St.Button>
            <St.Text></St.Text>
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
        
    `,
    Button : styled.article`
    
    `,
    Text : styled.p`
    
    `,
    Arrow : styled.i`
        
    `
}