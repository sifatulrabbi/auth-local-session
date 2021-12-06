import React from 'react';
import { useAuthContext } from '../../contexts';
import { UsersContainer, Button, UserInfo } from './user.styles';
import { IconsPreview } from '../../components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function UserPage(): React.ReactElement {
  const { user, setUser, setAuth } = useAuthContext();

  const navigate = useNavigate();

  function logout(): void {
    if (!setUser) {
      return;
    }

    setUser(null);
    setAuth(false);
    navigate('/login');

    axios.post('http://localhost:5000/auth/logout');
  }

  return (
    <UsersContainer color="default">
      <header>
        <h1 className="title">Profile Dashboard</h1>
      </header>
      <main>
        <UserInfo color="light" className="user-info">
          {user && (
            <>
              <span>
                <span className="bold">Name:</span> <span>{user.name}</span>
              </span>
              <span>
                <span className="bold">Email:</span> <span>{user.email}</span>
              </span>
              <Button onClick={logout}>Logout</Button>
            </>
          )}
        </UserInfo>
        <IconsPreview />
      </main>
    </UsersContainer>
  );
}
