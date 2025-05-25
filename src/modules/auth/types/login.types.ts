export type LoginPayload = {
  nik: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  data: {
    access_token: string;
  };
};
