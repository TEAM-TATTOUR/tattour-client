import styled from "styled-components"

const DetailInfo = () => {
  return (
    <St.Wrapper>
        <St.Header>
            <St.Name></St.Name>
            <St.New></St.New>
        </St.Header>
        <St.Discount></St.Discount>
        <St.FinalPrice></St.FinalPrice>
        <St.OriginalPrice></St.OriginalPrice>
        <St.LightLine/>
        <St.Description>

        </St.Description>
        <St.BoldLine/>
        <St.TagContainer>
            {/* mapping */}
            <St.Tag></St.Tag> 
        </St.TagContainer>
        <St.DetailText>

        </St.DetailText>
        <St.Button></St.Button>

    </St.Wrapper>
  )
}

export default DetailInfo

const St = {
    Wrapper : styled.section`
        
    `,
    Header : styled.header`
    
    `,
    Name : styled.h1`
    
    `,
    New : styled.span`
    
    `,
    Discount : styled.span`
    
    `,
    FinalPrice : styled.span`
    
    `,
    OriginalPrice : styled.span`
        
    `,
    LightLine : styled.hr`
    
    `,
    Description : styled.p`
    
    `,
    BoldLine : styled.hr`
    
    `,
    TagContainer : styled.article`
    
    `,
    Tag : styled.span`
    
    `,
    DetailText : styled.p`
        
    `,
    Button : styled.button`
    
    `
}