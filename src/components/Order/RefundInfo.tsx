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