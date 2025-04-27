import { TEACHER, STUDENT, SUPER_ADMIN } from '../constant/role';

export type Role = typeof SUPER_ADMIN | typeof TEACHER | typeof STUDENT;
