import { UsersModel } from '../models';

export class AuthService {
  constructor(private readonly usersModel: Types.IUsersModel) {}

  static getService(): AuthService {
    return new AuthService(UsersModel.getModel());
  }

  async validateUser(
    email: string,
    password: string,
    done: (err: unknown | null, user?: Types.IUser) => void,
  ): Promise<void> {
    const user: Types.IUserDocument | null = await this.usersModel.findOne({ email });

    if (!user) {
      done(new Error('User not found'));
      return;
    }

    if (password === user?.password) {
      done(null, user);
      return;
    }

    done(new Error('Incorrect credentials'));
  }

  serializer(user: Types.IUserPreview, done: (err: any, userId?: string) => void): void {
    if (user._id) {
      done(null, user._id);
      return;
    }
    done(new Error('User not found'));
  }

  async deserializer(
    userId: string,
    done: (err: any, user?: Types.IUserPreview | false) => void,
  ): Promise<void> {
    const user = await this.usersModel.findById(userId);

    if (user) {
      done(null, { _id: user._id, name: user.name, email: user.email });
      return;
    }
    done(new Error('User not found'), false);
  }
}
