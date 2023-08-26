import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface RelatedItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discountRate: number;
  discountPrice: number;
  isCustom: boolean;
}

interface RelatedResponse {
  data: {
    stickers: RelatedItemProps[];
  };
  code: number;
  message: string;
}

const useGetRelated = (id: number) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<RelatedItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/stickers/${id}/related`)
      .then((res) => {
        const data: RelatedResponse = res.data;
        setResponse(data.data.stickers);
      })
      .catch((err) => {
        setError(err);
        navigate('/complete');
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

export default useGetRelated;
