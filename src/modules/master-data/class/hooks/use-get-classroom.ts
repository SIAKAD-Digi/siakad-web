import { useState, useEffect, useCallback } from 'react';

import axiosInstance from '../../../../libs/axios';
import { pathApiConfig } from '../../../../config/path-api-config';
import { ClassQueryParams, GetClassroomResponse } from '../types/classroom.types';

export function useGetClassroom(params: ClassQueryParams) {
  const [data, setData] = useState<GetClassroomResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const paramStr = JSON.stringify(params);
  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const classData: GetClassroomResponse = await axiosInstance.get(
        pathApiConfig.masterData.class.getAll(),
        {
          params: JSON.parse(paramStr),
        },
      );
      setData(classData);
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
