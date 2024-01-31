import { AxiosError, isAxiosError } from 'axios';
import { useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

interface CustomApplyResponseData {
  customId: number;
}

// interface CustomApplyResponse {
//   data: CustomApplyResponseData;
//   code: number;
//   message: string;
// }

const usePostCustomApply = (haveDesign: boolean) => {
  const navigate = useNavigate();

  const [response, setResponse] = useState<CustomApplyResponseData>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await api.post('/custom/apply', {
        haveDesign: haveDesign,
      });
      setResponse(data.data);
    } catch (err) {
      if (isAxiosError(err)) {
        setError(err);
        navigate('/error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};

export default usePostCustomApply;
