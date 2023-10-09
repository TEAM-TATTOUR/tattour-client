import { useEffect, useState } from 'react';
import api, { getAccessToken } from '../../api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface PointItemProp {
  homeUserInfo: {
    name: string;
    point: number;
  };
}

interface PointResponse {
  data: PointItemProp;
  code: number;
  message: string;
}

const useGetPoint = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<PointItemProp>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);
  const [isLogin] = useState(getAccessToken);

  const fetchData = async () => {
    await api
      .get(`/user/profile`)
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
    if (!isLogin) return;
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useGetPoint;
