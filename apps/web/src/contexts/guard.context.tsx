import React from 'react';
import { useAuthContext } from './auth.context';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export function GuardProvider({ children }: Props): React.ReactElement {
  const { auth } = useAuthContext();

  return <>{auth ? children : <Navigate to="/login" />}</>;
}
