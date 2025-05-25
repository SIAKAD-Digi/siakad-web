import { Route, Routes } from 'react-router';

import { pathConfig } from '../config/path-config';
import { TEACHER, SUPER_ADMIN } from '../constant/role';
import AuthMiddleware from '../middleware/AuthMiddleware';
import RoleMiddleware from '../middleware/RoleMiddleware';
import NotFoundPage from '../components/pages/NotFoundPage';
import GuestMiddleware from '../middleware/GuestMiddleware';
import ForbidenPage from '../components/pages/ForbidenPage';
import { lazyWithSuspense } from '../utils/lazy-with-suspense';
import { DashboardLayout } from '../components/layout/main/DashboardLayout';

const DashboardPage = lazyWithSuspense(() => import('../modules/dashboard/pages'));
const ComingSoonPage = lazyWithSuspense(() => import('../components/pages/ComingSoonPage'));
const LoginPage = lazyWithSuspense(() => import('../modules/auth/pages/LoginPage'));
const StudentPage = lazyWithSuspense(() => import('../modules/master-data/student/pages'));
const TeacherPage = lazyWithSuspense(() => import('../modules/master-data/teacher/pages'));
const ClassroomPage = lazyWithSuspense(() => import('../modules/master-data/class/pages'));
const CoursePage = lazyWithSuspense(() => import('../modules/master-data/course/pages'));

const Router = () => (
  <Routes>
    <Route element={<AuthMiddleware element={<DashboardLayout />} />}>
      <Route path={pathConfig.dashboard} element={<DashboardPage />} />
      <Route path={pathConfig.masterData.student} element={<StudentPage />} />
      <Route path={pathConfig.masterData.teacher} element={<TeacherPage />} />
      <Route path={pathConfig.masterData.class} element={<ClassroomPage />} />
      <Route path={pathConfig.masterData.course} element={<CoursePage />} />
      <Route path={pathConfig.absence} element={<ComingSoonPage />} />
      <Route
        path={pathConfig.valueEntry}
        element={<RoleMiddleware element={<ComingSoonPage />} roles={[SUPER_ADMIN, TEACHER]} />}
      />
      <Route path={pathConfig.news} element={<ComingSoonPage />} />
      <Route path={pathConfig.schedule} element={<ComingSoonPage />} />
    </Route>
    <Route path={pathConfig.auth.login} element={<GuestMiddleware element={<LoginPage />} />} />
    <Route path={pathConfig.auth.forbiden} element={<ForbidenPage />} />
    <Route path="/*" element={<NotFoundPage />} />
  </Routes>
);

export default Router;
