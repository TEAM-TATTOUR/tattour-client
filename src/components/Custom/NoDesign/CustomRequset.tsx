import React, { useState } from 'react';
import { styled } from 'styled-components';
// 이모티콘 카운팅 관련 라이브러리
import GraphemeSplitter from 'grapheme-splitter';

const CustomRequset = () => {
  //count 될 maxCount 수
  const MAX_NAME_COUNT = 10;
  const MAX_ETC_COUNT = 100;

  //글자 수 세기 관련 state
  const [nameInputCount, setNameInputCount] = useState(0);
  const [etcTextAreaCount, setEtcTextAreaCount] = useState(0);

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

  const handleChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    //value가 없을 때 0으로 글자 수 세지도록
    if (e.target.value === '') setNameInputCount(0);

    const lengthCount = limitMaxLength(e, MAX_NAME_COUNT);

    if (!lengthCount) return;
    setNameInputCount(lengthCount);
  };

  const handleChangeEtcTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '') setEtcTextAreaCount(0);

    const lengthCount = limitMaxLength(e, MAX_ETC_COUNT);

    if (!lengthCount) return;
    setEtcTextAreaCount(lengthCount);
  };

  return (
    <St.CustomRequestWrapper>
      <St.RequestNameContainer>
        <St.RequestNameTitle>타투의 이름을 지어주세요</St.RequestNameTitle>
        <St.RequestNameDetail>추후 아카이브 또는 공개 시 해당 이름이 노출돼요</St.RequestNameDetail>
        <St.RequestNameInput
          type='text'
          onChange={handleChangeNameInput}
          placeholder='ex. 우리 가족 타투, 백조 타투'
          autoFocus
        />
        <St.RequestInputCount>
          ({nameInputCount}/{MAX_NAME_COUNT})
        </St.RequestInputCount>
      </St.RequestNameContainer>
      <St.RequestEtcContainer>
        <St.RequestEtcTitleBox>
          <St.RequestEtcTitle>요청 사항</St.RequestEtcTitle>
          <St.RequestOptionBadge>선택</St.RequestOptionBadge>
        </St.RequestEtcTitleBox>
        <div>
          <St.RequestEtcDetail>
            추가적인 요청사항이 있다면 자유롭게 작성해주세요
          </St.RequestEtcDetail>
          <St.RequestEtcDetail>
            (컬러 코드, 정확한 사이즈, 라인 굵기, 명암 여부 등)
          </St.RequestEtcDetail>
        </div>
        <St.RequestEtcTextArea
          onChange={handleChangeEtcTextArea}
          placeholder='ex. 라인 1mm로 사진보다 얇게 그려주세요 &#13;&#10; &nbsp; &nbsp;  도안을 붉은색 (FF6B6B)으로 바꿔주세요'
        />
        <St.RequestInputCount>
          ({etcTextAreaCount}/{MAX_ETC_COUNT})
        </St.RequestInputCount>
      </St.RequestEtcContainer>
    </St.CustomRequestWrapper>
  );
};

export default CustomRequset;

const St = {
  CustomRequestWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  RequestNameContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    position: relative;

    margin: 5.6rem 2rem 0 2.2rem;
  `,

  RequestNameTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  RequestNameDetail: styled.p`
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  RequestNameInput: styled.input`
    width: 29.5rem;
    height: 2.1rem;

    padding: 1.2rem 2rem;

    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.gray5};

    ${({ theme }) => theme.fonts.body_medium_16};

    box-sizing: content-box;
    border: none;
    border-radius: 0.5rem;

    &::placeholder {
      height: fit-content;

      color: ${({ theme }) => theme.colors.gray2};
      ${({ theme }) => theme.fonts.body_medium_16};
    }

    &:focus {
      outline: 0;
    }
  `,

  RequestEtcContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    position: relative;

    margin: 4rem 2rem 0 2.2rem;
  `,

  RequestEtcTitleBox: styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
  `,

  RequestEtcTitle: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  RequestOptionBadge: styled.span`
    color: ${({ theme }) => theme.colors.pink4};
    //폰트 추가 필요
    ${({ theme }) => theme.fonts.detail_semibold_12};
  `,

  RequestEtcDetail: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  RequestEtcTextArea: styled.textarea`
    width: 29.5rem;
    height: 14.6rem;

    margin-top: 0.8rem;
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
