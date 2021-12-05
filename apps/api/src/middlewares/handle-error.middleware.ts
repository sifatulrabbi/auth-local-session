import { Request, Response, NextFunction } from 'express';
import { JSONResponse } from '../helpers';

export function handleErrors(req: Request, res: Response, next: NextFunction): void {
  req.on('error', (err) => {
    console.log(err);
    JSONResponse.InternalError(res);
    return;
  });

  next();
}
