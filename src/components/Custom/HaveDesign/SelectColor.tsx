import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import SelectColorBtn from './SelectColorBtn';
import IcCircleRainbow from '../../../assets/icon/ic_circle_rainbow.png';
import IcCircleBlack from '../../../assets/icon/ic_circle_black.png';

const SelectColor = () => {
  const CASE_BTN_DATA = [
    {
      id: 'black',
      title: '블랙',
      src: IcCircleBlack,
      isSelected: false,
    },
    {
      id: 'color',
      title: '컬러',
      src: IcCircleRainbow,
      isSelected: false,
    },
  ];

  const [activeBtn, setActiveBtn] = useState(''); //선택 된 버튼의 상황

  const handleClickSelBtn = (id: string) => {
    setActiveBtn(id);
  };

  useEffect(() => {
    //버튼 하나씩만 누를 수 있도록
    CASE_BTN_DATA.forEach((btn) => {
      if (btn.id === activeBtn) {
        btn.isSelected = true;
      } else {
        btn.isSelected = false;
      }
    });
  }, [activeBtn]);

  return (
    <St.SelectWrapper>
      <St.SelectInfoContainer>
        <St.InfoMainText>어떤 색상을 원하시나요?</St.InfoMainText>
        <St.InfoSubText>두 개 중 하나를 선택해주세요</St.InfoSubText>
      </St.SelectInfoContainer>

      <St.SelectBtnContainer>
        {CASE_BTN_DATA.map(({ id, title, src }) => {
          return (
            <SelectColorBtn
              key={id}
              id={id}
              title={title}
              src={src}
              onClick={() => handleClickSelBtn(id)}
              activeBtn={activeBtn}
            />
          );
        })}
      </St.SelectBtnContainer>
    </St.SelectWrapper>
  );
};

export default SelectColor;

const St = {
  SelectWrapper: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
  `,

  SelectInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;

    margin: 5.6rem 0 11rem 2.2rem;
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
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  `,
};
