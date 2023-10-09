import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

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
  productLiked: boolean | null;
}

interface StickerResponse {
  data: StickerItemProps;
  code: number;
  message: string;
}

const useGetSticker = (id: number) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<StickerItemProps>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/stickers/${id}`)
      .then((res) => {
        const data: StickerResponse = res.data;
        setResponse(data.data);
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
  }, [id]);

  return { response, error, loading };
};

export default useGetSticker;
