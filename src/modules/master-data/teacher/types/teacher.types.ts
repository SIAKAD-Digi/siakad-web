import { CommonResponse } from '../../../../types/common-response.types';
import { Pagination, PaginationQueryParams } from '../../../../types/pagination.types';

export type TeacherEntity = {
  id: string;
  name: string;
  nik: string;
  email: string;
  is_active: boolean;
  created_at: string;
};

export type TeacherDetailEntity = {
  id: string;
  name: string;
  nik: string;
  phone_number: string;
  email: string;
  profile_picture: string | null;
  birth_of_date: string;
  address: string;
  gender: string;
  is_active: boolean;
  is_married: boolean;
  created_at: string;
  updated_at: string;
};

export type TeacherQueryParams = {
  name: string;
  start_date?: string;
  end_date?: string;
  status: string;
} & PaginationQueryParams;

export type GetTeachersResponse = CommonResponse<TeacherEntity[], Pagination>;

export type GetTeacherDetailResponse = CommonResponse<TeacherDetailEntity>;

export type CreateTeacherSchema = {
  name: string;
  nik: string;
  email: string;
  phone_number: string;
  is_married: boolean;
  birth_of_date: string;
  gender: string;
  address: string;
};

export type UpdateTeacherSchema = CreateTeacherSchema & { is_active: boolean };
