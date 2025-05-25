export type User = {
  id: string;
  name: string;
  role: string;
};

export type CurrentUser = User | undefined;
