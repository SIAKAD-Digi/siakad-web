import axios, { AxiosError } from 'axios';

import { pathConfig } from '../config/path-config';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('access-token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const isLoginFailed =
      (error as AxiosError<{ message: string }>).response?.data?.message ===
      'nik atau password salah';

    if (error instanceof AxiosError && (error as AxiosError).status === 401 && !isLoginFailed) {
      localStorage.clear();
      location.replace(pathConfig.auth.login);
    }

    if (error instanceof AxiosError && (error as AxiosError).status === 403) {
      location.replace(pathConfig.auth.forbiden);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
