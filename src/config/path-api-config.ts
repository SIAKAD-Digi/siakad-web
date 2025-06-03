const v1 = '/api/v1';

export const pathApiConfig = {
  auth: {
    login: () => `${v1}/auth/login`,
  },
  masterData: {
    student: {
      getAll: () => `${v1}/students`,
      getDetail: (id: string) => `${v1}/students/${id}`,
      create: () => `${v1}/students`,
    },
  },
};
