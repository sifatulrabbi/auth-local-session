import { usersModel } from '../models';
import { NotFoundException, BadRequestException } from '../config';
import { comparePassword } from '../libs';

export class AuthService {
  static getService(): AuthService {
    return new AuthService();
  }

  async validateUser(
    email: string,
    password: string,
    done: (err: unknown | null, user?: Types.IUser) => void,
  ): Promise<void> {
    const user: Types.IUserDocument | null = await usersModel.findOne({ email });

    if (!user) {
      done(new NotFoundException('User not found', 'Authentication'));
      return;
    }

    if (await comparePassword(password, user.password)) {
      done(null, user);
      return;
    }

    done(new BadRequestException('Incorrect credentials', 'Authentication'));
  }

  serializer(user: Types.IUserPreview, done: (err: any, userId?: string) => void): void {
    if (user._id) {
      done(null, user._id);
      return;
    }
    done(new NotFoundException('User not found', 'Authentication'));
  }

  async deserializer(
    userId: string,
    done: (err: any, user?: Types.IUserPreview | false) => void,
  ): Promise<void> {
    const user = await usersModel.findById(userId);

    if (user) {
      done(null, { _id: user._id, name: user.name, email: user.email });
      return;
    }
    done(new NotFoundException('User not found', 'Authentication'), false);
  }
}
