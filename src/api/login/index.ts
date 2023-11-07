import setToken from '@/utils/workWithTokens/setToken';

import fetchPathLogin from './constants';

const login = async (modalUser: any) => {
  try {
    const response = await fetch(fetchPathLogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modalUser),
    });

    const data = await response.json();
    if (data.successMessage) {
      setToken(data.token);
      return { success: true, message: data.successMessage };
    } else {
      return { success: false, message: data.errorMessage };
    }
  } catch (error) {
    console.error('Произошла ошибка при отправке запроса:', error);
    return { success: false, message: 'Произошла ошибка при отправке запроса' };
  }
};

export default login;
