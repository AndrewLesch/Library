import fetchPathRegister from './constants';

const register = (modalUser: any, setIsRegistering: any, setIsOpen: any) => {
  fetch(fetchPathRegister, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(modalUser),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        setIsRegistering(false);
        setIsOpen(true);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default register;
