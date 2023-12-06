import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export interface MainStyleItemProps {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
}

interface MainStyleResponse {
  data: {
    styleInfos: MainStyleItemProps[];
  };
  code: number;
  message: string;
}

const useGetStyleCard = () => {
  const naviagte = useNavigate();
  const [response, setResponse] = useState<MainStyleItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get('/style')
      .then((res) => {
        const data: MainStyleResponse = res.data;
        setResponse(data.data.styleInfos);
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

  return { response, error, loading };
};

export default useGetStyleCard;
