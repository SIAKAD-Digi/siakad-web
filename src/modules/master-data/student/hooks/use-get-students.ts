import { useState, useEffect, useCallback } from 'react';

import axiosInstance from '../../../../libs/axios';
import { pathApiConfig } from '../../../../config/path-api-config';
import { StudentQueryParams, GetStudentsResponse } from '../types/student.types';

export function useGetStudents(params: StudentQueryParams) {
  const [data, setData] = useState<GetStudentsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const paramStr = JSON.stringify(params);
  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const studentsData: GetStudentsResponse = await axiosInstance.get(
        pathApiConfig.masterData.student.getAll(),
        {
          params: JSON.parse(paramStr),
        },
      );
      setData(studentsData);
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
