import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { useState, useEffect } from 'react';
import useGetGenre, { GenreItemProps } from '../../libs/hooks/list/useGetGenre';
import useGetStyle, { StyleItemProps } from '../../libs/hooks/list/useGetStyle';
import { buttonType } from '../../page/ListPage';
import { SORT_TAGS } from '../../constants/ListInfo';
import { IcCheckSmallLight, IcCheckSmallPink } from '../../assets/icon';

interface FilterSheetProps {
  isSheetOpen: number;
  setSheetOpen: React.Dispatch<React.SetStateAction<number>>;
  buttons: buttonType[];
  setButtons: React.Dispatch<React.SetStateAction<buttonType[]>>;
}

const FilterSheet = ({ isSheetOpen, setSheetOpen, buttons, setButtons }: FilterSheetProps) => {
  // 바텀시트 활성화 시간동안 사용자가 선택한 태그
  const [selectedTag, setSelectedTag] = useState('');
  const { genreResponse } = useGetGenre();
  const { styleResponse } = useGetStyle();

  // 필터의 각 태그 배열
  const tags = [
    SORT_TAGS,
    genreResponse.map((genre: GenreItemProps) => genre.name),
    styleResponse.map((style: StyleItemProps) => style.name),
  ];

  // backdrop 클릭 시 바텀시트 꺼지는 함수
  const onTapBack = () => {
    // backdrop 클릭 시 선택했던 태그 적용 X (이전 데이터로 selectedTag 되돌리기)
    setSelectedTag(buttons[isSheetOpen].value);
    setSheetOpen(-1);
  };

  const handleClickTag = (tag: string) => {
    setSelectedTag(selectedTag === tag ? buttons[isSheetOpen].default : tag);
  };

  const handleClickButton = (filterIdx: number) => {
    //buttons[filterIdx] 값 업데이트하기
    const newButtons = [...buttons];
    newButtons[filterIdx].value = selectedTag;
    setButtons(newButtons);

    setSheetOpen(-1);
  };

  // sheet 켤때마다 selectedTag, filterTag 초기화 (끌 경우 isSheetOpen이 -1이라서 indexError 발생)
  useEffect(() => {
    if (isSheetOpen === -1) return;
    setSelectedTag(buttons[isSheetOpen].value);
  }, [isSheetOpen, buttons]);

  return (
    <St.Wrapper>
      <Sheet
        className='react-modal-sheet-wrapper'
        isOpen={isSheetOpen !== -1}
        onClose={() => {
          setSheetOpen(-1);
        }}
        detent='content-height'
        disableDrag={true}
      >
        <St.SheetWrapper>
          <Sheet.Container>
            <Sheet.Header disableDrag={true} />
            <Sheet.Content>
              {isSheetOpen !== -1 &&
                tags[isSheetOpen].map((el) => (
                  <St.TagBox
                    key={el}
                    onClick={() => handleClickTag(el)}
                    $isChecked={selectedTag === el}
                  >
                    <span></span>
                    {el}
                    {selectedTag === el ? <IcCheckSmallPink /> : <IcCheckSmallLight />}
                  </St.TagBox>
                ))}

              <St.Footer>
                <St.Button type='button' onClick={() => handleClickButton(isSheetOpen)}>
                  적용하기
                </St.Button>
              </St.Footer>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop
            onTap={() => {
              onTapBack();
            }}
          />
        </St.SheetWrapper>
      </Sheet>
    </St.Wrapper>
  );
};

export default FilterSheet;

const St = {
  Wrapper: styled.section`
    height: 100%;
  `,
  TagBox: styled.p<{ $isChecked: boolean }>`
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    text-align: center;
    padding: 1.7rem 0rem;
    color: ${({ theme, $isChecked }) => ($isChecked ? theme.colors.gray8 : theme.colors.gray4)};
    ${({ theme, $isChecked }) =>
      $isChecked ? theme.fonts.title_semibold_18 : theme.fonts.title_medium_18};

    & > span {
      display: inline-block;
      margin: 0rem 0.3rem;
      width: 2rem;
      height: 2rem;
    }
  `,
  Footer: styled.footer`
    position: sticky;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
    margin-top: 4rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,
  Button: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
  SheetWrapper: styled.div`
    .react-modal-sheet-backdrop {
      max-width: 43rem;
      left: auto !important;
      background-color: rgba(0, 0, 0, 0.6) !important;
    }
    .react-modal-sheet-container {
      max-width: 43rem;
      border-radius: 1rem 1rem 0 0;
    }
    .react-modal-sheet-header {
      height: 1.6rem !important;
    }
    .react-modal-sheet-drag-indicator {
      display: none;
    }
  `,
};
