import { generatePassword } from '../libs';
import { UsersModel } from '../models';

export class UsersService {
  constructor(private readonly usersModel: Types.IUsersModel) {}

  static getService(): UsersService {
    return new UsersService(UsersModel.getModel());
  }

  async create({
    name,
    email,
    password,
    confirm_password,
  }: Types.ICreateUserDto): Promise<Types.IUserDocument> {
    if (password !== confirm_password) {
      throw new Error("Password and confirm password don't match");
    }

    const hash = await generatePassword(password);

    const newUser = new this.usersModel({ name, email, password: hash });
    const createdUser = await newUser.save();
    return createdUser;
  }

  async find({ userId, email }: { userId?: string; email?: string }): Promise<Types.IUserDocument> {
    if (userId) {
      const user = await this.usersModel.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }

    if (email) {
      const user = await this.usersModel.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }

    throw new Error('user id or email is required');
  }
}
