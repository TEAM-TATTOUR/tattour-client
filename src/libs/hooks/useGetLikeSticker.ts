import { AxiosError } from 'axios';
import { api } from '../api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export interface LikeStickerProps {
  id: number;
  stickerId: number;
  name: string;
  price: number;
  discountRate: number;
  discountPrice: number;
  mainImageUrl: string;
}

interface LikeStickerResponse {
  data: {
    stickersliked: LikeStickerProps[];
  };
  code: number;
  message: string;
}

const useGetLikeSticker = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<LikeStickerProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get('/user/productliked/saved')
      .then((res) => {
        const data: LikeStickerResponse = res.data;
        setResponse(data.data.stickersliked);
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

  return { response, error, loading, fetchData };
};

export default useGetLikeSticker;
