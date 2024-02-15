import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { useRef, useState, useEffect } from 'react';
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
  const { genreResponse } = useGetGenre();
  const { styleResponse } = useGetStyle();

  // 필터(바텀시트)의 각 태그명
  const tags = [
    SORT_TAGS,
    genreResponse.map((genre: GenreItemProps) => genre.name),
    styleResponse.map((style: StyleItemProps) => style.name),
  ];
  const [selectedTag, setSelectedTag] = useState('');

  // sheet 켤때마다 selectedTag, filterTag 초기화 (끌 경우 isSheetOpen이 -1이라서 indexError 발생)
  useEffect(() => {
    if (isSheetOpen === -1) return;
    setSelectedTag(buttons[isSheetOpen].value);
  }, [isSheetOpen, buttons]);

  // 바텀시트 내 각 태그 ref
  const tagRefs = useRef<HTMLParagraphElement[]>([]);

  // backdrop 클릭 시 바텀시트 꺼지는 함수
  const onTapBack = () => {
    // backdrop 클릭 시 선택했던 태그 적용 X (이전 데이터로 selectedTag 되돌리기)
    setSelectedTag(buttons[isSheetOpen].value);
    setSheetOpen(-1);
  };

  const handleClickTag = (tag: string, index: number) => {
    if (selectedTag === tag) {
      setSelectedTag(buttons[isSheetOpen].default);
    } else {
      setSelectedTag(tag);
    }

    tagRefs.current.forEach((el: HTMLParagraphElement) => {
      if (!el) return;
      if (tagRefs.current.indexOf(el) === index) {
        if (tagRefs.current[index].classList.contains('checked')) {
          tagRefs.current[index].classList.remove('checked');
        } else {
          tagRefs.current[index].classList.add('checked');
        }
      } else {
        if (el.classList.contains('checked')) {
          el.classList.remove('checked');
        }
      }
    });
  };

  const handleClickButton = (filterIdx: number) => {
    //buttons[filterIdx] 값 업데이트하기
    const newButtons = [...buttons];
    newButtons[filterIdx].value = selectedTag;
    setButtons(newButtons);

    setSheetOpen(-1);
  };

  return (
    <St.Wrapper>
      {isSheetOpen !== -1 && (
        <CustomSheet
          isOpen={isSheetOpen !== -1}
          onClose={() => {
            setSheetOpen(-1);
          }}
          detent='content-height'
          disableDrag={true}
        >
          <Sheet.Container>
            <Sheet.Header disableDrag={true} />
            <Sheet.Content>
              {tags[isSheetOpen].map((el, idx) => (
                <St.TagBox
                  key={idx}
                  onClick={() => handleClickTag(el, idx)}
                  ref={(refEl: HTMLParagraphElement) => (tagRefs.current[idx] = refEl)}
                  className={buttons[isSheetOpen].value === el ? 'checked' : ''}
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
          <Sheet.Backdrop onTap={() => onTapBack()} />
        </CustomSheet>
      )}
    </St.Wrapper>
  );
};

export default FilterSheet;

const St = {
  Wrapper: styled.section`
    height: 100%;
  `,
  TagBox: styled.p`
    display: flex;
    justify-content: center;
    gap: 0.3rem;
    text-align: center;
    padding: 1.7rem 0rem;
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.title_medium_18};

    & > span {
      display: inline-block;
      margin: 0rem 0.3rem;
      width: 2rem;
      height: 2rem;
    }

    &.checked {
      ${({ theme }) => theme.fonts.title_semibold_18};
      color: ${({ theme }) => theme.colors.gray8};
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
};

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
  .react-modal-sheet-container {
    border-radius: 1rem !important;
  }
  .react-modal-sheet-header {
    height: 1.6rem !important;
  }
  .react-modal-sheet-drag-indicator {
    display: none;
  }
`;
