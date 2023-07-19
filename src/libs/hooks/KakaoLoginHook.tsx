import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAccessToken } from '../api';

interface resProps {
  data: {
    data: {
      accessToken: string;
      userExist: boolean;
    };
  };
}

const KakaoLoginHook = () => {
  // code: 카카오로부터 받은 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      axios
        .post(
          `http://43.201.90.237:9000/api/v1/user/signup`,
          // post body
          {
            socialPlatform: 'KAKAO',
          },
          // request headers
          {
            headers: {
              code: `${code}`,
            },
          },
        )
        .then((res: resProps) => {
          // accessToken 값 저장
          const accessToken = res.data.data.accessToken;
          const userExist = res.data.data.userExist;

          setAccessToken(accessToken);

          userExist ? navigate('/') : navigate('/register');
        })
        .catch((Error: object) => {
          console.log(Error);
        });
    }
  }, []);
  return;
};

export default KakaoLoginHook;
