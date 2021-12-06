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
    passport.authenticate('local', (err, user) => {
      if (err) {
        JSONResponse.Unauthorized(res, err);
        return;
      }

      if (!user) {
        JSONResponse.Unauthorized(res, 'User not found please sign up first');
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

router.post('/logout', (req: Request, res: Response) => {
  req.logout();
  JSONResponse.Ok(res, 'Logout successful', []);
});
