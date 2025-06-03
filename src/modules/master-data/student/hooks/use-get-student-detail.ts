import { useState, useEffect } from 'react';

import axiosInstance from '../../../../libs/axios';
import { GetStudentDetailResponse } from '../types/student.types';
import { pathApiConfig } from '../../../../config/path-api-config';

export function useGetStudentDetail(id: string) {
  const [data, setData] = useState<GetStudentDetailResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const studentData: GetStudentDetailResponse = await axiosInstance.get(
          pathApiConfig.masterData.student.getDetail(id),
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
