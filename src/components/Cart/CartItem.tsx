import styled from 'styled-components';
import { IcCancelDark, IcMinus, IcMinusOneunder, IcPlus } from '../../assets/icon';
import { useState, useEffect } from 'react';
import DeleteCartModal from '../../common/Modal/DeleteCartModal/DeleteCartModal';
import { debounce } from 'lodash';
import api from '../../libs/api';
import { useNavigate } from 'react-router-dom';

const CartItem = ({
  id,
  mainImageUrl,
  name,
  price,
  originalPrice,
  count,
  handleClickQuantityButton,
}: {
  id: number;
  mainImageUrl: string;
  name: string;
  price: number;
  originalPrice: number;
  count: number;
  handleClickQuantityButton: (price: number) => void;
}) => {
  const [quantity, setQuantity] = useState(count);
  const [modalOn, setModalOn] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    await api
      .patch(`/cart`, {
        cartCountReqs: [
          {
            cartId: id,
            count: quantity + 1,
          },
        ],
      })
      .then()
      .catch((err) => {
        navigate('/error');
      });
  };

  const [debouncedFetchData, setDebouncedFetchData] = useState(() => debounce(fetchData, 300));

  useEffect(() => {
    // quantity가 변경될 때마다 debouncedFetchData를 새로 설정
    setDebouncedFetchData(() => debounce(fetchData, 300));
    return () => {
      debouncedFetchData.cancel(); // 컴포넌트가 언마운트 될 때 debounce를 취소합니다
    };
  }, [quantity]); // 의존성 배열에 quantity 추가

  const handleClickPlusButton = (price: number) => {
    handleClickQuantityButton(price);
    setQuantity((prev) => prev + 1);
    debouncedFetchData();
  };

  const handleClickMinusButton = (price: number) => {
    if (quantity > 1) {
      handleClickQuantityButton(-price);
      setQuantity((prev) => prev - 1);
      debouncedFetchData();
    }
  };

  return (
    <St.Item>
      <St.ItemInformation>
        <St.TattooImage src={mainImageUrl} />
        <St.TitleSection>
          <St.TattooTitle>{name}</St.TattooTitle>
          <St.ItemPriceBox>
            <St.TattooPriceText>{price.toLocaleString()}원</St.TattooPriceText>
            <St.TattooOriginalPriceText>
              {originalPrice.toLocaleString()}원
            </St.TattooOriginalPriceText>
          </St.ItemPriceBox>
        </St.TitleSection>
      </St.ItemInformation>
      <St.ButtonSection>
        <IcCancelDark onClick={() => setModalOn(true)} />
        {modalOn && <DeleteCartModal setModalOn={setModalOn} id={id} />}
        <St.Stepper>
          {quantity === 1 ? (
            <IcMinusOneunder />
          ) : (
            <IcMinus onClick={() => handleClickMinusButton(price)} />
          )}
          <span>{quantity}</span>
          <IcPlus onClick={() => handleClickPlusButton(price)} />
        </St.Stepper>
      </St.ButtonSection>
    </St.Item>
  );
};

const St = {
  ItemInformation: styled.section`
    display: flex;
  `,

  Stepper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 8.9rem;

    & > span {
      ${({ theme }) => theme.fonts.title_semibold_18};
      color: ${({ theme }) => theme.colors.gray6};
    }
  `,

  Item: styled.article`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  `,

  TattooImage: styled.img`
    width: 8.4rem;
    height: 8.4rem;
    object-fit: cover;
    background-color: ${({ theme }) => theme.colors.gray0};
  `,

  TitleSection: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;

    & > div {
      display: flex;
      align-items: center;
    }
  `,

  TattooTitle: styled.p`
    ${({ theme }) => theme.fonts.title_semibold_16};
  `,

  ItemPriceBox: styled.div`
    margin-top: 0.7rem;
  `,

  TattooPriceText: styled.p`
    margin-right: 0.8rem;
    ${({ theme }) => theme.fonts.title_semibold_16};
    color: ${({ theme }) => theme.colors.gray6};
  `,

  TattooOriginalPriceText: styled.p`
    ${({ theme }) => theme.fonts.body_line_medium_14}
    color: ${({ theme }) => theme.colors.gray1};
  `,

  ButtonSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  `,
};

export default CartItem;
