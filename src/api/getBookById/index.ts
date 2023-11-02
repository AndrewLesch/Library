import fetchPathGetBookById from "./constants";


const getBookById = (token: any, id: any, setBook: any): any => {
  fetch(`${fetchPathGetBookById}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: token // Если требуется токен авторизации
    }
  })
  .then((response) => {
    console.log(response)
    if (response.status === 200) {
      return response.json();
      
    } else {
      throw new Error('Failed to fetch books by type');
    }
  })
  .then((responseData) => {
    console.log(responseData)
    setBook(...responseData)
  })
  .catch((error) => {
    console.error(error);
  });
}

export default getBookById;