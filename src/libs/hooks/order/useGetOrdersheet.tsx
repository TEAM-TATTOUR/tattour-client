import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface OrderSheetRequest {
  stickerId?: number;
  count?: number;
}

export interface orderSheetStickersResProps {
  mainImageUrl: string;
  name: string;
  price: number;
  discountPrice: number;
  count: number;
}

export interface orderAmountDetailResProps {
  totalAmount: number;
  productAmount: number;
  shippingFee: number;
}

export interface userProfileResProps {
  id: number;
  name: string;
  phoneNumber: string;
}
export interface OrderSheetProps {
  orderSheetStickersRes: orderSheetStickersResProps[];
  orderAmountDetailRes: orderAmountDetailResProps;
  userProfileRes: userProfileResProps;
}

const useGetOrdersheet = ({ stickerId, count }: OrderSheetRequest) => {
  const navigate = useNavigate();

  const [response, setResponse] = useState<OrderSheetProps>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const url =
    stickerId && count
      ? `/order/ordersheet?stickerId=${stickerId}&count=${count}`
      : '/order/ordersheet';

  const fetchData = async () => {
    await api
      .get(url)
      .then((res) => {
        const data = res.data;
        setResponse(data.data);
      })
      .catch((err) => {
        setError(err);
        navigate('/error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useGetOrdersheet;
