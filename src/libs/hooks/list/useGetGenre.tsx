import { useEffect, useState } from 'react';
import api from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface GenreItemProps {
  id: number;
  name: string;
}

interface GenreResponse {
  data: {
    themeSummaries: GenreItemProps[];
  };
  code: number;
  message: string;
}

const useGetGenre = () => {
  const navigate = useNavigate();

  const [genreResponse, setResponse] = useState<GenreItemProps[]>([]);
  const [genreError, setError] = useState<AxiosError>();
  const [genreLoading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get(`/theme/summary`)
      .then((res) => {
        const data: GenreResponse = res.data;
        setResponse(data.data.themeSummaries);
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

  return { genreResponse, genreError, genreLoading };
};

export default useGetGenre;
