import styled from 'styled-components';
import Sheet from 'react-modal-sheet';
import { useRef, useState, useEffect } from 'react';
import ic_check_small_light from '../../assets/icon/ic_check_small_light.svg';
import ic_check_small_pink from '../../assets/icon/ic_check_small_pink.svg';
import useGetGenre, { GenreItemProps } from '../../libs/hooks/list/useGetGenre';
import useGetStyle, { StyleItemProps } from '../../libs/hooks/list/useGetStyle';

interface FilterBottomProps {
  isSheetOpen: number;
  setSheetOpen: React.Dispatch<React.SetStateAction<number>>;
  buttonName: string[];
  setButtonName: React.Dispatch<React.SetStateAction<string[]>>;
  defaultName: string[];
}

const FilterBottom = ({
  isSheetOpen,
  setSheetOpen,
  buttonName,
  setButtonName,
  defaultName,
}: FilterBottomProps) => {
  const SORT_INDEX = 0;
  const GENRE_INDEX = 1;
  const STYLE_INDEX = 2;

  const { genreResponse } = useGetGenre();
  const { styleResponse } = useGetStyle();

  // 필터(바텀시트)의 각 태그명
  const SORT_DATA = ['인기 순', '가격 낮은 순', '가격 높은 순'];
  const GENRE_DATA = genreResponse.map((genre: GenreItemProps) => genre.name);
  const STYLE_DATA = styleResponse.map((style: StyleItemProps) => style.name);

  // 각 바텀시트의 메타데이터를 모아놓은 배열
  /*
  {
    type : 어떤 버튼인지 (정렬? 장르? 스타일?),
    isOpen : 바텀시트 on/off를 다루는 state
    onClose : 바텀시트를 off 시키는 state setter,
    onTap : 바텀시트의 backdrop 터치 시 실행할 함수,
    data : 각 필터별 바텀시트의 내부 요소들 
  }
  */

  // FILTER를 간소화한, 메타데이터의 틀을 만들어주는 함수
  const filterMetaData = (index: number, tagData: string[]) => ({
    type: defaultName[index],
    // isOpen -> boolean이어야함, 지금 열고자하는 필터가 맞는지 여부를 비교
    isOpen: isSheetOpen === index,
    onClose: () => {
      // 바텀시트 닫는 부분
      setSheetOpen(-1);
    },
    onTap: (filter: boolean[]) => {
      const newFilterTag = [...filterTag];
      newFilterTag[index] = filter;
      setFilterTag(newFilterTag);

      // 여기도 바텀시트 닫는 부분 (onClose와 동일)
      setSheetOpen(-1);

      const trueIdx = filterTag[index].indexOf(true);

      const newSelectedTag = [...selectedTag];
      newSelectedTag[index] = FILTER[index].data[trueIdx];
      setSelectedTag(newSelectedTag);
    },
    data: tagData,
  });

  const FILTER = [
    filterMetaData(SORT_INDEX, SORT_DATA),
    filterMetaData(GENRE_INDEX, GENRE_DATA),
    filterMetaData(STYLE_INDEX, STYLE_DATA),
  ];

  // 바텀시트 내 각 태그 ref
  const tagRefs = useRef<HTMLParagraphElement[]>([]);
  // 필터 버튼명(선택한 태그명)을 임시로 관리하는 state
  // buttonName을 건드릴 경우, 태그를 선택할 때마다 버튼명이 변경된다. 이를 방지하고, 임시 저장해뒀다가 바텀시트 내렸을 때 반응하기 위해 별도로 관리!
  const [selectedTag, setSelectedTag] = useState(buttonName);

  // 필터 내 각 태그의 선택 여부를 관리하는 이차원배열 state ([정렬, 장르, 스타일])
  // 추후 해당 배열 파괴 -> 각 숫자를 data.length로 변경 예정
  const [filterTag, setFilterTag] = useState([
    new Array(3).fill(false),
    new Array(6).fill(false),
    new Array(6).fill(false),
  ]);

  useEffect(() => {
    const newFilterTag = [...filterTag];
    newFilterTag[SORT_INDEX] = [false, false, false];
    newFilterTag[GENRE_INDEX] = genreResponse.map((item) => buttonName[GENRE_INDEX] === item.name);
    newFilterTag[STYLE_INDEX] = styleResponse.map((item) => buttonName[STYLE_INDEX] === item.name);
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

    tagRefs.current.forEach((el: HTMLParagraphElement) => {
      if (!el) return;
      // 선택된 태그에 대해서
      if (tagRefs.current.indexOf(el) === index) {
        // 클릭할 때마다 토글 구현
        if (tagRefs.current[index].classList.contains('checked')) {
          tagRefs.current[index].classList.remove('checked');
        } else {
          tagRefs.current[index].classList.add('checked');
        }
      } else {
        // 태그는 한개씩만 선택 가능하므로, 선택된 태그가 아닌 나머지는 remove
        if (el.classList.contains('checked')) {
          el.classList.remove('checked');
        }
      }
    });
  };

  const handleClickButton = (onClose: () => void, filterIdx: number) => {
    onClose();

    const newTag = [...filterTag];
    if (selectedTag[filterIdx] === FILTER[filterIdx].type) {
      newTag[filterIdx] = FILTER[filterIdx].data.map(() => false);
    } else {
      newTag[filterIdx] = FILTER[filterIdx].data.map((_, idx) => {
        return idx === FILTER[filterIdx].data.indexOf(selectedTag[filterIdx]);
      });
    }
    setFilterTag(newTag);

    const newButtonName = [...buttonName];
    newButtonName[filterIdx] = selectedTag[filterIdx];
    setButtonName(newButtonName);
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
            <Sheet.Content>
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
