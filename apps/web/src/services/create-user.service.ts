import axios from 'axios';
import { ICreateUserDto } from '../typings';

export async function createUser({
  name,
  email,
  password,
  confirm_password,
}: ICreateUserDto): Promise<string> {
  console.log('Creating user...');
  console.log(`new user: {${name}, ${email}, ${password}, ${confirm_password}}`);
  return 'user_id_will_be_here';
}
