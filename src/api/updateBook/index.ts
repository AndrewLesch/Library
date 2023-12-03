import fetchPathUpdateBook from './constant';

const updateBook = (token: any, bookId: any, bookData: any) => {
  const formData = new FormData();

  // Добавляем данные о книге (в формате JSON) в FormData
  formData.append('bookData', JSON.stringify(bookData));

  // Добавляем изображение книги как файл в FormData с ключом 'img'

  if (bookData.coverPath) {
    formData.append('img', bookData.coverPath);
  }
  console.log(bookData.coverPath, bookData);

  fetch(`${fetchPathUpdateBook}/${bookId}`, {
    // здесь предполагается, что у вас есть переменная bookId
    method: 'PATCH', // или 'PATCH' в зависимости от вашего API
    headers: {
      Authorization: token,
    },
    body: formData,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Failed to update the book');
      }
    })
    .then((responseData) => {
      console.log(responseData);
      // В случае успеха вызываем колбэк successCallback с данными с сервера
    })
    .catch((error) => {
      console.error(error);
    });
};

export default updateBook;
