import { Router, Request, Response, NextFunction } from 'express';
import { UsersService } from '../services';
import { validateUserData } from '../middlewares';
import { UnauthorizedException } from '../config';
import { authGuard } from '../guards';

const router = Router();
const usersService = UsersService.getService();

export function useUsersRouter(app: Router): Router {
  app.use('/users', router);
  return router;
}

router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users: Types.IUserPreview[] = await usersService.findAll('_id name email');
    res.status(200).json({ success: true, message: 'Users found', data: users });
  } catch (err) {
    next(err);
  }
});

router.get(
  '/:userId',
  authGuard,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.isAuthenticated()) {
        throw new UnauthorizedException('User session expired. Please login again', 'Get user');
      }

      res.status(200).json({ success: true, message: 'Users found', data: [req.user] });
    } catch (err) {
      next(err);
    }
  },
);

router.post(
  '/',
  validateUserData,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { name, email, password, confirm_password } = req.body;
      const createdUser = await usersService.create({ name, email, password, confirm_password });

      const user: Types.IUserPreview = {
        name: createdUser.name,
        email: createdUser.email,
        _id: createdUser._id,
      };

      res.status(201).json({ success: true, message: 'User created', data: [user] });
    } catch (err) {
      next(err);
    }
  },
);
