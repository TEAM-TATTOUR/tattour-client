import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
// 이모티콘 카운팅 관련 라이브러리
import GraphemeSplitter from 'grapheme-splitter';

interface AdditionalRequestProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  demand: string;
  setDemand: React.Dispatch<React.SetStateAction<string>>;
}

const AdditionalRequest = ({ setIsActiveNext, demand, setDemand }: AdditionalRequestProps) => {
  //count 될 maxCount 수
  const MAX_ETC_COUNT = 100;
  setIsActiveNext(true);

  //글자 수 세기 관련 state
  const [demandTextAreaCount, setDemandTextAreaCount] = useState(0);
  const demandTextAreaRef = useRef<HTMLTextAreaElement | null>(null);

  // 이모티콘을 한 문자로 취급하여 글자 수 제한을 구현하는 함수
  const limitMaxLength = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    MAXLength: number,
  ) => {
    const splitter = new GraphemeSplitter();
    const parsedValue = splitter.splitGraphemes(e.target.value);

    if (!parsedValue) return;

    if (parsedValue.length > MAXLength) {
      e.target.value = parsedValue.splice(0, MAXLength).join('');
      return;
    }

    return parsedValue.length;
  };

  const handleChangeEtcTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '') {
      setDemandTextAreaCount(0);
      setIsActiveNext(false);
    } else {
      setIsActiveNext(true);
    }

    const lengthCount = limitMaxLength(e, MAX_ETC_COUNT);

    if (!lengthCount) return;
    setDemandTextAreaCount(lengthCount);

    setDemand(e.target.value);
  };
//이모지 글자수 제대로 카운트 되게 수정 필요
  useEffect(() => {
    if (!demand || !demandTextAreaRef.current) return;
    demandTextAreaRef.current.value = demand;
    setDemandTextAreaCount(demand.length);
    setDemand(demand);
  }, [demand]);

  return (
    <St.CustomRequestWrapper>
      <St.RequestNameContainer>
        <St.RequestNameTitleWrapper>
          <St.RequestNameTitle>요청 사항</St.RequestNameTitle>
          <St.RequestOption>선택</St.RequestOption>
        </St.RequestNameTitleWrapper>
        <St.RequestNameDetail>
          추가적인 요청사항이 있다면 자유롭게 작성해주세요
          <br />
          (컬러 코드, 정확한 사이즈, 라인 굵기, 명암 여부 등)
        </St.RequestNameDetail>
      </St.RequestNameContainer>
      <St.RequestEtcContainer>
        <St.RequestEtcTextArea
          onChange={handleChangeEtcTextArea}
          ref={demandTextAreaRef}
          placeholder='ex. 라인 1mm로 얇게 그려주세요 &#13;&#10; &nbsp; &nbsp;  추가적인 명암은 넣지 말아주세요.'
        />
        <St.RequestInputCount>
          ({demandTextAreaCount}/{MAX_ETC_COUNT})
        </St.RequestInputCount>
      </St.RequestEtcContainer>
    </St.CustomRequestWrapper>
  );
};

export default AdditionalRequest;

const St = {
  CustomRequestWrapper: styled.section`
    display: flex;
    flex-direction: column;

    min-height: calc(100dvh - 13.6rem);
  `,

  RequestNameContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    position: relative;

    margin: 5.6rem 2rem 0 2.2rem;
  `,
  RequestNameTitleWrapper: styled.div`
    display: flex;
    gap: 0.6rem;
    align-items: center;
  `,
  RequestNameTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,
  RequestOption: styled.p`
    color: ${({ theme }) => theme.colors.pink4};
    ${({ theme }) => theme.fonts.detail_semibold_12};
  `,

  RequestNameDetail: styled.p`
    margin-bottom: 2rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  RequestEtcContainer: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    position: relative;

    margin: 0 2rem 0 2.2rem;
  `,

  RequestEtcTextArea: styled.textarea`
    height: 14.6rem;

    padding: 1.2rem 2rem;

    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.gray5};

    ${({ theme }) => theme.fonts.body_medium_16};

    box-sizing: content-box;
    border: none;
    border-radius: 0.5rem;

    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      outline: 0;
    }
  `,

  RequestInputCount: styled.p`
    position: absolute;
    right: 0;
    bottom: -2.1rem;

    color: ${({ theme }) => theme.colors.gray2};
    ${({ theme }) => theme.fonts.detail_medium_12};
  `,
};
