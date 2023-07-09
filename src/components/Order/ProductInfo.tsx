import styled from "styled-components";

const ProductInfo = () => {

    // 더미데이터 
    // 추후 서버에서 데이터패칭할 땐, data.itemPrice, data.originalPrice, data.count 쓸 예정 
    const ORIGINAL_PRICE = 4000;
    const ITEM_PRICE = 2500;
    const COUNT = 1;

  return (
    <St.Wrapper>
        <St.Image/>
        <St.InfoContainer>
            <St.Name>
                우리집고양이츄르
            </St.Name>
            <St.Description>
                <St.ItemPrice>
                    {ITEM_PRICE.toLocaleString()}원
                </St.ItemPrice>
                <St.OriginalPrice>
                    {ORIGINAL_PRICE.toLocaleString()}원
                </St.OriginalPrice>
                <St.Line></St.Line>
                <St.Count>
                    {COUNT}개
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

        padding: 1.4rem 0rem 2.4rem 2rem;
    `,
    Image : styled.div`
        width: 8.4rem;
        height: 8.4rem;
        
        background-color: ${({ theme }) => theme.colors.gray0};
        border-width: 0rem;
    `,
    InfoContainer : styled.article`
        margin : 0.2rem 0rem 0rem 2rem;
    `, 
    Name : styled.h1`
        ${({ theme }) => theme.fonts.title_semibold_16};
        color: ${({ theme }) => theme.colors.gray8};
    `,
    Description : styled.div`
        display: flex;
        align-items: center;
        gap: 0.8rem;

        margin-top: 0.7rem;
    `,
    ItemPrice : styled.span`
        ${({ theme }) => theme.fonts.title_semibold_16};
        color: ${({ theme }) => theme.colors.gray6};
    `,
    OriginalPrice : styled.span`
        ${({ theme }) => theme.fonts.body_line_medium_14};
        color: ${({ theme }) => theme.colors.gray1};
    `,
    Line : styled.div`
        width: 0.1rem;
        height: 1.4rem;
        //실제 1.2rem-gap수치0.8rem 한것. 추후 할인 어떻게 들어갈지 정해지면 수정 예정 
        margin: 0rem 0.4rem; 
        background-color: ${({ theme }) => theme.colors.gray1};
    `,
    Count : styled.span`
        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray3};
    `,
    

}