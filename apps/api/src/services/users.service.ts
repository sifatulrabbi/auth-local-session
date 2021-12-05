import { generatePassword } from '../libs';
import { usersModel } from '../models';

export class UsersService {
  static getService(): UsersService {
    return new UsersService();
  }

  async create({
    name,
    email,
    password,
    confirm_password,
  }: Types.ICreateUserDto): Promise<Types.IUserDocument | null> {
    if (password !== confirm_password) {
      return null;
    }

    const hash = await generatePassword(password);

    const newUser = new usersModel({ name, email, password: hash });
    const createdUser = await newUser.save();
    return createdUser;
  }

  async findAll(fields?: string): Promise<Types.IUserDocument[]> {
    const users = await usersModel.find({}, fields);
    return users;
  }

  async find({
    userId,
    email,
  }: {
    userId?: string;
    email?: string;
  }): Promise<Types.IUserDocument | null> {
    if (userId) {
      const user = await usersModel.findById(userId);
      if (!user) {
        return null;
      }
      return user;
    }

    if (email) {
      const user = await usersModel.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    }

    return null;
  }
}
