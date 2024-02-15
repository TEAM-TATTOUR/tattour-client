import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';

export interface MyCustomItemProps {
  id: number;
  name: string;
  imageUrl: string;
}

interface MyCustomResponseProps {
  data: {
    customs: MyCustomItemProps[];
  };
  message: string;
  code: number;
}

const useGetMyCustom = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<MyCustomItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    await api
      .get('/user/custom/complete')
      .then((res) => {
        const data: MyCustomResponseProps = res.data;
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

export default useGetMyCustom;
