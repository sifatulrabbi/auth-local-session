import { Request, Response, NextFunction } from 'express';

export function rolesGuard(req: Request, res: Response, next: NextFunction): void {
  next();
}
