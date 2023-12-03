import fetchPathDeleteBook from './constant';

const deleteBook = (token: any, bookId: any) => {
  fetch(`${fetchPathDeleteBook}/${bookId}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Failed to delete the book');
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

export default deleteBook;
