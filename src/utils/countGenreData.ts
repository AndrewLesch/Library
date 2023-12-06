const getGenreCountData = (books: any): Record<string, number> => {
  return books.reduce((acc: Record<string, number>, book: any) => {
    const genre = book.genre;
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});
};

export default getGenreCountData;
