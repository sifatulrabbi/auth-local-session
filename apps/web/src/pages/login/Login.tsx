import React, { useState } from 'react';
import { LoginContainer, Button, FormGroup } from './login.styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { login } from '../../services';
import { IUserPreview } from '../../@types';

interface Props {
  setUser: (user: IUserPreview) => void;
}

export function LoginPage({ setUser }: Props): React.ReactElement {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPass, setShowPass] = useState<boolean>(false);

  async function handleFormSubmit(e: React.SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    const user: IUserPreview | null = await login({ email, password });
    if (user) {
      setUser(user);
    }
    console.log(user);

    setEmail('');
    setPassword('');
  }

  function onChangeEmail(e: React.SyntheticEvent<HTMLInputElement>): void {
    setEmail(e.currentTarget.value);
  }

  function onChangePassword(e: React.SyntheticEvent<HTMLInputElement>): void {
    setPassword(e.currentTarget.value);
  }

  function toggleShowPass(): void {
    setShowPass((prev) => !prev);
  }

  return (
    <LoginContainer color="default">
      <div className="form-container">
        <form action="submit" onSubmit={handleFormSubmit}>
          <FormGroup>
            <label htmlFor="email">Email:</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="write your email address"
              value={email}
              onChange={onChangeEmail}
            />
          </FormGroup>
          <FormGroup>
            <div className="show-hide-wrapper">
              <label htmlFor="password">Password:</label>
              <button className="show-hide-btn" onClick={toggleShowPass}>
                {!showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <input
              required
              name="password"
              type={showPass ? 'text' : 'password'}
              placeholder="write your password"
              minLength={8}
              value={password}
              onChange={onChangePassword}
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </form>
        <div className="alternative">
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </div>
      </div>
    </LoginContainer>
  );
}
