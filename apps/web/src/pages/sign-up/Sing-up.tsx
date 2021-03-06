import React, { useState } from 'react';
import { SignUpContainer, Button, FormGroup } from './sign-up.styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { createUser } from '../../services';
import { IUserPreview } from '../../@types';

interface Props {}

export function SignUpPage({}: Props): React.ReactElement {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPass, setShowPass] = useState<boolean>(false);

  async function handleFormSubmit(e: React.SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    const user: IUserPreview | null = await createUser({
      email,
      name,
      password,
      confirm_password: confirmPassword,
    });

    console.log(user);
    // window.location.href = `/users/${userId}`;

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setShowPass(false);
  }

  function onChangeName(e: React.SyntheticEvent<HTMLInputElement>): void {
    setName(e.currentTarget.value);
  }

  function onChangeEmail(e: React.SyntheticEvent<HTMLInputElement>): void {
    setEmail(e.currentTarget.value);
  }

  function onChangePassword(e: React.SyntheticEvent<HTMLInputElement>): void {
    setPassword(e.currentTarget.value);
  }

  function onChangeConfirmPassword(e: React.SyntheticEvent<HTMLInputElement>): void {
    setConfirmPassword(e.currentTarget.value);
  }

  function toggleShowPass(): void {
    setShowPass((prev) => !prev);
  }

  return (
    <SignUpContainer color="default">
      <div className="form-container">
        <form action="submit" onSubmit={handleFormSubmit}>
          <FormGroup>
            <label htmlFor="name">Name:</label>
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder="eg. John Doe"
              value={name}
              onChange={onChangeName}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email:</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="eg. john.doe@gmail.com"
              value={email}
              onChange={onChangeEmail}
            />
          </FormGroup>
          <FormGroup>
            <div className="show-hide-wrapper">
              <label htmlFor="password">Password:</label>
              <button className="show-hide-btn" type="button" onClick={toggleShowPass}>
                {!showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <input
              required
              name="password"
              type={showPass ? 'text' : 'password'}
              id="password"
              value={password}
              minLength={8}
              onChange={onChangePassword}
              placeholder="write your password"
            />
          </FormGroup>
          <FormGroup>
            <div className="show-hide-wrapper">
              <label htmlFor="confirm-password">Confirm password:</label>
              <button className="show-hide-btn" type="button" onClick={toggleShowPass}>
                {!showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <input
              required
              name="confirm_password"
              type={showPass ? 'text' : 'password'}
              placeholder="write your password again"
              minLength={8}
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
            />
          </FormGroup>
          <Button type="submit">Sign up</Button>
        </form>
        <div className="alternative">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </SignUpContainer>
  );
}
