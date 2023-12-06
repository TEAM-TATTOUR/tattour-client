import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export interface CustomDetailItemProps {
  id: number;
  userId: number;
  stickerId?: number;
  themes: string[];
  styles: string[];
  // default 값 존재
  mainImageUrl: string;
  images: string[];
  haveDesign: boolean;
  size?: string;
  name: string;
  description?: string;
  demand?: string;
  count?: number;
  isColored?: boolean;
  isPublic?: boolean;
  isCompleted: boolean;
  process?: string;
  viewCount: number;
}

interface CustomDetailResponse {
  data: CustomDetailItemProps;
  code: number;
  message: string;
}

const useGetCustomDetail = (id: string) => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<CustomDetailItemProps>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/user/custom/${id}`)
      .then((res) => {
        const data: CustomDetailResponse = res.data;
        console.log('data', data);
        setResponse(data.data);
      })
      .catch((err) => {
        console.log(err);
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

  return { response, error, loading };
};

export default useGetCustomDetail;
