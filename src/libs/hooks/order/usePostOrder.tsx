import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

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

const usePostOrder = ({ postData }: { postData: OrderRequest }) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  console.log(response);

  const navigate = useNavigate();

  const fetchData = async () => {
    await api
      .post(`/order`, {
        postData,
      })
      .then((res) => {
        setResponse(res.data.data);
        //navigate to complete
        navigate('/complete');
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  fetchData();

  return { response, error, loading };
};

export default usePostOrder;
