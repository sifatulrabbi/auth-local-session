import { Request, Response, NextFunction } from 'express';
import { JSONResponse } from '../helpers';

export function validateLoginData(req: Request, res: Response, next: NextFunction): void {
  if (!req.body.email) {
    JSONResponse.NotFound(res, 'Email is required');
    return;
  }

  if (req.body.email.split('@').length !== 2) {
    JSONResponse.Bad(res, 'Email is not valid');
    return;
  }

  if (!req.body.password) {
    JSONResponse.NotFound(res, 'Password is required');
    return;
  }

  if (!(req.body.password.length >= 8)) {
    JSONResponse.Bad(res, 'Please enter a valid password');
    return;
  }

  next();
}
