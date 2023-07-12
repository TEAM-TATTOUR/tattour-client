import styled from "styled-components"

const DetailInfo = () => {
    const DISCOUNT = 5;
    const FINAL_PRICE = 2500;
    const ORIGINAL_PRICE = 4000;
    const TAG = ['심플한','레터링'];

  return (
    <St.Wrapper>
        <St.Header>
            <St.Name>우리집고양이츄르</St.Name>
            <St.New>NEW!</St.New>
        </St.Header>
        <St.Discount>{DISCOUNT}%</St.Discount>
        <St.FinalPrice>
            {FINAL_PRICE.toLocaleString()}
            <span>원</span>
        </St.FinalPrice>
        <St.OriginalPrice>{ORIGINAL_PRICE.toLocaleString()}원</St.OriginalPrice>
        <St.LightLine/>
        <St.Description>
            <span>구성</span>
            <p>타투스티커 2EA + 알콜 스왑 2EA</p>
            <span>크기</span>
            <p>90*120 (mm)</p>
            <span>작가</span>
            <p>강** 님</p>
        </St.Description>
        <St.BoldLine/>
        <St.TagContainer>
            {TAG.map((el)=>
                <St.Tag>{el}</St.Tag> 
            )}
        </St.TagContainer>
        <St.DetailText>
            우리집고양이는 츄르를 좋아하는데요. 매우 좋아합니다. 아주 
            많이 좋아하구요. 우주만큼 땅만큼 좋아합니다. 사실은 고양이
            가 아닙니다. 어쩌고 저쩌고 어쩌고 저쩌고...어쩌고 저쩌고 어
            쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고....어쩌고 저쩌고 어
            쩌고 저쩌고 어쩌고 저쩌고 어쩌고 저쩌고...
        </St.DetailText>
        <St.Button>더보기</St.Button>

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
        ${({ theme }) => theme.fonts.title_semibold_18};
        color: ${({ theme }) => theme.colors.gray6};
    `,
    New : styled.span`
        ${({ theme }) => theme.fonts.detail_medium_12};
        color: ${({ theme }) => theme.colors.pink3};
    `,
    Discount : styled.span`
        ${({ theme }) => theme.fonts.title_extrabold_22};
        color: ${({ theme }) => theme.colors.pink5};
    `,
    FinalPrice : styled.span`
        ${({ theme }) => theme.fonts.title_extrabold_22};
        color: ${({ theme }) => theme.colors.gray7};

        & > span {
            ${({ theme }) => theme.fonts.body_medium_16};
        }
    `,
    OriginalPrice : styled.span`
        ${({ theme }) => theme.fonts.title_line_medium_16};
        color: ${({ theme }) => theme.colors.gray1};
    `,
    LightLine : styled.hr`
        height: 0.1rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-width: 0rem;
    `,
    Description : styled.p`

        & > span {
            ${({ theme }) => theme.fonts.body_medium_14};
            color: ${({ theme }) => theme.colors.gray3};
        }

        & > p {
            ${({ theme }) => theme.fonts.body_medium_14};
            color: ${({ theme }) => theme.colors.gray4};
        }
    
    `,
    BoldLine : styled.hr`
        height: 1.3rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-width: 0rem;
    `,
    TagContainer : styled.article`
    
    `,
    Tag : styled.span`
        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray4};
    `,
    DetailText : styled.p`
        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray4};
    `,
    Button : styled.button`
        ${({ theme }) => theme.fonts.body_underline_medium_14};
        color: ${({ theme }) => theme.colors.gray5};
    `
}