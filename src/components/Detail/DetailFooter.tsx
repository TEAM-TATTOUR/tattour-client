import styled from 'styled-components';
import { IcHeartDark, IcHeartLight } from '../../assets/icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DetailFooterProp {
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSecond: boolean;
  text: string;
}
const DetailFooter = ({ setSheetOpen, isSecond, text }: DetailFooterProp) => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  const handleClickButton = () => {
    if (text === '충전하기') {
      // 충전하기 뷰로 navigate
      console.log('충전하기');
    } else if (isSecond) {
      navigate('/order');
    } else {
      setSheetOpen(true);
    }
  };

  return (
    <St.Footer>
      <St.Button type='button' onClick={handleClickButton}>
        {text}
      </St.Button>
      <St.Line />
      <St.Like onClick={() => setLike((prev) => !prev)}>
        {like ? <IcHeartLight /> : <IcHeartDark />}
      </St.Like>
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
