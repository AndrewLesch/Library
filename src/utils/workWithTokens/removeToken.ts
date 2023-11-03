import { TOKEN_LS_KEY } from '@/constants/localStorageKeys';

const removeToken = () => {
  localStorage.removeItem(TOKEN_LS_KEY);
};

export default removeToken;
