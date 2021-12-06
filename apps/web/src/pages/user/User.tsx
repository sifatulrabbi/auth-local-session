import React from 'react';
import { IUserPreview } from '../../@types';

export function UserPage(): React.ReactElement {
  return (
    <div>
      {/* {user ? (
        <>
          <span>
            Name: <span>{user.name}</span>
          </span>
          <span>
            Email: <span>{user.email}</span>
          </span>
        </>
      ) : ( */}
      <h1>user not found</h1>
      {/* )} */}
    </div>
  );
}
