import fetchPathAddBook from "./constants";

const addBook = (token: any, bookData: any) => {
  const formData = new FormData();

  // Добавляем данные о книге (в формате JSON) в FormData
  formData.append('bookData', JSON.stringify(bookData));

  // Добавляем изображение книги как файл в FormData с ключом 'img'
  formData.append('img', bookData.img);
  console.log(typeof bookData.img)

  fetch(fetchPathAddBook, {
    method: 'POST',
    headers: {
      'Authorization': token,
    },
    body: formData,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Failed to add the book');
      }
    })
    .then((responseData) => {
      console.log(responseData);
      // В случае успеха вызываем колбэк successCallback с данными с сервера
    })
    .catch((error) => {
      console.error(error);
    });
}

export default addBook;
