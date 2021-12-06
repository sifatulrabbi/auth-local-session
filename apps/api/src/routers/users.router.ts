import { Router, Request, Response } from 'express';
import { UsersService } from '../services';
import { validateUserData } from '../middlewares';
import { authGuard } from '../guards';
import { JSONResponse } from '../helpers';

const router = Router();
const usersService = UsersService.getService();

export function useUsersRouter(app: Router): Router {
  app.use('/users', router);
  return router;
}

router.get('/', authGuard, async (req: Request, res: Response): Promise<void> => {
  const users: Types.IUserPreview[] = await usersService.findAll('_id name email');
  JSONResponse.Ok(res, 'Users found', users);
});

router.get('/:userId', authGuard, async (req: Request, res: Response): Promise<void> => {
  console.log('request is here');
  console.log(req.isAuthenticated());
  if (!req.isAuthenticated()) {
    JSONResponse.Unauthorized(res, 'Authentication failed');
  }
  JSONResponse.Ok(res, 'Login successful', [req.user]);
});

router.post(
  '/',
  authGuard,
  validateUserData,
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, password, confirm_password } = req.body;
    const createdUser = await usersService.create({ name, email, password, confirm_password });

    if (createdUser) {
      const user: Types.IUserPreview = {
        name: createdUser.name,
        email: createdUser.email,
        _id: createdUser._id,
      };

      JSONResponse.created(res, 'User created', [user]);
      return;
    }
    JSONResponse.NotFound(res, 'User not found');
  },
);
