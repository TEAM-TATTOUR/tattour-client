import { styled } from 'styled-components';
import ChargePointModal from '../../../common/Modal/ChargePointModal/ChargePointModal';
import { useState } from 'react';

interface SelectCustomFooterProps {
  isActiveNext: boolean;
  haveDesign: boolean;
}

const SelectCustomFooter = ({ isActiveNext, haveDesign }: SelectCustomFooterProps) => {
  const [modalOn, setModalOn] = useState(false);

  const handleClickFooter = () => {
    if (!isActiveNext) return;
    setModalOn(true);
  };

  return (
    <>
      <St.SelectCustomFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
        <St.FooterText>다음</St.FooterText>
      </St.SelectCustomFooter>
      {modalOn && <ChargePointModal setModalOn={setModalOn} haveDesign={haveDesign} />}
    </>
  );
};

export default SelectCustomFooter;

const St = {
  SelectCustomFooter: styled.footer<{ $isActiveNext: boolean }>`
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 7rem;

    background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
