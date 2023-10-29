import fetchPathAddBook from "./constants";

const addBook = (token: any, bookData: any) => {
  console.log(token)
  fetch(fetchPathAddBook, {
    method: 'POST',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json', // Устанавливаем заголовок для JSON-данных
    },
    body: JSON.stringify(bookData), // Преобразуем данные книги в формат JSON
  })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Failed to add the book');
    }
  })
  .then((responseData) => {
    console.log(responseData)
    // В случае успеха вызываем колбэк successCallback с данными с сервера
    
  })
  .catch((error) => {
    console.error(error);
  });
}

export default addBook;

