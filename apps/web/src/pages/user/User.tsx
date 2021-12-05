import React, { useState, useEffect } from 'react';
import { IUserPreview } from '../../@types';

interface Props {
  user?: IUserPreview;
}

export function UserPage({ user }: Props): React.ReactElement {
  return (
    <div>
      {user ? (
        <>
          <span>
            Name: <span>{user.name}</span>
          </span>
          <span>
            Email: <span>{user.email}</span>
          </span>
        </>
      ) : (
        <h1>user not found</h1>
      )}
    </div>
  );
}
