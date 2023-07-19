import { useEffect, useState } from 'react';
import api from '../api';
import { AxiosError } from 'axios';

interface CustomResponse {
  data: {
    id: number;
    userId: number;
    stickerId: number;
    themes: string[];
    styles: string[];
    mainImageUrl: string;
    images: string[];
    haveDesign: boolean;
    size: string;
    description: string;
    demand: string;
    count: number;
    isColored: boolean;
    isPublic: boolean;
    isCompleted: boolean;
    process: string;
    viewCount: number;
  };
  code: number;
  message: string;
}

const usePatchCustom = () => {
  const [response, setResponse] = useState<CustomResponse['data'] | null>(null);
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .patch('/custom/update')
      .then((res) => {
        const data: CustomResponse = res.data;
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

export default usePatchCustom;
