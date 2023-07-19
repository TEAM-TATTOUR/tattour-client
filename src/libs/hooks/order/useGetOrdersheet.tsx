import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';

export interface OrderSheetRequest {
  stickerId: number;
  count: number;
  shippingFee: number;
}

interface getOrderSheetStickerInfoProps {
  mainImageUrl: string;
  name: string;
  price: number;
  discountedPrice: number;
  count: number;
}

interface getOrderAmountResProps {
  totalAmount: number;
  productAmount: number;
  shippingFee: number;
}

interface getUserOrderPointResProps {
  userPoint: number;
  resultPoint: number;
  lacked: boolean;
}

export interface OrderSheetProps {
  getOrderSheetStickerInfo: getOrderSheetStickerInfoProps;
  getOrderAmountRes: getOrderAmountResProps;
  getUserOrderPointRes: getUserOrderPointResProps;
}

interface OrderSheetResponse {
  data: OrderSheetProps;
  code: number;
  message: string;
}

const useGetOrdersheet = ({ stickerId, count, shippingFee }: OrderSheetRequest) => {
  const [response, setResponse] = useState<OrderSheetProps>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/order/ordersheet?stickerId=${stickerId}&count=${count}&shippingFee=${shippingFee}`)
      .then((res) => {
        const data: OrderSheetResponse = res.data;
        setResponse(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        setError(err);
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
