import { useState, useEffect } from 'react';

import axiosInstance from '../../../../libs/axios';
import { GetTeacherDetailResponse } from '../types/teacher.types';
import { pathApiConfig } from '../../../../config/path-api-config';

export function useGetTeacherDetail(id: string) {
  const [data, setData] = useState<GetTeacherDetailResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const studentData: GetTeacherDetailResponse = await axiosInstance.get(
          pathApiConfig.masterData.teacher.getDetail(id),
        );
        setData(studentData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return { data, loading, error };
}
