import { CommonResponse } from '../../../../types/common-response.types';
import { Pagination, PaginationQueryParams } from '../../../../types/pagination.types';

export type TeacherEntity = {
  id: '9c752329-892f-436c-9dfd-6e5fc9f57c86';
  name: 'Adinda Putri';
  nik: '222444667';
  email: 'adindaputri4112@gmail.com';
  is_active: true;
  created_at: '2025-05-29T18:16:27.115894Z';
};

export type TeacherDetailEntity = {
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

export type GetStudentDetailResponse = CommonResponse<TeacherEntity>;

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

export type UpdateStudentSchema = CreateTeacherSchema & { is_active: boolean };
