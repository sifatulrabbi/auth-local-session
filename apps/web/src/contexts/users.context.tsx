import React from 'react';
import { IUserPreview } from '../@types';

interface Props {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUserPreview | null;
  setUser: ((user: IUserPreview) => void) | null;
}

const UserContext: React.Context<IUserContext> = React.createContext<IUserContext>({
  user: null,
  setUser: null,
});

export function useUserContext(): IUserContext {
  return React.useContext(UserContext);
}

export function UserProvider({ children }: Props): React.ReactElement {
  const [user, setUser] = React.useState<IUserPreview | null>(null);

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
