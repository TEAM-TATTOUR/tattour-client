import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { useRef, useState, useEffect } from 'react';
import ic_check_small_light from '../../assets/icon/ic_check_small_light.svg';
import ic_check_small_pink from '../../assets/icon/ic_check_small_pink.svg';
import useGetGenre, { GenreItemProps } from '../../libs/hooks/list/useGetGenre';
import useGetStyle, { StyleItemProps } from '../../libs/hooks/list/useGetStyle';

interface FilterBottomProps {
  isSortOpen: boolean;
  setSortOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isGenreOpen: boolean;
  setGenreOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isStyleOpen: boolean;
  setStyleOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonName: string[];
  setButtonName: React.Dispatch<React.SetStateAction<string[]>>;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
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
  setSelected,
}: FilterBottomProps) => {
  useEffect(() => {
    setSelected(false);
  }, []);

  const { genreResponse } = useGetGenre();
  const { styleResponse } = useGetStyle();

  const genreData = genreResponse.map((genre: GenreItemProps) => genre.name);
  const styleData = styleResponse.map((style: StyleItemProps) => style.name);

  const FILTER = [
    {
      type: '정렬',
      isOpen: isSortOpen,
      onClose: () => setSortOpen(false),
      onTap: (filter: boolean[]) => {
        const newFilterTag = [...filterTag];
        newFilterTag[0] = filter;
        setFilterTag(newFilterTag);
        setSortOpen(false);

        const trueIdx = filterTag[0].indexOf(true);

        const newSelectedTag = [...selectedTag];
        newSelectedTag[0] = FILTER[0].data[trueIdx];
        setSelectedTag(newSelectedTag);
      },
      data: ['인기 순', '가격 낮은 순', '가격 높은 순'],
    },
    {
      type: '장르',
      isOpen: isGenreOpen,
      onClose: () => setGenreOpen(false),
      onTap: (filter: boolean[]) => {
        const newFilterTag = [...filterTag];
        newFilterTag[1] = filter;
        setFilterTag(newFilterTag);
        setGenreOpen(false);

        const trueIdx = filterTag[1].indexOf(true);

        const newSelectedTag = [...selectedTag];
        newSelectedTag[1] = FILTER[1].data[trueIdx];
        setSelectedTag(newSelectedTag);
      },
      data: genreData,
    },
    {
      type: '스타일',
      isOpen: isStyleOpen,
      onClose: () => {
        setStyleOpen(false);
      },
      onTap: (filter: boolean[]) => {
        const newFilterTag = [...filterTag];
        newFilterTag[2] = filter;
        setFilterTag(newFilterTag);
        setStyleOpen(false);

        const trueIdx = filterTag[2].indexOf(true);

        const newSelectedTag = [...selectedTag];
        newSelectedTag[2] = FILTER[2].data[trueIdx];
        setSelectedTag(newSelectedTag);
      },
      data: styleData,
    },
  ];

  const tagRefs = useRef<HTMLParagraphElement[]>([]);
  const filterRef = useRef<HTMLElement>(null);
  const [selectedTag, setSelectedTag] = useState(buttonName); // 선택한 태그 저장

  const [filterTag, setFilterTag] = useState([
    [false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ]);

  useEffect(() => {
    const newFilterTag = [...filterTag];
    newFilterTag[0] = [false, false, false];
    newFilterTag[1] = genreResponse.map((item) => buttonName[1] === item.name);
    newFilterTag[2] = styleResponse.map((item) => buttonName[2] === item.name);
    setFilterTag(newFilterTag);
  }, [genreResponse, styleResponse]);

  const handleClickTag = (tag: string, index: number, filterIdx: number) => {
    const newSelectedTag = [...selectedTag];
    if (selectedTag[filterIdx] === tag) {
      newSelectedTag[filterIdx] = FILTER[filterIdx].type;
    } else {
      newSelectedTag[filterIdx] = tag;
    }
    setSelectedTag(newSelectedTag);

    // 태그 선택은 하나씩
    tagRefs.current.forEach((el: HTMLParagraphElement) => {
      if (!el) return;
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

    const newTag = [...filterTag];
    if (selectedTag[filterIdx] === FILTER[filterIdx].type) {
      newTag[filterIdx] = FILTER[filterIdx].data.map(() => false);
    } else {
      newTag[filterIdx] = FILTER[filterIdx].data.map((item, idx) => {
        return idx === FILTER[filterIdx].data.indexOf(selectedTag[filterIdx]);
      });
    }

    setFilterTag(newTag);

    tagRefs.current.forEach(() => {
      const newButtonName = [...buttonName];
      newButtonName[filterIdx] = selectedTag[filterIdx];
      setButtonName(newButtonName);
    });
  };

  return (
    <St.Wrapper>
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
                  key={idx}
                  onClick={() => handleClickTag(el, idx, filterIdx)}
                  ref={(refEl: HTMLParagraphElement) => (tagRefs.current[idx] = refEl)}
                  className={filterTag[filterIdx][idx] ? 'checked' : ''}
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
          <Sheet.Backdrop onTap={() => filter.onTap(filterTag[filterIdx])} />
        </CustomSheet>
      ))}
    </St.Wrapper>
  );
};

export default FilterBottom;

const St = {
  Wrapper: styled.section`
    height: 100%;
  `,
  TagBox: styled.p`
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
