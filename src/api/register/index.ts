import fetchPathRegister from './constants';

const register = async (modalUser: any) => {
  try {
    const response = await fetch(fetchPathRegister, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modalUser),
    });

    const data = await response.json();
    if (data.successMessage) {
      return { success: true, message: data.successMessage };
    } else {
      return { success: false, message: data.errorMessage };
    }
  } catch (error) {
    console.error('Произошла ошибка при отправке запроса:', error);
  }
};

export default register;
