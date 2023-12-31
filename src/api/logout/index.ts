import removeToken from '@/utils/workWithTokens/removeToken';

import fetchPathLogout from './constants';

const logout = (token: any) => {
  fetch(fetchPathLogout, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.successMessage) {
        removeToken();
        alert(data.successMessage);
      } else {
        alert(data.errorMessage);
      }
    })
    .catch((error) => {
      console.error('Ошибка при логауте:', error);
    });
};

export default logout;
