import styled from "styled-components"

const PaymentInfo = () => {

    // 추후 서버통신 시 변수 변경 예정 
    const FINAL_PRICE = 5500;
    const ITEM_PRICE = 2500;
    const DELIVERY_PRICE = 3000;
    const MY_POINT = 10000;
    const LEFT_POINT = 4500;
    const LACK_POINT = 4500;

    return (
        <div>
            <St.PriceContainer>
                <St.Title>
                    결제 정보
                </St.Title>
                <St.TextBox>
                    <St.MainText>총 결제 금액</St.MainText>
                    <St.PriceBox>
                        <St.MainPrice>{FINAL_PRICE.toLocaleString()}</St.MainPrice>
                        <St.MainText>원</St.MainText>
                    </St.PriceBox>
                </St.TextBox>
                <St.TextBox>
                    <St.SubText>총 상품 금액</St.SubText>
                    <St.SubText>{ITEM_PRICE.toLocaleString()}원</St.SubText>
                </St.TextBox>
                <St.TextBox>
                    <St.SubText>총 배송비</St.SubText>
                    <St.SubText>{DELIVERY_PRICE.toLocaleString()}원</St.SubText>
                </St.TextBox>
            </St.PriceContainer>
            <St.LightLine/>
            <St.PointContainer>
                <St.PointText>
                    <St.MainText>보유 포인트</St.MainText>
                    <St.MainText>
                        <span>{MY_POINT.toLocaleString()}</span>
                        <span>P</span>
                    </St.MainText>
                </St.PointText>
                {/* <St.PointText>
                    <St.MainText>남는 포인트</St.MainText>
                    <St.MainText>
                        <span>{LEFT_POINT.toLocaleString()}</span>
                        <span>P</span>
                    </St.MainText>
                </St.PointText> */}
                <St.PointText>
                    <St.MainText>부족한 포인트</St.MainText>
                    <St.MainText>
                        <St.LackText>{LACK_POINT.toLocaleString()}</St.LackText>
                        <span>P</span>
                    </St.MainText>
                </St.PointText>
                <St.ChargeBtn>충전하기</St.ChargeBtn>
            </St.PointContainer>
        </div>
    )
}

export default PaymentInfo

const St = {
    PriceContainer : styled.article`
        padding : 2.8rem 2rem 3.4rem 2rem
    `,
    Title : styled.h2`
        margin: 0rem 0rem 3.2rem 0.2rem;
        
        ${({ theme }) => theme.fonts.title_semibold_18};
        color: ${({ theme }) => theme.colors.gray8};
    `,
    TextBox : styled.article`
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
    `,
    PriceBox : styled.div`
        display: flex;
        align-items: center;
    `,
    MainText: styled.span`
        display: flex;
        align-items: center;

        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray4};

        & > span:nth-child(1) {
            ${({ theme }) => theme.fonts.title_semibold_18};
        }
        & > span:nth-child(2) {
            margin-left: 0.4rem;
            ${({ theme }) => theme.fonts.body_medium_16};
        }
    `,
    LackText: styled.span`
        color: ${({ theme }) => theme.colors.red};
    `,
    MainPrice: styled.span`
        margin: 0rem 0.4rem 0.5rem 0rem;
        ${({ theme }) => theme.fonts.title_extrabold_24};
        color: ${({ theme }) => theme.colors.pink5};
    `,
    SubText: styled.p`
        margin-top: 0.8rem;

        ${({ theme }) => theme.fonts.body_medium_14};
        color: ${({ theme }) => theme.colors.gray2};
    `,
    LightLine: styled.hr`
        height: 0.1rem;

        background-color: ${({ theme }) => theme.colors.gray0};
        border-width: 0rem;
    `,
    PointContainer: styled.article`
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        padding: 3.4rem 2.2rem 3.6rem 2.2rem;
    `,
    PointText: styled.p`
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;    
    `,
    ChargeBtn: styled.button`
        padding: 1.2rem 1.8rem;
        width: 9.1rem;
        height: 4.5rem;
        margin-left: 24.2rem;

        background-color: ${({ theme }) => theme.colors.gray7};
        border-radius: 0.6rem;
        ${({ theme }) => theme.fonts.title_semibold_16};
        color: ${({ theme }) => theme.colors.white};
    `
}