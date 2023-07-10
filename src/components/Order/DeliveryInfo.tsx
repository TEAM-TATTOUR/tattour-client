import styled from "styled-components"

const DeliveryInfo = () => {

    return (
        <St.Wrapper>
            <St.Title>
                배송 정보 
            </St.Title>
            <St.InfoList>
                <St.Info>
                    <label htmlFor="receiver">수령인</label>
                    <input type="text" id="receiver" name="receiver" placeholder="홍길동"/>
                </St.Info>
                <St.Info>
                    <label htmlFor="phone">연락처</label>
                    <input type="tel" id="phone" name="phone" placeholder="010-0000-0000" maxLength="13"/>
                </St.Info>
                <St.Info>
                    <label>배송지</label>
                    <St.AddressBox>
                        <input type="text" name="postcode" placeholder="우편번호" disabled/>
                        <St.SearchBtn type="button">우편번호 검색</St.SearchBtn>
                        <input type="text" name="address" placeholder="주소" disabled/>
                        <input type="text" name="detail" placeholder="상세주소"/>
                    </St.AddressBox>
                </St.Info>
            </St.InfoList>

        </St.Wrapper>

    )
}

export default DeliveryInfo

const St = {
    Wrapper : styled.section`
        padding : 2.8rem 2rem 3.6rem 2rem
    `,
    Title : styled.h2`
        margin-left: 0.2rem;
        
        ${({ theme }) => theme.fonts.title_semibold_18};
        color: ${({ theme }) => theme.colors.gray8};
    `,
    InfoList : styled.ul`
        display: flex;
        flex-direction: column;
        gap: 2rem;

        margin-top: 2.2rem;
    `,
    Info : styled.li`

        & > label {
            margin: 2rem 0rem 1rem 0rem;

            ${({ theme }) => theme.fonts.body_medium_14};
            color: ${({ theme }) => theme.colors.gray3};
        }
        & input {
            width: 100%;
            padding: 1.2rem 2rem;
            margin-top: 1rem;
            background-color: ${({ theme }) => theme.colors.bg};
            border-width: 0rem;
            border-radius: 0.5rem;
            ${({ theme }) => theme.fonts.body_medium_16};
            
            &::placeholder {
                color: ${({ theme }) => theme.colors.gray2};
            }

            &:nth-child(3), &:nth-child(4) {
                grid-column: 1 / 3;
            }
        }

    `,
    AddressBox : styled.div`
        display: grid;
        grid-template-columns: 21.5rem 1fr;
    `,
    SearchBtn : styled.button`
        padding: 1.3rem 1.6rem;
        margin: 1rem 0rem 0rem 1.2rem;

        background-color: ${({ theme }) => theme.colors.gray7};
        border-radius: 0.6rem;

        ${({ theme }) => theme.fonts.body_semibold_14};
        color: ${({ theme }) => theme.colors.white};
    `,

}