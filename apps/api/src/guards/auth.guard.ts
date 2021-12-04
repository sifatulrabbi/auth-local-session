import { Request, Response, NextFunction } from 'express';
import { UnauthorizedException } from '../config';

export function authGuard(req: Request, res: Response, next: NextFunction): void {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  next(new UnauthorizedException('User session expired please login again', 'Auth Guard'));
}
