import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IcHeartDark, IcHeartLight } from '../../assets/icon';
import { useState } from 'react';
import DetailBottom from './DetailBottom';

const DetailFooter = () => {
  const [like, setLike] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false); // bottomsheet를 위한 state

  const handleClickButton = () => {
    setSheetOpen(true);
  };

  return (
    <St.Footer>
      <St.Button type='button' onClick={handleClickButton}>
        구매하기
      </St.Button>
      <St.Line />
      <St.Like onClick={() => setLike((prev) => !prev)}>
        {like ? <IcHeartLight /> : <IcHeartDark />}
      </St.Like>
      <DetailBottom isSheetOpen={isSheetOpen} setSheetOpen={setSheetOpen} />
    </St.Footer>
  );
};

export default DetailFooter;

const St = {
  Footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;

    width: 100%;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  Button: styled.button`
    width: 30.5rem;
    height: 100%;
    color: ${({ theme }) => theme.colors.pink5};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
  Line: styled.div`
    width: 0.1rem;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.gray5};
  `,
  Like: styled.button`
    width: 7rem;
    height: 7rem;
  `,
};
