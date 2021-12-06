import { Request, Response, NextFunction } from 'express';
import { JSONResponse } from '../helpers';

export function authGuard(req: Request, res: Response, next: NextFunction): void {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  JSONResponse.Unauthorized(res, 'User session expired please login again');
}
