import { useState, useEffect, useCallback } from 'react';

import axiosInstance from '../../../../libs/axios';
import { pathApiConfig } from '../../../../config/path-api-config';
import { TeacherQueryParams, GetTeachersResponse } from '../types/teacher.types';

export function useGetTeachers(params: TeacherQueryParams) {
  const [data, setData] = useState<GetTeachersResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const paramStr = JSON.stringify(params);
  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const teachersData: GetTeachersResponse = await axiosInstance.get(
        pathApiConfig.masterData.teacher.getAll(),
        {
          params: JSON.parse(paramStr),
        },
      );
      setData(teachersData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [paramStr]);

  useEffect(() => {
    fetch();
  }, [paramStr, fetch]);

  return {
    data,
    loading,
    error,
    fetch,
  };
}
