import fetchPathGetUser from "./constants";

const getUser = (token: any, setUser: any) => {
  fetch(fetchPathGetUser, {
        method: 'GET',
        headers: {
          'Authorization': token,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Failed to fetch user data');
          }
        })
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error(error);
        });
    
}

export default getUser