import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { emptyUser, userType } from '@/constants/emptyUser';

type initalUserContextType = {
  user: userType;
  setUser: (user: userType) => void;
};

type UserProviderProps = {
  children: ReactNode;
};

const initialUserContext: initalUserContextType = {
  user: emptyUser,
  setUser: (user: userType) => {
    user;
  },
};

const UserContext = createContext(initialUserContext);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<userType>(emptyUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
