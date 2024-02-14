import axios, { AxiosInstance } from 'axios';

// /api/vi endpoint가 붙지 않은 instance
export const baseAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // timeout: 5000, // 원하는 경우 타임아웃 설정
});

export const api: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api/v1`,
  // timeout: 5000, // 원하는 경우 타임아웃 설정
});
// const ACCESS_TOKEN_KEY = 'accessToken';
const ACCESS_TOKEN_KEY = 'accesstoken';

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};

baseAxios.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});
