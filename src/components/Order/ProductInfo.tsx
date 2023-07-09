import styled from "styled-components";

const ProductInfo = () => {
  return (
    <St.Wrapper>
        <St.Image/>
        <St.InfoContainer>
            <St.Name>

            </St.Name>
            <St.Description>
                <St.OriginalPrice>

                </St.OriginalPrice>
                <St.ItemPrice>

                </St.ItemPrice>
                <St.Line>

                </St.Line>
                <St.Count>

                </St.Count>
            </St.Description>
        </St.InfoContainer>
    </St.Wrapper>
  )
}

export default ProductInfo

const St = {
    Wrapper : styled.section`
        display: flex;
        flex-direction: column;
    `,
    Image : styled.img`
    
    `,
    InfoContainer : styled.article`
    
    `, 
    Name : styled.h1`
    
    `,
    Description : styled.p`
        

    `,
    OriginalPrice : styled.span`
    
    `,
    ItemPrice : styled.span`
    
    `,
    Line : styled.div`
    
    `,
    Count : styled.span`
    
    `,
    

}