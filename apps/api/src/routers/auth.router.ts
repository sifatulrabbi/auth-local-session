import { Router, Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { validateLoginData } from '../middlewares';
import { JSONResponse } from '../helpers';

const router = Router();

export function useAuthRouter(app: Router): void {
  app.use('/auth', router);
}

router.post(
  '/login',
  validateLoginData,
  async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        JSONResponse.Unauthorized(res, err);
        return;
      }

      if (!user) {
        JSONResponse.Unauthorized(res, 'Incorrect credentials');
        return;
      }

      req.logIn(user, (err) => {
        if (err) {
          JSONResponse.Unauthorized(res, err);
          return;
        }
        JSONResponse.Ok(res, 'User authenticated', [user]);
        return;
      });
    })(req, res, next);
  },
);
