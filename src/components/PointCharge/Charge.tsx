import { styled } from 'styled-components';
import { IcCheckSmallGray } from '../../assets/icon';
import React, { useState } from 'react';

interface ChargeProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setChargeAmount: React.Dispatch<React.SetStateAction<number>>;
}

const Charge = ({ setIsActiveNext, setChargeAmount }: ChargeProps) => {
  const [isWarning, setIsWarning] = useState(false);
  const [parsedPrice, setParsedPrice] = useState('');
  const [errMsg, setErrMsg] = useState('1,000원 단위 충전만 가능해요');

  //input에 금액을 입력 했을 때 1) 0원, 2) 1000원이 아닌 단위 예외 처리를 해 주는 함수
  const updateStateBasedOnValue = (removedCommaValue: number) => {
    const isZero = removedCommaValue === 0; //0원 금지
    const isMoreMillion = removedCommaValue > 1000000; //100만원 이상 금지
    const isThousandMultiple = removedCommaValue % 1000 === 0; //1000원 단위만 가능

    setIsWarning(isZero || !isThousandMultiple || isMoreMillion); // 0원일 때 혹은 1000원 단위가 아닐 때, 100만원 이상일 때 경고 메시지 띄우기
    setIsActiveNext(!isZero && isThousandMultiple && !isMoreMillion); // 0원이 아니고, 1000원 단위일 때, 100만원 이하일 때만 다음 버튼 활성화

    // 에러메시지 설정
    if (isZero) {
      setErrMsg('1,000원 이상부터 충전이 가능해요');
    } else if (isMoreMillion) {
      setErrMsg('100만 원까지 충전 가능해요');
    } else if (isZero || !isThousandMultiple) {
      setErrMsg('1,000원 단위 충전만 가능해요');
    }
  };

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
    setChargeAmount(removedCommaValue);
    setParsedPrice(removedCommaValue.toLocaleString());

    // 금액 입력 시 예외 처리 해주는 함수 호출
    updateStateBasedOnValue(removedCommaValue);
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
        <St.ChargeWarningMsg $isWarning={isWarning}>{errMsg}</St.ChargeWarningMsg>
      </St.ChargeInputContainer>
    </St.ChargeWrapper>
  );
};

export default Charge;

const St = {
  ChargeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 3rem; /*디테일 설명과 input 사이 간격 */
    /* height: calc(100dvh - 13.6rem); */

    width: 100%;
    padding: 0 2rem;
  `,

  ChargeInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    width: 33.5rem;
    margin-top: 5.6rem;
    padding-left: 0.2rem;
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
    /* width: 33.5rem; */
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 0;
    padding-right: 4rem;

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
