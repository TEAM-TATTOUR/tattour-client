import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 5000, // 원하는 경우 타임아웃 설정
});

const ACCESS_TOKEN_KEY = 'accessToken';

export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const removeAccessToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
};

api.interceptors.request.use((config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
});

export default api;