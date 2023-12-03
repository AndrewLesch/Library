import fetchPathGetBooksByType from './constants';

const getBooks = async (token: any): Promise<any> => {
  try {
    const response = await fetch(fetchPathGetBooksByType, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });

    const responseData = await response.json();
    if (responseData) {
      return responseData;
    } else {
      throw new Error('Failed to fetch books by type');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getBooks;
