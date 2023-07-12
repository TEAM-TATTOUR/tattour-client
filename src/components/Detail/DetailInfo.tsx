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
            <span>타투스티커 2EA + 알콜 스왑 2EA</span>
            <span>크기</span>
            <span>90*120 (mm)</span>
            <span>작가</span>
            <span>강** 님</span>
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