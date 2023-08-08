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
}: FilterBottomProps) => {
  const { genreResponse } = useGetGenre();
  const { styleResponse } = useGetStyle();

  const genreData = genreResponse.map((genre: GenreItemProps) => genre.name);
  const styleData = styleResponse.map((style: StyleItemProps) => style.name);

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
  const FILTER = [
    {
      type: '정렬',
      isOpen: isSortOpen,
      onClose: () => setSortOpen(false),
      // onTap 로직 : '태그 선택 여부' & '선택한 태그명을 반영한 새 버튼명' 을 저장 및 반영한 후 바텀시트 off
      onTap: (filter: boolean[]) => {
        // [ backdrop을 눌러서 바텀시트를 끌때, 현재 선택한 태그 정보를 저장하고 시트off 하는 코드 ]
        // 0. 인자 filter : 현재 필터 내 각 태그의 선택 여부 배열
        // 1. 모든 필터 내 각 태그의 선택 여부를 관리하는 filterTag에 '현태 필터 태그 여부인 filter'를 반영하여 update
        // 2. 바텀시트 off
        const newFilterTag = [...filterTag];
        newFilterTag[0] = filter;
        setFilterTag(newFilterTag);
        setSortOpen(false);

        // 현재 필터 내 '선택'된 태그의 index를 trueIdx에 저장
        const trueIdx = filterTag[0].indexOf(true);

        // [ 현재 '선택'된 태그 명으로 필터 버튼명을 업데이트하는 코드 ]
        // 0. selectedTag : 필터 버튼명을 관리하는 state (바텀시트 on일 동안 건드리는 state / buttonName은 off일때 건드림)
        // 1. trueIdx를 활용해서 선택한 태그의 이름으로 버튼명을 update
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
        newSelectedTag[1] = genreData[trueIdx];
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
        newSelectedTag[2] = styleData[trueIdx];
        setSelectedTag(newSelectedTag);
      },
      data: styleData,
    },
  ];

  // 바텀시트 내 각 태그 ref
  const tagRefs = useRef<HTMLParagraphElement[]>([]);
  // 필터 버튼명(선택한 태그명)을 임시로 관리하는 state
  // buttonName을 건드릴 경우, 태그를 선택할 때마다 버튼명이 변경된다. 이를 방지하고, 임시 저장해뒀다가 바텀시트 내렸을 때 반응하기 위해 별도로 관리!
  const [selectedTag, setSelectedTag] = useState(buttonName);

  // 필터 내 각 태그의 선택 여부를 관리하는 이차원배열 state ([정렬, 장르, 스타일])
  const [filterTag, setFilterTag] = useState([
    [false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ]);

  // [ 바텀시트를 열때, 기존에 선택됐던 태그를 표시하기 위한 코드 ]
  // 1. 서버통신을로 바텀시트에 들어갈 태그 정보를 불러올 때마다(바텀시트를 열 때마다) useEffect 실행
  // 2. 태그 선택 여부를 관리하는 filterTag에서 각 정렬, 장르, 스타일의 값들을 세팅
  // 2-a. 정렬 : 모두 flase로
  // 2-b. 장르 : 각 태그가 현재버튼명(현재 선택돼있는 태그명)과 동일하면 true(표시), 아니면 false
  // 2-c. 스타일 : 각 태그가 현재버튼명(현재 선택돼있는 태그명)과 동일하면 true(표시), 아니면 flase
  useEffect(() => {
    const newFilterTag = [...filterTag];
    newFilterTag[0] = [false, false, false];
    newFilterTag[1] = genreResponse.map((item) => buttonName[1] === item.name);
    newFilterTag[2] = styleResponse.map((item) => buttonName[2] === item.name);
    setFilterTag(newFilterTag);
  }, [genreResponse, styleResponse]);

  // [ 필터 내 각 태그 클릭 시 실행하는 함수 - selectedTag update & check 토글 ]
  // 0. tag : 태그명, index : 태그index, filterIdx : 필터index(0/1/2)
  // 1. 필터 버튼명(선택한 태그명)을 임시로 관리하는 selectedTag를 상황에 따라 update
  // 1-a. 현재 필터에서 기존에 선택된 태그와 현재 클릭한 태그가 동일하다면 -> 버튼명(선택된 태그)는 디폴트(미선택)로 변경(정렬/장르/스타일)
  // 1-b. 기존에 선택된 태그와 다른 태그를 클릭했다면 -> 버튼명(선택된 태그)을 현재 클릭한 태그명으로 변경

  const handleClickTag = (tag: string, index: number, filterIdx: number) => {
    const newSelectedTag = [...selectedTag];
    if (selectedTag[filterIdx] === tag) {
      newSelectedTag[filterIdx] = FILTER[filterIdx].type;
    } else {
      newSelectedTag[filterIdx] = tag;
    }
    setSelectedTag(newSelectedTag);

    // TODO: selectedTag와 tag를 아니까 class 토글 로직 간소화 가능
    // 승희의 TODO
    // tagRefs에서 index와 맞는 ref 아이템 찾기 -> selectedTag에서 tag 찾기 로 대체하면 될듯
    // 토글 구현 파트는 그대로 가져가야하고 (class토글 방식을 사용하려면 ref.current[index]를 써야하기 때문에)
    // forEach(el) ... if (tagRefs.current.indexOf(el) === index) {tagRefs.current[index].classList~}
    // 위의 코드는 '반 학생을 한명씩 불러서, 이 사람이 승희일 경우, 승희에게 사과를 줘라' 의 구조임. 즉 중복됐다는 뜻
    // 이 문장은 '승희에게 사과를 줘라' 라고만 말해도 똑같이 작동함
    // 따라서 불필요한 반복문과 조건문! -> 삭제하자.

    // 근데? -> 반복문과 조건문 중 하나라도 지울경우 바깥쪽 else문.. '태그는 한개씩만 선택 가능'의 구현이 꼬임
    // 기존 로직 : tag들을 다 돌면서 해당 태그가 선택한 태그가 맞으면 체크표시, 선택한 태그가 아닐경우 체크표시 (돼있을 경우) 취소
    // 처음 계획한대로 수정하면 : 토글은 간단히 잘 구현되지만, 클릭한 태그 외 나머지들 중 classList에 checked가 들어있는걸 찾아서 지울 수 있는 방법이 없음
    // HELP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    tagRefs.current.forEach((el: HTMLParagraphElement) => {
      if (!el) return;
      // 선택된 태그에 대해서
      if (tagRefs.current.indexOf(el) === index) {
        // 클릭할 때마다 토글 구현
        if (tagRefs.current[index].classList[2] === 'checked') {
          tagRefs.current[index].classList.remove('checked');
        } else {
          tagRefs.current[index].classList.add('checked');
        }
      } else {
        // 태그는 한개씩만 선택 가능하므로, 선택된 태그가 아닌 나머지는 remove
        if (el.classList[2] === 'checked') {
          el.classList.remove('checked');
        }
      }
    });
  };

  // [ '적용하기' footer 클릭 시 실행하는 함수 - 바텀시트 닫고 버튼명 filterTag & buttonName update ]
  // 0. onClose : 바텀시트를 닫는 함수, filterIdx : 필터index(0/1/2)
  // 1. 바텀시트 닫기
  // 2. filterTag(각 태그 선택 여부 관리하는 이차원 배열) update
  // 2-a. 선택된 태그명이 필터의 디폴트와 같다면 (아무 태그도 선택X) -> 해당 필터의 선택여부 모두 false
  // 2-b. 아니라면 (어떤 태그가 선택됐다면) -> 해당 필터의 각 태그 선택여부 표시 (선택한 태그의 index 위치만 true)
  // 3. buttonName update
  // 3-a. 임시 보관해둔 selectedTag의 데이터를 buttonName에 반영
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

    // TODO : tagRefs를 순회할 필요가 전혀없다. 각 요소(el)를 사용하지도 않고 있음.. 지우자
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
