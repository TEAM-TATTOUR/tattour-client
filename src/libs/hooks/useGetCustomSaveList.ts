import { useState, useEffect } from 'react';
import { api } from '../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface CustomSaveItemProps {
  id: number;
  name: string;
  imageUrl: string;
}

interface CustomSaveResponse {
  data: {
    customs: CustomSaveItemProps[];
  };
  code: number;
  message: string;
}

const useGetCustomSaveList = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<CustomSaveItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get('/user/custom/incomplete')
      .then((res) => {
        const data: CustomSaveResponse = res.data;
        setResponse(data.data.customs);
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

export default useGetCustomSaveList;
