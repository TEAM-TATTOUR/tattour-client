import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';

export interface PointItemProp {
  name: string;
  point: number;
}

interface PointResponse {
  data: PointItemProp;
  code: number;
  message: string;
}

const useGetAllList = () => {
  const [response, setResponse] = useState<PointItemProp>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/stickers`)
      .then((res) => {
        const data: PointResponse = res.data;
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
  }, []);

  return { response, error, loading };
};

export default useGetAllList;
