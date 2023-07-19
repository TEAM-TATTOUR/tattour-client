import styled from 'styled-components';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import api from '../../libs/api';
import { OrderSheetProps } from '../../libs/hooks/order/useGetOrdersheet';

interface OrderRequest {
  stickerId: number;
  productCount: number;
  shippingFee: number;
  totalAmount: number;
  recipientName: string;
  contact: string;
  mailingAddress: string;
  baseAddress: string;
  detailAddress: string;
}

const OrderFooter = ({
  isComplete,
  price,
  postData,
  response,
}: {
  isComplete: boolean;
  price: number | undefined;
  postData: OrderRequest;
  response: OrderSheetProps;
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .post(`/order`, {
        ...postData,
        contact: postData.contact.replaceAll('-', ''),
      })
      .then((res) => {
        navigate('/complete', {
          state: response,
        });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClickButton = () => {
    // post 통신
    fetchData();
  };

  return (
    <St.footer>
      <St.button
        $isComplete={isComplete}
        type='button'
        onClick={handleClickButton}
        disabled={isComplete ? false : true}
      >
        {price && price.toLocaleString()}원 결제하기
      </St.button>
    </St.footer>
  );
};

export default OrderFooter;

const St = {
  footer: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky;
    bottom: 0;

    width: 100%;
    height: 7rem;
  `,

  button: styled.button<{ $isComplete: boolean }>`
    width: 100%;
    height: 100%;

    background-color: ${({ theme, $isComplete }) =>
      $isComplete ? theme.colors.gray9 : theme.colors.gray3};

    color: ${({ theme, $isComplete }) => ($isComplete ? theme.colors.pink5 : theme.colors.white)};
    ${({ theme }) => theme.fonts.title_semibold_18};
  `,
};
