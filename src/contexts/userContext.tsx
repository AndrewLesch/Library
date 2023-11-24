import React, { createContext, useContext, useState } from 'react';

import emptyUser from '@/constants/emptyUser';

const initialUserContext = {
  user: emptyUser,
  setUser: (user: any) => {
    user;
  },
};

const UserContext = createContext(initialUserContext);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(emptyUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
