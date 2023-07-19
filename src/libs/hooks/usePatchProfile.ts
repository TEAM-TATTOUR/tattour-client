import { useEffect } from 'react';
import api from '../api';

interface usePhoneNumProps {
  state: string;
  phoneNum: string;
}

const usePhoneNum = ({ state, phoneNum }: usePhoneNumProps) => {
  useEffect(() => {
    api
      .patch(
        `/user/profile`,
        // post body
        {
          name: `${state}`,
          phoneNumber: `${phoneNum}`,
        },
        // request headers
        {},
      )
      .then((res) => {
        console.log(res);
      })
      .catch((Error: object) => {
        console.log(Error);
      });
  }, []);

  return;
};

export default usePhoneNum;
