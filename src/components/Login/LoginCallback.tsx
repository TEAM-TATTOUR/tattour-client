import useKakaoLogin from '../../libs/hooks/useKakaoLogin';

const LoginCallback = () => {
  useKakaoLogin();
  return <div></div>;
};

export default LoginCallback;
