import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { UnauthorizedException } from '../config';
import { validateLoginData } from '../middlewares';

const router = Router();

export function useAuthRouter(app: Router): void {
  app.use('/auth', router);
}

router.post(
  '/login',
  validateLoginData,
  passport.authenticate('local'),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.isAuthenticated() && req.user._id) {
        res.status(200).redirect(`/users/${req.user._id}`);
        return;
      }

      throw new UnauthorizedException('Incorrect credentials', 'Authentication');
    } catch (err) {
      next(err);
    }
  },
);
