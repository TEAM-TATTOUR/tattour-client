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
    setSelected(false);
  }, [isSortOpen, isGenreOpen, isStyleOpen]);

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

  const tagRefs = useRef<any>([]);

  const handleClickTag = (tag: string, index: number) => {
    setSelectedTag(tag); // 선택한 태그 저장

    // 태그 선택은 하나씩
    tagRefs.current.forEach((el) => {
      if (tagRefs.current.indexOf(el) === index) {
        // 클릭할 때마다 토글 구현
        if (tagRefs.current[index].classList[2] === 'checked') {
          tagRefs.current[index].classList.remove('checked');
        } else {
          tagRefs.current[index].classList.add('checked');
        }
      } else {
        if (el.classList[2] === 'checked') {
          el.classList.remove('checked');
        }
      }
    });
  };

  const handleClickButton = (onClose: () => void, filterIdx: number) => {
    onClose(); // 모달 내리기

    const newButtonName = [...buttonName];
    newButtonName[filterIdx] = selectedTag; // 선택한 태그 적용
    setButtonName(newButtonName);
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
                  //$isSelected={selectedIdx === idx && selectedFilterIdx === filterIdx}
                  ref={(el) => (tagRefs.current[idx] = el)}
                >
                  <span></span>
                  {el}
                  <i></i>
                </St.TagBox>
              ))}
              <St.Footer>
                <St.Button
                  type='button'
                  onClick={() => handleClickButton(filter.onClose, filterIdx)}
                >
                  적용하기
                </St.Button>
              </St.Footer>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onClick={filter.onClose} />
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
    color: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fonts.title_medium_18};

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

      background: url(${ic_check_small_light});
    }

    &.checked {
      ${({ theme }) => theme.fonts.title_semibold_18};
      color: ${({ theme }) => theme.colors.gray8};

      & > i {
        display: inline-block;
        margin: 0rem 0.3rem;
        width: 2rem;
        height: 2rem;

        background: url(${ic_check_small_pink});
      }
    }
  `,
  Footer: styled.footer<{ $sel: boolean }>`
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
