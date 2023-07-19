import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';

export interface StickerItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  discountRate: number;
  discountPrice: number;
  composition: string;
  size: string;
  isCustom: boolean;
  shippingCost: number;
  stickerThemes: string[];
  stickerStyles: string[];
  images: string[];
}

interface StickerResponse {
  data: {
    stickers: StickerItemProps[];
  };
  code: number;
  message: string;
}

const useGetAllList = () => {
  const [response, setResponse] = useState<StickerItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/stickers`)
      .then((res) => {
        const data: StickerResponse = res.data;
        setResponse(data.data.stickers);
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

export default useGetAllList;
