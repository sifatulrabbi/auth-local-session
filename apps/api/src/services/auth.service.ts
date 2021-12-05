import { Request } from 'express';
import { usersModel } from '../models';
import { comparePassword } from '../libs';

export class AuthService {
  static getService(): AuthService {
    return new AuthService();
  }

  async validateUser(
    email: string,
    password: string,
    done: (
      err: unknown | null,
      user?: Types.IUserPreview | false,
      verifyOptions?: { success: boolean; message: string },
    ) => void,
  ): Promise<void> {
    const user: Types.IUserDocument | null = await usersModel.findOne({ email });

    if (!user) {
      done(null, false, { success: false, message: 'User not found' });
      return;
    }

    if (await comparePassword(password, user.password)) {
      done(null, { _id: user._id, name: user.name, email: user.email });
      return;
    }

    done(null, false, { success: false, message: 'Incorrect credentials' });
  }

  serializer(user: Types.IUserPreview, done: (err: any, userId?: string) => void): void {
    if (user._id) {
      done(null, user._id);
      return;
    }
    done('User not found');
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
    done('User not found', false);
  }
}
