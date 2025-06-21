import { toast } from 'sonner';
import { isAxiosError } from 'axios';
import { useState, useEffect } from 'react';

import axiosInstance from '../../../../libs/axios';
import { UpdateClassroomSchema } from '../types/classroom.types';
import { pathApiConfig } from '../../../../config/path-api-config';

type Params = {
  payload: UpdateClassroomSchema;
  id: string;
  onSuccess: () => void;
};

export function useUpdateClassroom({ payload, id, onSuccess }: Params) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const submit = async () => {
    try {
      setLoading(true);
      await axiosInstance.put(pathApiConfig.masterData.class.update(id), payload);
      toast.success('Sukses mengubah kelas');
      onSuccess();
    } catch (error) {
      if (isAxiosError(error) && error.response?.data.message && !error.response.data.errors) {
        toast.error(error.response?.data.message);
        return;
      }

      if (isAxiosError(error) && error.response?.data.errors) {
        setError(error);
        return;
      }

      toast.error('Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(null);
  }, [payload.name]);

  return { submit, loading, error };
}
