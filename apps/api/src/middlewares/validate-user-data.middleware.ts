import { Request, Response, NextFunction } from 'express';
import { NotFoundException, BadRequestException } from '../config';

export function validateUserData(req: Request, res: Response, next: NextFunction): void {
  const namespace = 'Create user';

  try {
    if (!req.body.name) {
      throw new NotFoundException('Name is required', namespace);
    }

    if (!req.body.email) {
      throw new NotFoundException('Email is required', namespace);
    }

    if (req.body.email.split('@').length !== 2) {
      throw new BadRequestException('Email is required', namespace);
    }

    if (!req.body.password) {
      throw new NotFoundException('Password is required', namespace);
    }

    if (!req.body.confirm_password) {
      throw new NotFoundException('Confirm password is required', namespace);
    }

    next();
  } catch (err) {
    next(err);
  }
}
