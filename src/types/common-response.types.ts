export type CommonResponse<D, M = undefined> = {
  success: boolean;
  message: string;
  data?: D;
  meta?: M;
};

export type ErrorResponse = {
  status?: string;
  message?: string;
  errors?: Record<string, string>;
};
