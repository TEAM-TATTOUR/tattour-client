import styled from 'styled-components';
import { IcHeartDark, IcHeartLight } from '../../assets/icon';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../libs/api';
import { useState } from 'react';
import Toast from '../../common/ToastMessage/Toast';

interface DetailFooterProp {
  id: number;
  setSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSecond: boolean;
  text: string;
  like: boolean | null;
  setLike: React.Dispatch<React.SetStateAction<boolean | null>>;
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
  const [toast, setToast] = useState(false);

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
    console.log('좋아요 추가 통신', id);
    await api
      .post(`/user/product-liked/save`, {
        stickerId: id,
      })
      .then((res) => {
        // setResponse(res.data.data);
        // 좋아요
        console.log('좋아요');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 좋아요 삭제 통신
  const postDisliked = async () => {
    console.log('좋아요 삭제 통신', id);

    await api
      .post(`/user/product-liked/${id}/delete`)
      .then((res) => {
        // setResponse(res.data.data);
        // 좋아요 삭제
        console.log('좋아요 삭제');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickLike = () => {
    // 로그인 상태가 아닌 경우
    setToast(true);
    // setLike(X)

    // 로그인 상태인 경우
    setLike((prev) => !prev);
    // 만약 원래 좋아요가 눌린 상태면
    // if (like) {
    //   postLiked();
    // } else {
    //   postDisliked();
    // }
  };

  return (
    <St.Footer>
      <St.Button type='button' onClick={handleClickButton}>
        {text}
      </St.Button>
      <St.Line />
      <St.Like onClick={handleClickLike}>{like ? <IcHeartLight /> : <IcHeartDark />}</St.Like>
      {toast && <Toast setToast={setToast} text='로그인이 필요합니다.' />}
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
