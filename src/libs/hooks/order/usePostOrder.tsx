import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';

export interface OrderRequest {
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

const usePostOrder = () => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .post(`/order`, {
        stickerId: 0,
        productCount: 0,
        shippingFee: 0,
        totalAmount: 0,
        recipientName: '',
        contact: '',
        mailingAddress: '',
        baseAddress: '',
        detailAddress: '',
      })
      .then((res) => {
        setResponse(res.data.data);
        //navigate to complete
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

export default usePostOrder;
