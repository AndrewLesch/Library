import fetchPathGetUser from './constants';

const getUser = async (token: any) => {
  console.log(token);

  try {
    const response = await fetch(fetchPathGetUser, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    });

    const data = await response.json();

    if (data) {
      return data;
    } else {
      throw new Error(
        `Failed to fetch user data. Server responded with ${response.status}`,
      );
    }
  } catch (error: any) {
    console.error('Error fetching user data:', error.message);
  }
};

export default getUser;
