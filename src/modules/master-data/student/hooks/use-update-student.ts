import { toast } from 'sonner';
import { useState } from 'react';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router';

import axiosInstance from '../../../../libs/axios';
import { pathConfig } from '../../../../config/path-config';
import { UpdateStudentSchema } from '../types/student.types';
import { pathApiConfig } from '../../../../config/path-api-config';

export function useUpdateStudent(payload: UpdateStudentSchema, id: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const navigate = useNavigate();

  const submit = async () => {
    try {
      setLoading(true);
      await axiosInstance.put(pathApiConfig.masterData.student.update(id), payload);
      navigate(pathConfig.masterData.student);
      toast.success('Sukses mengubah siswa');
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

  return { submit, loading, error };
}
