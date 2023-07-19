import { useEffect } from 'react';
import api from '../api';

interface usePatchProfileProps {
  state: string;
  phoneNum: string;
}

const usePatchProfile = ({ state, phoneNum }: usePatchProfileProps) => {
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

export default usePatchProfile;
