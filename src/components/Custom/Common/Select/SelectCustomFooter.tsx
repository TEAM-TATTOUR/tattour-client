import { styled } from 'styled-components';
import api from '../../../../libs/api';
import { useNavigate } from 'react-router-dom';
// import ChargePointModal from '../../../../common/Modal/ChargePointModal/ChargePointModal';
// import React, { useState } from 'react';

interface SelectCustomFooterProps {
  isActiveNext: boolean;
  haveDesign: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setCustomId: React.Dispatch<React.SetStateAction<number>>;
}

const SelectCustomFooter = ({
  isActiveNext,
  haveDesign,
  setStep,
  setCustomId,
}: SelectCustomFooterProps) => {
  const navigate = useNavigate();

  const postCustomApply = async () => {
    try {
      const { data } = await api.post('/custom/apply', {
        haveDesign: haveDesign,
      });
      setCustomId(data.data.customId);
    } catch (err) {
      navigate('/error');
    }
  };

  const handleClickFooter = () => {
    if (!isActiveNext) return;
    postCustomApply();
    setStep((prev) => prev + 1);
  };

  return (
    <St.SelectCustomFooter $isActiveNext={isActiveNext} onClick={handleClickFooter}>
      <St.FooterText>다음</St.FooterText>
    </St.SelectCustomFooter>
  );
};

export default SelectCustomFooter;

const St = {
  SelectCustomFooter: styled.footer<{ $isActiveNext: boolean }>`
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 43rem;
    height: 7rem;

    background-color: ${({ $isActiveNext, theme }) =>
      $isActiveNext ? theme.colors.gray9 : theme.colors.gray3};
  `,

  FooterText: styled.p`
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
