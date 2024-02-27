import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, removeAccessToken } from '../api';

const Interceptors = () => {
  const navigate = useNavigate();

  useEffect(() => {
    api.interceptors.response.use(
      (res) => res,
      (err) => {
        console.log(err);
        if (err.response.status === 401) {
          removeAccessToken();
          navigate('/expired');
          return new Promise(() => null);
        }
        return Promise.reject(err);
      },
    );
  }, []);

  return null;
};

export default Interceptors;
