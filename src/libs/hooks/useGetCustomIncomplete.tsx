import { useEffect, useState } from 'react';
import api from '../api';
import { AxiosError } from 'axios';

export interface CustomIncompleteItemProps {
  id: number;
  name: string;
  imageUrl: string;
}

interface CustomIncompleteResponse {
  data: {
    customs: CustomIncompleteItemProps[];
  };
  code: number;
  message: string;
}

const useGetCustomIncomplete = () => {
  const [response, setResponse] = useState<CustomIncompleteItemProps[]>([]);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get('/custom/incomplete')
      .then((res) => {
        const data: CustomIncompleteResponse = res.data;
        setResponse(data.data.customs);
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

export default useGetCustomIncomplete;
