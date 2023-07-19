import { useEffect, useState } from 'react';
import api from '../api';
import { AxiosError } from 'axios';

export interface AllListItemProps {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discountRate: number;
  discountPrice: number;
  isCustom: boolean;
}

interface AllListResponse {
  data: {
    stickers: AllListItemProps[];
  };
  code: number;
  message: string;
}

const useGetAllList = (buttonName: string[]) => {
  const sort = buttonName[0];
  const genre = buttonName[1];
  const style = buttonName[2];
  const [response, setResponse] = useState<AllListItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/stickers?sort=${sort}&theme=${genre}&style=${style}`)
      .then((res) => {
        const data: AllListResponse = res.data;
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
  }, [sort, genre, style]);

  return { response, error, loading };
};

export default useGetAllList;
