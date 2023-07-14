import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import SelectCustomBtn from './SelectCustomBtn';

const SelectCustom = () => {
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

  SelectBtnContainer: styled.article`
    display: flex;
    gap: 1.5rem;
  `,

  SelectCustomPolicyContainer: styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
};
