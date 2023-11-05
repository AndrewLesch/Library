import fetchPathRegister from './constants';

const register = (modalUser: any, setIsRegistering: any) => {
  fetch(fetchPathRegister, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(modalUser),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.successMessage) {
        setIsRegistering(false);
        alert(data.successMessage)
      } else {
        alert(data.errorMessage)
        console.error('Ошибка на сервере:', data.errorMessage);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default register;
