import { api } from '../api';
import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface UserProfileProps {
  homeUserInfo: {
    name: string;
  };
}

interface UserProfileResponse {
  data: UserProfileProps;
  code: number;
  message: string;
}

const useGetUserProfile = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<UserProfileProps>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    await api
      .get('/user/profile')
      .then((res) => {
        const data: UserProfileResponse = res.data;
        setResponse(data.data);
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

export default useGetUserProfile;
