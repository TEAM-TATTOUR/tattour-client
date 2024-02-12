import styled from 'styled-components';
import { IcArrowBottomSmallGray, IcArrowBottomSmallLight } from '../../assets/icon';

interface FilterButtonProps {
  idx: number;
  button: string;
  setSheetOpen: React.Dispatch<React.SetStateAction<number>>;
  defaultName: string[];
}
const FilterButton = ({ idx, button, setSheetOpen, defaultName }: FilterButtonProps) => {
  const isSelectedFilter: boolean = button !== defaultName[idx];
  return (
    <St.FilterBtn
      key={button}
      $selected={isSelectedFilter}
      onClick={() => {
        setSheetOpen(idx); // 어떤 필터 버튼을 클릭했는지에 따라 isSheetOpen 값이 0, 1, 2로 바뀜
      }}
    >
      {button}
      {isSelectedFilter ? <IcArrowBottomSmallLight /> : <IcArrowBottomSmallGray />}
    </St.FilterBtn>
  );
};

export default FilterButton;

const St = {
  FilterBtn: styled.button<{ $selected: boolean }>`
    display: flex;
    padding: 0.6rem 0.7rem 0.6rem 1.3rem;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    border-radius: 0.5rem;
    background-color: ${({ theme, $selected }) =>
      $selected ? theme.colors.gray7 : theme.colors.bg};

    color: ${({ theme, $selected }) => ($selected ? theme.colors.white : theme.colors.gray3)};
    ${({ theme }) => theme.fonts.body_medium_14};
  `,
};
