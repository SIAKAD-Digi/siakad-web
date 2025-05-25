import { Pagination, PaginationQueryParams } from '../../../../types/pagination.types';

export type StudentEntity = {
  id: string;
  name: string;
  nik: string;
  class_name: string;
  is_active: boolean;
  created_at: string;
};

export type StudentQueryParams = {
  name: string;
  start_date?: string;
  end_date?: string;
  status: string;
} & PaginationQueryParams;

export type GetStudentsResponse = {
  data: StudentEntity[];
  meta: Pagination;
};
