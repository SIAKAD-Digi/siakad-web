export type CommonResponse<D, M = undefined> = {
  success: boolean;
  message: string;
  data?: D;
  meta?: M;
};
