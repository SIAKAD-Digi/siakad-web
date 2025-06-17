import { toast } from 'sonner';
import { useState } from 'react';
import { isAxiosError } from 'axios';

import axiosInstance from '../../../../libs/axios';
import { pathApiConfig } from '../../../../config/path-api-config';

type Params = {
  studentId: string;
  onSuccess: () => void;
};

export function useDeleteStudent({ studentId, onSuccess }: Params) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const submit = async () => {
    try {
      setLoading(true);
      await axiosInstance.delete(pathApiConfig.masterData.student.delete(studentId));
      toast.success('Sukses menghapus siswa');
      onSuccess();
    } catch (error) {
      if (isAxiosError(error) && error.response?.data.message) {
        toast.error(error.response?.data.message);
      }
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
}
