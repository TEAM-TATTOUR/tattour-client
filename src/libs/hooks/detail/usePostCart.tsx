import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';

export interface CartItemProps {
  stickerId: number;
  count: number;
}

const usePostCart = (body: CartItemProps) => {
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const postData = async () => {
    await api
      .post('/cart/items', body)
      // 성공 시 navigate
      .then(() => console.log('카트에 추가 성공'))
      .catch((err) => {
        setError(err);
        // 에러뷰로 navigate
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    postData();
  }, []);

  return { error, loading };
};

export default usePostCart;
