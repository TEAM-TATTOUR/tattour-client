import { styled } from 'styled-components';

const Charge = () => {
  return (
    <St.ChargeWrapper>
      <St.ChargeInfoContainer>
        <St.ChargeInfoTitle>충전할 금액을 알려주세요</St.ChargeInfoTitle>
        <St.ChargeInfoDetail>
          상품 구매, 신청서 작성 등 타투어 내 거래에 필요한 머니에요
        </St.ChargeInfoDetail>
      </St.ChargeInfoContainer>
      <St.ChargeInputContainer>
        <St.ChargeInput type='tel' placeholder='1,000원 단위로 입력해주세요' autoFocus />
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
    gap: 1.2rem;

    margin: 5.6rem 2.9rem 0 2.2rem;
  `,

  ChargeInfoTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  ChargeInfoDetail: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};

    word-wrap: break-word;
  `,

  ChargeInputContainer: styled.article``,

  ChargeInput: styled.input`
    width: 33.5rem;
    height: 4.5rem;
    padding: 1.2rem 2rem;

    ${({ theme }) => theme.fonts.body_medium_16};

    color: ${({ theme }) => theme.colors.gray5};
    background-color: ${({ theme }) => theme.colors.bg};

    box-sizing: border-box;
    border-radius: 0.5rem;
    border: 0;

    text-align: right;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    /* &:focus {
      box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.red};
      outline: 0;
    } */
  `,
};
