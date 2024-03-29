import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, setAccessToken } from '../api';

interface resProps {
  data: {
    data: {
      // userId: number; 누락
      accessToken: string;
      isUserSignUpCompleted: boolean;
    };
  };
}

const useKakaoLogin = () => {
  // CODE: 카카오로부터 받은 인가코드
  const CODE = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (CODE) {
      api
        .post(
          `/user/signup`,
          // post body
          {
            socialPlatform: 'KAKAO',
          },
          // request headers
          {
            headers: {
              code: `${CODE}`,
            },
          },
        )
        .then((res: resProps) => {
          // accessToken 값 저장
          const { accessToken, isUserSignUpCompleted } = res.data.data;

          setAccessToken(accessToken);

          isUserSignUpCompleted ? navigate('/') : navigate('/login', { state: { step: 1 } });
        })
        .catch(() => {
          navigate('/error');
        });
    }
  }, []);
  return;
};

export default useKakaoLogin;
