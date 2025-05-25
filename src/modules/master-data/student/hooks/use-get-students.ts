import { useState, useEffect } from 'react';

import axiosInstance from '../../../../libs/axios';
import { pathApiConfig } from '../../../../config/path-api-config';
import { StudentQueryParams, GetStudentsResponse } from '../types/student.types';

export function useGetStudents({
  page,
  limit,
  name,
  status,
  start_date,
  end_date,
}: StudentQueryParams) {
  const [data, setData] = useState<GetStudentsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const studentsData: GetStudentsResponse = await axiosInstance.get(
          pathApiConfig.masterData.student.getAll(),
          {
            params: {
              page,
              limit,
              name,
              status,
              start_date,
              end_date,
            },
          },
        );
        setData(studentsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [page, limit, name, status, start_date, end_date]);

  return {
    data,
    loading,
    error,
  };
}
