import { useState } from 'react';
import axios from 'axios';
import { ILoginUser, IUserPreview } from '../@types';
import { useAuthContext } from '../contexts';
import { useNavigate } from 'react-router-dom';

export async function login({ email, password }: ILoginUser): Promise<IUserPreview | null> {
  const res = await axios.post('http://localhost:5000/auth/login', {
    email,
    password,
  });

  const resData = await res.data;
  if (resData.success && resData.data[0]) {
    return resData.data[0];
  }
  return null;
}

export function useLoginService(/*setUser: ((user: IUserPreview) => void) | null*/) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { setUser } = useAuthContext();

  const navigate = useNavigate();

  async function handleFormSubmit(e: React.SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    const user: IUserPreview | null = await login({ email, password });
    if (user && user._id && setUser) {
      setUser(user);
      navigate(`/users/${user._id}`);
    }

    setEmail('');
    setPassword('');
  }

  function onChangeEmail(e: React.SyntheticEvent<HTMLInputElement>): void {
    setEmail(e.currentTarget.value);
  }

  function onChangePassword(e: React.SyntheticEvent<HTMLInputElement>): void {
    setPassword(e.currentTarget.value);
  }

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    handleFormSubmit,
  };
}
