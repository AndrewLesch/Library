import { TOKEN_LS_KEY } from '@/constants/localStorageKeys';

const getToken = () => {
  return localStorage.getItem(TOKEN_LS_KEY);
};

export default getToken;
