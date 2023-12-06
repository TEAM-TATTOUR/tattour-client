import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export interface SearchStickerItemProps {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  discountPrice: number;
  discountRate: number;
  isCustom: boolean;
}

interface SearchStickerResponse {
  data: {
    stickers: SearchStickerItemProps[];
  };
  code: number;
  message: string;
}

const useGetSearchSticker = (search: string) => {
  const navigate = useNavigate();
  const [response, SetResponse] = useState<SearchStickerItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/search/stickers?word=${search}`)
      .then((res) => {
        const data: SearchStickerResponse = res.data;
        SetResponse(data.data.stickers);
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
  }, [search]);

  return { response, error, loading };
};

export default useGetSearchSticker;
