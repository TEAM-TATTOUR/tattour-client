import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import SelectCustomBtn from './SelectCustomBtn';

interface SelectCustomProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  setHaveDesign: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectCustom = ({ setIsActiveNext, setHaveDesign }: SelectCustomProps) => {
  const CASE_BTN_DATA = [
    {
      id: 'noDesign',
      firstTitle: '내 도안',
      secondTitle: '그대로 만들기',
      firstDetail: '이미지 파일',
      secondDetail: '그대로 제작해드려요',
    },
    {
      id: 'haveDesign',
      firstTitle: '타투어에게',
      secondTitle: '도안 의뢰하기',
      firstDetail: '참고 이미지, 간단 스케치를',
      secondDetail: '통해 제작해드려요',
    },
  ];

  const [activeBtn, setActiveBtn] = useState(''); //선택 된 버튼의 상황
  const btnRef = useRef<HTMLButtonElement[]>([]); //상황 선택 버튼 리스트 ref

  const handleClickSelBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    if (!target) return;
    setActiveBtn(target.id);
    target.id === 'haveDesign' ? setHaveDesign(true) : setHaveDesign(false);
    setIsActiveNext(true);
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
        <St.InfoMainText>원하는 제작 방식을 선택해주세요</St.InfoMainText>
      </St.SelectInfoContainer>

      <St.SelectBtnContainer>
        {CASE_BTN_DATA.map(({ id, firstTitle, secondTitle, firstDetail, secondDetail }, idx) => {
          return (
            <SelectCustomBtn
              key={id}
              id={id}
              firstTitle={firstTitle}
              secondTitle={secondTitle}
              firstDetail={firstDetail}
              secondDetail={secondDetail}
              ref={(element: HTMLButtonElement) => (btnRef.current[idx] = element)}
              onClick={handleClickSelBtn}
              isSelected={activeBtn === id}
            />
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
    justify-content: center;

    padding: 0 2rem;

    width: 100%;
    height: calc(
      100dvh - 24.8rem
    ); //탭 바 제외 높이 - (헤더 영역 + 정책 영역 + cta 푸터 영역 높이 값)
  `,

  SelectTopSectionContainerWrapper: styled.section`
    display: flex;
    flex-direction: column;
  `,

  SelectInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    margin: 5.6rem 0 4rem; //최상단 세로 마진
  `,

  InfoMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  SelectBtnContainer: styled.article`
    display: flex;
    gap: 1.5rem;
    justify-content: center;

    width: 100%;
  `,
};
