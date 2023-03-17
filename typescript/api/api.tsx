export interface Response<T> {
  data: readonly T[];
  code: string;
  message: string;
  description: string;
}

export interface LoginResponse {
  version: string;
  isID: number;
  isLogin: number;
  log_key: string;
  useridx: number;
  username: string;
  usermail: string;
  msg: string;
  v1: string;
  v2: string;
  v3: string;
  v4: null;
}

export interface LogoutResponse {
  version: string;
  log_key: number;
  msg: string;
}

export interface AuthLogKeyResponse {
  memberIdx: string;
}

export interface BannerResponse<T> {
  code: string;
  data: {
    banner: T[];
  };
  desc: string;
  message: string;
}

export interface TicketResponse<T> {
  code: string;
  data: {
    ticket: T[];
  };
  desc: string;
  message: string;
}

export interface OrderResponse<T> {
  code: string;
  data: {
    order: T[];
  };
  desc: string;
  message: string;
}
