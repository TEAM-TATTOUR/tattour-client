import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import { IcActvieSelect, IcInActvieSelect } from '../../assets/icon';

const SelectCustom = () => {
  const [activeBtn, setActiveBtn] = useState(''); //선택 된 버튼의 상황
  const btnRef = useRef<HTMLButtonElement[]>([]); //상황 선택 버튼 리스트 ref

  const handleClickSelBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    setActiveBtn(target.id);
  };

  useEffect(() => {
    //버튼 하나씩만 누를 수 있도록
    btnRef.current.forEach((ref) => {
      if (ref.id === activeBtn) {
        ref.classList.add('isClicked');
      } else {
        ref.classList.remove('isClicked');
      }
    });
  }, [activeBtn]);

  return (
    <St.SelectWrapper>
      <St.SelectInfoContainer>
        <St.InfoMainText>어떤 상황에 놓여있나요?</St.InfoMainText>
        <St.InfoSubText>상황에 맞게 제작해 드려요</St.InfoSubText>
      </St.SelectInfoContainer>

      <St.SelectBtnContainer>
        <St.SelectBtnContent
          type='button'
          id='exist'
          ref={(element: HTMLButtonElement) => (btnRef.current[0] = element)}
          onClick={handleClickSelBtn}
        >
          {activeBtn === 'exist' ? <IcActvieSelect /> : <IcInActvieSelect />}
          <St.SelectBtnTitle $case='exist'>이미 그려 둔 도안이 있어요</St.SelectBtnTitle>
          <St.SelectBtnDetail $case='exist'>
            이미지 파일을 그대로 제작해 드릴게요
          </St.SelectBtnDetail>
        </St.SelectBtnContent>

        <St.SelectBtnContent
          type='button'
          id='make'
          ref={(element: HTMLButtonElement) => (btnRef.current[1] = element)}
          onClick={handleClickSelBtn}
        >
          {activeBtn === 'make' ? <IcActvieSelect /> : <IcInActvieSelect />}
          <St.SelectBtnTitle $case='make'>커스텀 도안을 제작하고 싶어요</St.SelectBtnTitle>
          <St.SelectBtnDetail $case='make'>
            신청서에 맞게 세심하게 제작해 드릴게요
          </St.SelectBtnDetail>
        </St.SelectBtnContent>
      </St.SelectBtnContainer>
    </St.SelectWrapper>
  );
};

export default SelectCustom;

const St = {
  SelectWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
  `,

  SelectInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    margin-bottom: 4rem;
  `,

  InfoMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  InfoSubText: styled.p`
    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,

  SelectBtnContainer: styled.article`
    display: flex;
    gap: 1.5rem;
  `,

  SelectBtnContent: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    width: 16rem;
    height: 16.8rem;
    padding: 0.8rem 0 3rem;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.bg};

    cursor: pointer;

    &.isClicked {
      border: 0.1rem solid ${({ theme }) => theme.colors.pink5};
    }
  `,

  SelectBtnTitle: styled.h3<{ $case: string }>`
    width: ${(props) => (props.$case === 'exist' ? 8.6 : 10)}rem;

    color: ${({ theme }) => theme.colors.gray7};
    ${({ theme }) => theme.fonts.title_semibold_16};

    text-align: center;

    white-space: pre-line;

    pointer-events: none;
  `,

  SelectBtnDetail: styled.p<{ $case: string }>`
    width: ${(props) => (props.$case === 'exist' ? 10.6 : 11.6)}rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.detail_medium_12};

    text-align: center;

    white-space: pre-line;

    pointer-events: none;
  `,
};
