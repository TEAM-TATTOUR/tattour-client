import styled from 'styled-components';
import { IcHeartDark, IcHeartLight } from '../../assets/icon';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../libs/api';

interface DetailFooterProp {
  id: number;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSecond: boolean;
  text: string;
  like: boolean;
  setLike: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  shippingFee: number;
}
const DetailFooter = ({
  id,
  setSheetOpen,
  isSecond,
  text,
  like,
  setLike,
  count,
  shippingFee,
}: DetailFooterProp) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currURL = location.pathname;

  const handleClickButton = () => {
    if (text === '충전하기') {
      // state 하나 넘겨줘야함. 추후 추가 예정
      navigate('/point-charge', {
        state: {
          redirectURL: currURL,
        },
      });
    } else if (isSecond) {
      // state로 OrderPage에서 필요한 정보 넘겨주기
      navigate(`/order`, {
        state: {
          stickerId: id,
          count: count,
          shippingFee: shippingFee,
        },
      });
    } else {
      setSheetOpen(true);
    }
  };

  // 좋아요 추가 통신
  const postLiked = async () => {
    await api
      .post(`/user/product-liked/save`, {
        stickerId: id,
      })
      .then((res) => {
        // setResponse(res.data.data);
        // 좋아요 추가
      })
      .catch((err) => {
        console.log(err);
      });
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

    position: sticky;
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
