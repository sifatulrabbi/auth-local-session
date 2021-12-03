import { Express } from 'express';

declare global {
  namespace Express {
    interface User {
      _id?: string;
      name: string;
      email: string;
    }
  }
}
