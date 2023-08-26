import { useState } from 'react';
import api from '../../api';
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

  const navigate = useNavigate();

  const fetchData = async () => {
    await api
      .post(`/order`, {
        postData,
      })
      .then((res) => {
        setResponse(res.data.data);
        navigate('/complete');
      })
      .catch((err) => {
        console.log(err);
        navigate('/error');
      });
  };

  fetchData();

  return { response };
};

export default usePostOrder;
