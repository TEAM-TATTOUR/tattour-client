import { useEffect, useMemo } from 'react';
import { styled } from 'styled-components';
import IcCircleBlack from '../../../../assets/icon/ic_circle_black.png';
import IcCircleRainbow from '../../../../assets/icon/ic_circle_rainbow.png';
import SelectColorBtn from './SelectColorBtn';

interface SelectColorProps {
  setIsActiveNext: React.Dispatch<React.SetStateAction<boolean>>;
  isColoredState: boolean;
  setIsColored: React.Dispatch<React.SetStateAction<boolean>>;
  selectedColorMode: string;
  setSelectedColorMode: React.Dispatch<React.SetStateAction<string>>;
}

const SelectColor = ({
  setIsActiveNext,
  setIsColored,
  isColoredState,
  selectedColorMode,
  setSelectedColorMode,
}: SelectColorProps) => {
  const CASE_BTN_DATA = useMemo(
    () => [
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
    ],
    [],
  );

  useEffect(() => {
    if (isColoredState) {
      setSelectedColorMode(isColoredState ? 'color' : 'black');
    }
    // 버튼 하나씩만 누를 수 있도록
    CASE_BTN_DATA.forEach((btn) => {
      if (btn.id === selectedColorMode) {
        btn.isSelected = true;
      } else {
        btn.isSelected = false;
      }
    });

    if (selectedColorMode === 'black') {
      setIsColored(false);
    } else {
      setIsColored(true);
    }

    if (selectedColorMode) {
      setIsActiveNext(true);
    }
  }, [isColoredState, selectedColorMode]);

  const handleClickSelBtn = (id: string) => {
    setSelectedColorMode(id);
  };

  return (
    <St.SelectWrapper>
      <St.SelectInfoContainer>
        <St.InfoMainText>색상을 선택해주세요</St.InfoMainText>
      </St.SelectInfoContainer>
      <St.BtnContainerWrapper>
        <St.SelectBtnContainer>
          {CASE_BTN_DATA.map(({ id, title, src }) => {
            return (
              <SelectColorBtn
                key={id}
                id={id}
                title={title}
                src={src}
                onClick={() => handleClickSelBtn(id)}
                activeBtn={selectedColorMode}
              />
            );
          })}
        </St.SelectBtnContainer>
      </St.BtnContainerWrapper>
    </St.SelectWrapper>
  );
};

export default SelectColor;

const St = {
  SelectWrapper: styled.section`
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: calc(100dvh - 13.6rem);
    padding: 0 2rem;
  `,

  SelectInfoContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.2rem;

    margin: 5.6rem 0 0 0.2rem;
  `,

  InfoMainText: styled.h2`
    color: ${({ theme }) => theme.colors.gray8};
    ${({ theme }) => theme.fonts.title_semibold_20};
  `,

  BtnContainerWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 100%;

    min-height: calc(100dvh - 28.8rem);
  `,

  SelectBtnContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* gap: 1.5rem; */
  `,
};
