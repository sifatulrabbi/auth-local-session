import axios from 'axios';
import { ILoginUser, IUserPreview } from '../@types';

export async function login({ email, password }: ILoginUser): Promise<IUserPreview | null> {
  const res = await axios.post('http://localhost:5000/auth/login', {
    email,
    password,
  });

  const resData = await res.data;
  console.log(resData);
  if (resData.success && resData.data[0]) {
    return resData.data[0];
  }
  return null;
}
