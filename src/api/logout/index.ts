import emptyUser from "@/constants/emptyUser";
import removeToken from "@/utils/workWithTokens/removeToken";
import fetchPathLogout from "./constants";

const logout = (token: any, setUser: any) => {
        fetch(fetchPathLogout, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            removeToken()
            setUser(emptyUser)
          } else {
            console.error('Ошибка при логауте');
          }
        })
        .catch((error) => {
          console.error('Ошибка при логауте:', error);
        });
}

export default logout