export interface IUserPreview {
  _id?: string;
  name: string;
  email: string;
}

export interface ICreateUserDto {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
