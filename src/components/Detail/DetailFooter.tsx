import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IcHeartDark } from '../../assets/icon';

const DetailFooter = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    //추후 ReceiptPage로 이동해야 함
  };

  return (
    <St.Footer>
      <St.Button type='button' onClick={handleClickButton}>
        구매하기
      </St.Button>
      <St.Line />
      <St.Like>
        <IcHeartDark />
      </St.Like>
    </St.Footer>
  );
  return <div>DetailFooter</div>;
};

export default DetailFooter;

const St = {
  Footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.gray9};
  `,

  Button: styled.button`
    width: 100%;
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
