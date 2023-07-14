import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { useRef, useState, useEffect } from 'react';
import ic_check_small_light from '../../assets/icon/ic_check_small_light.svg';
import ic_check_small_pink from '../../assets/icon/ic_check_small_pink.svg';

interface FilterBottomProps {
  isSortOpen: boolean;
  setSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isGenreOpen: boolean;
  setGenreOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isStyleOpen: boolean;
  setStyleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonName: string[];
  setButtonName: React.Dispatch<React.SetStateAction<string[]>>;
  selectedIdx: number;
  setSelectedIdx: React.Dispatch<React.SetStateAction<number>>;
  isSelected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFilterIdx: number;
  setSelectedFilterIdx: React.Dispatch<React.SetStateAction<number>>;
}

const FilterBottom = ({
  isSortOpen,
  setSortOpen,
  isGenreOpen,
  setGenreOpen,
  isStyleOpen,
  setStyleOpen,
  buttonName,
  setButtonName,
  selectedIdx,
  setSelectedIdx,
  isSelected,
  setSelected,
  selectedFilterIdx,
  setSelectedFilterIdx,
}: FilterBottomProps) => {
  const filterRef = useRef<HTMLElement>(null);
  const [selectedTag, setSelectedTag] = useState(''); // 선택한 태그 저장

  useEffect(() => {
    if (isSortOpen && buttonName[0] === '정렬') setSelected(false);
    else if (isSortOpen && selectedTag !== '') setSelected(true);
  }, [isSortOpen]);

  useEffect(() => {
    if (isGenreOpen && buttonName[1] === '장르') setSelected(false);
    else if (isGenreOpen && selectedTag !== '') setSelected(true);
  }, [isGenreOpen]);

  useEffect(() => {
    if (isStyleOpen && buttonName[2] === '스타일') setSelected(false);
    else if (isStyleOpen && selectedTag !== '') setSelected(true);
  }, [isStyleOpen]);

  const FILTER = [
    {
      type: '정렬',
      isOpen: isSortOpen,
      onClose: () => setSortOpen(false),
      data: ['인기 순', '가격 낮은 순', '가격 높은 순'],
    },
    {
      type: '장르',
      isOpen: isGenreOpen,
      onClose: () => setGenreOpen(false),
      data: ['일러스트', '동양화', '블랙워크', '라인 타투', '레터링', '수채화'],
    },
    {
      type: '스타일',
      isOpen: isStyleOpen,
      onClose: () => setStyleOpen(false),
      data: ['추상적인', '심플한', '귀여운', '사실적인', '감성적인', '다크한'],
    },
  ];

  const handleClickTag = (tag: string, index: number, filterIndex: number) => {
    setSelected((prev) => !prev);
    setSelectedTag((prev) => {
      return prev === '' ? tag : '';
    }); // 선택한 태그 저장
    setSelectedIdx((prev) => {
      return prev === 99 ? index : 99;
    });
    setSelectedFilterIdx((prev) => {
      return prev === 4 ? filterIndex : 4;
    });
    console.log(tag, index, filterIndex);
  };

  const handleClickButton = (onClose: () => void, filterIdx: number) => {
    onClose(); // 모달 내리기

    // 기존 버튼명 배열을 복사 -> 배열 중 선택한 필터 자리에 선택한 태그명 넣기 -> 완성된 버튼명 배열로 재렌더링
    const newButtonName = [...buttonName];
    newButtonName[filterIdx] = selectedTag;
    setButtonName(newButtonName);

    // 변화 -> bg색 to gray7, 글자색 to white, arrow icon to white
    // 변화 조건 : buttonName 배열의 각 요소가 filter.type인지 check -> 맞으면 default, 다르면 바뀐걸로
    // useEffect 사용해서 변화 감지하기 -> 위치는 TattooList에서
  };

  return (
    <>
      {FILTER.map((filter, filterIdx) => (
        <CustomSheet
          key={filter.type}
          isOpen={filter.isOpen}
          onClose={filter.onClose}
          detent='content-height'
          disableDrag={true}
        >
          <Sheet.Container>
            <Sheet.Header disableDrag={true} />
            <Sheet.Content ref={filterRef}>
              {filter.data.map((el, idx) => (
                <St.TagBox
                  key={el}
                  onClick={() => handleClickTag(el, idx, filterIdx)}
                  $isSelected={selectedIdx === idx && selectedFilterIdx === filterIdx}
                >
                  <span></span>
                  {el}
                  <i></i>
                </St.TagBox>
              ))}
              <St.Footer $sel={isSelected}>
                <St.Button
                  type='button'
                  onClick={() => handleClickButton(filter.onClose, filterIdx)}
                >
                  적용하기
                </St.Button>
              </St.Footer>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop />
        </CustomSheet>
      ))}
    </>
  );
};

export default FilterBottom;

const St = {
  TagBox: styled.p<{ $isSelected: boolean }>`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 1.7rem 0rem;
    color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.gray8 : theme.colors.gray4)};
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.fonts.title_semibold_18 : theme.fonts.title_medium_18};

    & > span {
      display: inline-block;
      margin: 0rem 0.3rem;
      width: 2rem;
      height: 2rem;
    }

    & > i {
      display: inline-block;
      margin: 0rem 0.3rem;
      width: 2rem;
      height: 2rem;

      background: url(${({ $isSelected }) =>
        $isSelected ? ic_check_small_pink : ic_check_small_light});
    }
  `,
  Footer: styled.footer<{ $sel: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
    margin-top: 4rem;

    background-color: ${({ theme, $sel }) => ($sel ? theme.colors.gray9 : theme.colors.gray3)};

    & > button {
      pointer-events: ${({ $sel }) => ($sel ? 'fill' : 'none')};
    }
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
