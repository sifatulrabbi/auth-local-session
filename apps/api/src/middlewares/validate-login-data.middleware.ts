import { Request, Response, NextFunction } from 'express';
import { NotFoundException, BadRequestException } from '../config';

export function validateLoginData(req: Request, res: Response, next: NextFunction): void {
  try {
    if (!req.body.email) {
      throw new NotFoundException('Email is required', 'Authentication');
    }

    if (req.body.email.split('@').length !== 2) {
      throw new BadRequestException('Email is not valid', 'Authentication');
    }

    if (!req.body.password) {
      throw new NotFoundException('Password is required', 'Authentication');
    }

    if (!(req.body.password.length >= 8)) {
      throw new BadRequestException('Please enter a valid password', 'Authentication');
    }

    next();
  } catch (err) {
    next(err);
  }
}
