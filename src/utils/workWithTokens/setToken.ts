import { TOKEN_LS_KEY } from "@/constants/localStorageKeys";

const setToken = (token : any) => {
  localStorage.setItem(TOKEN_LS_KEY, 'Bearer ' + token);
}

export default setToken