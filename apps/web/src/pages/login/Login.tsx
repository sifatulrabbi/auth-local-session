import React, { useState } from 'react';
import { LoginContainer, Button, FormGroup } from './login.styles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useLoginService } from '../../services';
import { IUserPreview } from '../../@types';

export function LoginPage(): React.ReactElement {
  const [showPass, setShowPass] = useState<boolean>(false);

  const { password, email, onChangeEmail, onChangePassword, handleFormSubmit } = useLoginService();

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
