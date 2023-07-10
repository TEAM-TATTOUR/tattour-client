import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const MainFooter = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/custom');
  };

  return (
    <St.footer>
      <St.button type='button' onClick={handleClickButton}>
        나만의 커스텀 타투 만들기
      </St.button>
    </St.footer>
  );
};

const St = {
  footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;

    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  button: styled.button`
    width: 100%;
    height: 100%;

    color: ${({ theme }) => theme.colors.pink5};
    font: ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};

export default MainFooter;