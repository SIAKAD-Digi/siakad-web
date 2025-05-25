import { useState } from 'react';
import { AxiosError } from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router';

import axiosInstance from '../../../libs/axios';
import { pathConfig } from '../../../config/path-config';
import { pathApiConfig } from '../../../config/path-api-config';
import { COMMON_ERROR_MESSAGE } from '../../../constant/message';
import { ErrorMessageResponse } from '../../../types/error.types';
import { LoginPayload, LoginResponse } from '../types/login.types';

export function useLogin(payload: LoginPayload) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const submit = async () => {
    try {
      setLoading(true);
      const data: LoginResponse = await axiosInstance.post(pathApiConfig.auth.login(), payload);
      const token = data.data.access_token;
      const user = jwtDecode(token).sub;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('access-token', token);
      navigate(pathConfig.dashboard);
    } catch (error) {
      if (!(error instanceof AxiosError)) {
        setErrorMessage(COMMON_ERROR_MESSAGE);
        return;
      }

      const message = (error as AxiosError<ErrorMessageResponse>).response?.data.message;
      if (message) {
        setErrorMessage(message);
      }

      if (!message) {
        setErrorMessage(COMMON_ERROR_MESSAGE);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    submit,
    loading,
    errorMessage,
  };
}
