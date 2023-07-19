import { useEffect } from 'react';
import axios from 'axios';

interface usePostPhoneNumProps {
  phoneNum: string;
  isRequired: boolean;
}

const usePostPhoneNum = ({ phoneNum, isRequired }: usePostPhoneNumProps) => {
  const ACCESS_TOKEN_KEY = 'accessToken';
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  useEffect(() => {
    axios
      .post(
        `https://api.tattour.shop/sms/send/verification-code`,
        // post body
        {
          phoneNumber: `${phoneNum}`,
        },
        // request headers
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then((res) => {
        console.log(res);
      })
      .catch((Error: object) => {
        console.log(Error);
      });
  }, [isRequired]);
  return;
};

export default usePostPhoneNum;
