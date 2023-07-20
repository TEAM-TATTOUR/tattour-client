import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';

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
