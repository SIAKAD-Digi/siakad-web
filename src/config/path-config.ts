export const pathConfig = {
  error: {
    notFound: '/404',
    forbiden: '/403',
  },
  auth: {
    login: '/login',
  },
  dashboard: '/',
  masterData: {
    root: '/master-data',
    student: '/master-data/students',
    studentDetail: '/master-data/students/:id',
    studentCreate: '/master-data/students/create',
    studentEdit: '/master-data/students/:id/edit',
    teacher: '/master-data/teachers',
    class: '/master-data/classroom',
    course: '/master-data/courses',
  },
  absence: '/absence',
  valueEntry: '/value-entry',
  schedule: '/schedule',
  news: '/news',
};
