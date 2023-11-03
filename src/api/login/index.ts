import setToken from '@/utils/workWithTokens/setToken';

import fetchPathLogin from './constants';

const login = (modalUser: any, setUser: any) => {
  fetch(fetchPathLogin, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(modalUser),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        setUser(data.user);
        setToken(data.token);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default login;
