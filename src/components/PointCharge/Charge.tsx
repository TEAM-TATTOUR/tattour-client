import { styled } from 'styled-components';
import { IcCheckSmallGray } from '../../assets/icon';
import React, { useState } from 'react';

const Charge = ({
  setIsActiveNext,
}: {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isWarning, setIsWarning] = useState(false);
  const [parsedPrice, setParsedPrice] = useState('');

  const handleChangeChargeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자가 아닌 text가 들어왔을 때 방지
    const re = /[^0-9]/gi;
    const targetVal = e.target.value.replace(re, '');
    if (targetVal === '') {
      setParsedPrice('');
      return;
    }

    //, 붙이기
    const removedCommaValue = Number(targetVal.replace(/,/gi, ''));
    setParsedPrice(removedCommaValue.toLocaleString());

    //1000원 단위인지 확인
    if (removedCommaValue % 1000 === 0) {
      setIsWarning(false);
      setIsActiveNext(true);
    } else {
      setIsWarning(true);
      setIsActiveNext(false);
    }
  };

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
        <St.ChargeInput
          type='text'
          value={parsedPrice}
          onChange={handleChangeChargeInput}
          $isWarning={isWarning}
          autoFocus
        />
        <St.ChargeWarningMsg $isWarning={isWarning}>
          1,000원 단위 충전만 가능해요
        </St.ChargeWarningMsg>
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
    }
  `,

  ChargeInputContainer: styled.article`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,

  ChargeInput: styled.input<{ $isWarning: boolean }>`
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

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      box-shadow: ${({ $isWarning, theme }) =>
        $isWarning ? `0 0 0 0.1rem ${theme.colors.red}` : 'none'};
      outline: 0;
    }
  `,

  ChargeUnit: styled.span`
    position: absolute;
    top: 50%;
    right: 1.3rem;
    transform: translate(-50%, -113%);

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.body_medium_16};
  `,

  ChargeWarningMsg: styled.p<{ $isWarning: boolean }>`
    color: ${({ $isWarning, theme }) => ($isWarning ? theme.colors.red : 'transparent')};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
