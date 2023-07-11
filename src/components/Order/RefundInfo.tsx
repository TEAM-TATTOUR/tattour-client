import styled from "styled-components"
import { IcArrowRightDark } from "../../assets/icon"
import ic_check from '../../assets/icon/ic_check.svg'
import ic_check_selected from '../../assets/icon/ic_check_selected.svg'

const RefundInfo = () => {
  return (
    <St.Wrapper>
        <St.Checkbox type="checkbox" id="agree"/>
        <label htmlFor="agree"></label>
        <St.Button>
            <St.Text>타투어 환불 정책에 동의합니다</St.Text>
            <IcArrowRightDark/>
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
        display: none;

        & + label {
            display: block;

            width: 2.4rem;
            height: 2.4rem;
            
            background: url(${ic_check});
        }
        &:checked + label {
            display: block;

            width: 2.4rem;
            height: 2.4rem;

            background: url(${ic_check_selected});
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

}