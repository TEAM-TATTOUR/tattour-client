import { useEffect, useState } from 'react';
import { api } from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface StyleItemProps {
  id: number;
  name: string;
}

interface StyleResponse {
  data: {
    styleSummaries: StyleItemProps[];
  };
  code: number;
  message: string;
}

const useGetStyle = () => {
  const navigate = useNavigate();

  const [styleResponse, setResponse] = useState<StyleItemProps[]>([]);
  const [styleError, setError] = useState<AxiosError>();
  const [styleLoading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/style/summary`)
      .then((res) => {
        const data: StyleResponse = res.data;
        setResponse(data.data.styleSummaries);
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

  return { styleResponse, styleError, styleLoading };
};

export default useGetStyle;
