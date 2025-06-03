import { CommonResponse } from '../../../../types/common-response.types';
import { Pagination, PaginationQueryParams } from '../../../../types/pagination.types';

export type StudentEntity = {
  id: string;
  name: string;
  nik: string;
  class_name: string;
  is_active: boolean;
  created_at: string;
};

export type StudentDetailEntity = {
  id: string;
  name: string;
  nik: string;
  phone_number: string;
  email: string;
  class_name: string | null;
  profile_picture: string | null;
  birth_of_date: string;
  address: string;
  gender: string;
  is_active: boolean;
  student_guardian: string;
  created_at: string;
  updated_at: string;
};

export type StudentQueryParams = {
  name: string;
  start_date?: string;
  end_date?: string;
  status: string;
} & PaginationQueryParams;

export type GetStudentsResponse = CommonResponse<StudentEntity[], Pagination>;

export type GetStudentDetailResponse = CommonResponse<StudentDetailEntity>;

export type CreateStudentSchema = {
  name: string;
  nik: string;
  email: string;
  phone_number: string;
  student_guardian: string;
  birth_of_date: string;
  gender: string;
  address: string;
};

export type UpdateStudentSchema = CreateStudentSchema & { is_active: boolean };
