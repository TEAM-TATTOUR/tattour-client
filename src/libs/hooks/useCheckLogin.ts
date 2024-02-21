import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../api';

const useCheckLogin = () => {
  const navigate = useNavigate();

  const checkLogin = () => {
    if (!getAccessToken()) {
      navigate('/login');
    }
  };

  return checkLogin;
};

export default useCheckLogin;
