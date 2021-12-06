import React from 'react';
import { IUserPreview } from '../@types';

interface Props {
  children: React.ReactNode;
}

interface IUserContext {
  auth: boolean;
  setAuth: (status: boolean) => void;
  user: IUserPreview | null;
  setUser: ((user: IUserPreview | null) => void) | null;
}

const UserContext: React.Context<IUserContext> = React.createContext<IUserContext>({
  auth: false,
  setAuth: (status: boolean) => {
    return;
  },
  user: null,
  setUser: null,
});

export function useAuthContext(): IUserContext {
  return React.useContext(UserContext);
}

export function AuthProvider({ children }: Props): React.ReactElement {
  const [user, setUser] = React.useState<IUserPreview | null>(null);
  const [auth, setAuth] = React.useState(false);

  React.useEffect(() => {
    if (user && user._id) {
      setAuth(true);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ auth, setAuth, user, setUser }}>{children}</UserContext.Provider>
  );
}
