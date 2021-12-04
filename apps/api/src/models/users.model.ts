import mongoose from 'mongoose';

class UsersModel {
  private readonly schema = new mongoose.Schema<Types.IUserDocument>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  private readonly usersModel: Types.IUsersModel = mongoose.model('users', this.schema);

  static getModel(): Types.IUsersModel {
    return new UsersModel().usersModel;
  }
}

export const usersModel = UsersModel.getModel();
