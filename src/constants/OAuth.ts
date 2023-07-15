export const CLIENT_ID = import.meta.env.VITE_APP_REST_API_KEY;
export const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URI;

// prompt=login: 기존 사용자 인증 여부와 상관없이, 로그인 화면 출력 (추가 설정/ 필수 아님!)
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
