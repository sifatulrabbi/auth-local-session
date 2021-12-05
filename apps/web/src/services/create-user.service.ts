import axios from 'axios';
import { ICreateUserDto, IUserPreview } from '../@types';

export async function createUser({
  name,
  email,
  password,
  confirm_password,
}: ICreateUserDto): Promise<IUserPreview | null> {
  const res = await axios.post('http://localhost:5000/users', {
    name,
    email,
    password,
    confirm_password,
  });

  const data = await res.data;
  console.log(data);
  if (data[0]) {
    return data[0];
  }
  return null;
}
