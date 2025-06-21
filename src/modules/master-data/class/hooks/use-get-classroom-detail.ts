import { useState } from 'react';

import axiosInstance from '../../../../libs/axios';
import { pathApiConfig } from '../../../../config/path-api-config';
import { GetClassroomDetailResponse } from '../types/classroom.types';

type Params = {
  onSuccess: (name?: string) => void;
};

export function useGetClassroomDetail({ onSuccess }: Params) {
  const [data, setData] = useState<GetClassroomDetailResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const fetch = async (id: string) => {
    try {
      setLoading(true);
      const classData: GetClassroomDetailResponse = await axiosInstance.get(
        pathApiConfig.masterData.class.getDetail(id),
      );
      setData(classData);
      onSuccess(classData.data?.name);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetch };
}
