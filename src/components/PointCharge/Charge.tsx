import { styled } from 'styled-components';
import { IcCheckSmallGray } from '../../assets/icon';

const Charge = () => {
  return (
    <St.ChargeWrapper>
      <St.ChargeInfoContainer>
        <St.ChargeInfoTitle>충전할 금액을 입력해주세요</St.ChargeInfoTitle>
        <St.ChargeInfoDetailWrapper>
          <St.ChargeInfoDetail>
            <IcCheckSmallGray />
            <span>구매, 커스텀 등 타투어 내 거래 시 필요해요</span>
          </St.ChargeInfoDetail>
          <St.ChargeInfoDetail>
            <IcCheckSmallGray />
            <span>1,000원 단위로만 충전할 수 있어요</span>
          </St.ChargeInfoDetail>
        </St.ChargeInfoDetailWrapper>
      </St.ChargeInfoContainer>
      <St.ChargeInputContainer>
        <St.ChargeUnit>원</St.ChargeUnit>
        <St.ChargeInput type='number' autoFocus />
      </St.ChargeInputContainer>
    </St.ChargeWrapper>
  );
};

export default Charge;

const St = {
  ChargeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem; /*디테일 설명과 input 사이 간격 */

    width: 100%;
  `,

  ChargeInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    /* margin: 5.6rem 10rem 0 2.2rem; */ /*진짜 margin -> 추후 글씨체 문제 해결 되면 이걸로 바꾸기*/
    margin: 5.6rem 9rem 0 2.2rem;
  `,

  ChargeInfoTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  ChargeInfoDetailWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  `,

  ChargeInfoDetail: styled.p`
    display: flex;
    align-items: center;
    gap: 0.3rem;

    & > span {
      color: ${({ theme }) => theme.colors.gray3};
      ${({ theme }) => theme.fonts.body_medium_14};

      word-wrap: break-word;
    }
  `,

  ChargeInputContainer: styled.article`
    position: relative;
  `,

  ChargeInput: styled.input`
    width: 33.5rem;
    height: 4.5rem;
    padding: 1.2rem 4.3rem;

    ${({ theme }) => theme.fonts.body_medium_16};

    color: ${({ theme }) => theme.colors.gray5};
    background-color: ${({ theme }) => theme.colors.bg};

    box-sizing: border-box;
    border-radius: 0.5rem;
    border: 0;

    text-align: right;

    /* number type input 기본 스타일링 제거 */
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox  */
    &[type='number'] {
      -moz-appearance: textfield;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      /* box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.red}; */
      outline: 0;
    }
  `,

  ChargeUnit: styled.span`
    position: absolute;
    top: 50%;
    right: 1.3rem;
    transform: translate(-50%, -50%);

    color: ${({ theme }) => theme.colors.gray2};
    /* color: red; */
    ${({ theme }) => theme.fonts.body_medium_16};
  `,
};
