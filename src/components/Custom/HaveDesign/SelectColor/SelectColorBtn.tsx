import { styled } from 'styled-components';
import { IcApplyCheckGray, IcApplyCheckPink } from '../../../../assets/icon';

interface SelectColorBtnProps {
  id: string;
  title: string;
  src: string;
  onClick: (id: string) => void;
  activeBtn: string;
}

const SelectColorBtn = ({ id, title, src, onClick, activeBtn }: SelectColorBtnProps) => {
  const handleClick = (id: string) => {
    onClick(id);
  };

  return (
    <St.SelectBtnContent
      type='button'
      id={id}
      onClick={() => handleClick(id)}
      className={`${activeBtn === id ? 'isSelected' : ''}`}
    >
      {id === activeBtn ? <IcApplyCheckPink /> : <IcApplyCheckGray />}
      <img src={src} alt={title} />
      <St.SelectBtnTitle>{title}</St.SelectBtnTitle>
    </St.SelectBtnContent>
  );
};

export default SelectColorBtn;

const St = {
  SelectBtnContent: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    /* width: 16rem; */
    width: 47%;
    /* height: 16.8rem; */
    aspect-ratio: 160 / 163;
    padding: 0.8rem 0 3rem;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.bg};

    &.isSelected {
      border: 0.1rem solid ${({ theme }) => theme.colors.pink5};
    }
  `,

  SelectBtnTitle: styled.h3`
    color: ${({ theme }) => theme.colors.gray5};
    ${({ theme }) => theme.fonts.title_semibold_16};

    text-align: center;

    white-space: pre-line;

    pointer-events: none;
  `,
};
