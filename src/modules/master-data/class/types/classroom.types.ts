import { CommonResponse } from '../../../../types/common-response.types';
import { Pagination, PaginationQueryParams } from '../../../../types/pagination.types';

export type ClassroomEntity = {
  id: string;
  name: string;
  created_at: string;
};

export type ClassQueryParams = {
  name: string;
  start_date?: string;
  end_date?: string;
} & PaginationQueryParams;

export type GetClassroomResponse = CommonResponse<ClassroomEntity[], Pagination>;

export type GetClassroomDetailResponse = CommonResponse<ClassroomEntity>;

export type CreateClassroomSchema = {
  name: string;
};

export type UpdateClassroomSchema = CreateClassroomSchema;
