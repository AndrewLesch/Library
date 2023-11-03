import fetchPathGetBooksByType from './constants';

const getBooksByType = (token: any, bookType: any, setBooks: any): any => {
  fetch(fetchPathGetBooksByType, {
    method: 'GET',
    headers: {
      Authorization: token,
      'Book-Type': bookType,
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Failed to fetch books by type');
      }
    })
    .then((responseData) => {
      console.log(responseData);
      setBooks(responseData);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getBooksByType;
