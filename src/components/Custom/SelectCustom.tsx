import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import { IcApplyCheckGray, IcApplyCheckPink } from '../../assets/icon';

const SelectCustom = () => {
  const CASE_BTN_DATA = [
    {
      id: 'noDesign',
      title: '이미 그려 둔 도안이 있어요',
      detail: '이미지 파일을 그대로 제작해 드릴게요',
    },
    {
      id: 'haveDesign',
      title: '커스텀 도안을 제작하고 싶어요',
      detail: '신청서에 맞게 세심하게 제작해 드릴게요',
    },
  ];

  const [activeBtn, setActiveBtn] = useState(''); //선택 된 버튼의 상황
  const btnRef = useRef<HTMLButtonElement[]>([]); //상황 선택 버튼 리스트 ref
  const [haveDesign, setHaveDesign] = useState<boolean>(); //리코일 저장 후 서버 통신 예정

  const handleClickSelBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    setActiveBtn(target.id);
    target.id === 'haveDesign' ? setHaveDesign(true) : setHaveDesign(false);
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
        {CASE_BTN_DATA.map(({ id, title, detail }, idx) => {
          return (
            <St.SelectBtnContent
              type='button'
              key={id}
              id={id}
              ref={(element: HTMLButtonElement) => (btnRef.current[idx] = element)}
              onClick={handleClickSelBtn}
            >
              {activeBtn === id ? <IcApplyCheckPink /> : <IcApplyCheckGray />}
              <St.SelectBtnTitle $case={id}>{title}</St.SelectBtnTitle>
              <St.SelectBtnDetail $case={id}>{detail}</St.SelectBtnDetail>
            </St.SelectBtnContent>
          );
        })}
      </St.SelectBtnContainer>
    </St.SelectWrapper>
  );
};

export default SelectCustom;

const St = {
  SelectWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
  `,

  SelectInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    margin: 14.8rem 0 4rem;
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

    &.isClicked {
      border: 0.1rem solid ${({ theme }) => theme.colors.pink5};
    }
  `,

  SelectBtnTitle: styled.h3<{ $case: string }>`
    width: ${({ $case }) => ($case === 'haveDesign' ? 10 : 8.6)}rem;

    color: ${({ theme }) => theme.colors.gray7};
    ${({ theme }) => theme.fonts.title_semibold_16};

    text-align: center;

    white-space: pre-line;

    pointer-events: none;
  `,

  SelectBtnDetail: styled.p<{ $case: string }>`
    width: ${({ $case }) => ($case === 'haveDesign' ? 11.6 : 10.6)}rem;

    color: ${({ theme }) => theme.colors.gray3};
    ${({ theme }) => theme.fonts.detail_medium_12};

    text-align: center;

    white-space: pre-line;

    pointer-events: none;
  `,
};
