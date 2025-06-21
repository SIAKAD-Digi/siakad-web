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
      update: (id: string) => `${v1}/students/${id}`,
      delete: (id: string) => `${v1}/students/${id}`,
    },
    teacher: {
      getAll: () => `${v1}/teachers`,
      getDetail: (id: string) => `${v1}/teachers/${id}`,
      create: () => `${v1}/teachers`,
      update: (id: string) => `${v1}/teachers/${id}`,
      delete: (id: string) => `${v1}/teachers/${id}`,
    },
    class: {
      getAll: () => `${v1}/classes`,
      getDetail: (id: string) => `${v1}/classes/${id}`,
      create: () => `${v1}/classes`,
      update: (id: string) => `${v1}/classes/${id}`,
      delete: (id: string) => `${v1}/classes/${id}`,
    },
  },
};
