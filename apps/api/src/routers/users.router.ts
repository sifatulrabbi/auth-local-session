import { Router, Request, Response, NextFunction } from 'express';
import { UsersService } from '../services';
import { validateUserData } from '../middlewares';

const router = Router();
const usersService = UsersService.getService();

export function useUsersRouter(app: Router): Router {
  app.use('/users', router);
  return router;
}

router.get('/', async (req, res, next): Promise<void> => {
  try {
    const users: Types.IUserPreview[] = await usersService.findAll('_id name email');
    res.status(200).json({ success: true, message: 'Users found', data: users });
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next): Promise<void> => {
  try {
    const user: Types.IUserPreview = await usersService.find({ userId: req.params['userId'] });
    const modUser: Types.IUserPreview = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };
    res.status(200).json({ success: true, message: 'Users found', data: [modUser] });
  } catch (err) {
    next(err);
  }
});

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
