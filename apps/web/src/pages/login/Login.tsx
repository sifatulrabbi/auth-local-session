import React, { useState } from 'react';
import { LoginContainer, Button, FormGroup } from './login.styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface Props {}

export function LoginPage({}: Props): React.ReactElement {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPass, setShowPass] = useState<boolean>(false);

  async function handleFormSubmit(e: React.SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

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
      <form action="submit" onSubmit={handleFormSubmit}>
        <FormGroup>
          <label htmlFor="email">Email:</label>
          <input
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
            name="password"
            type={showPass ? 'text' : 'password'}
            placeholder="write your password"
            value={password}
            onChange={onChangePassword}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
        <div className="alternative">
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </div>
      </form>
    </LoginContainer>
  );
}
