 export interface FormData {
    email: string;
    password: string;
  }

 export interface UserInfo {
    email: string;
    password: string;
  }

 export interface LoginResponse {
    data: {
      accessToken: string;
    };
    message: string;
  }