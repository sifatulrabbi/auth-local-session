import { Document, Model } from 'mongoose';

declare global {
  namespace Types {
    export interface IUser {
      _id?: string;
      name: string;
      email: string;
      password: string;
    }

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

    export type IUserDocument = IUser & Document;

    export type IUsersModel = Model<IUserDocument>;

    export interface Exception extends Error {
      statusCode: number;
    }
  }
}
