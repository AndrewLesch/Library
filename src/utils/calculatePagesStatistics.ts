const calculatePagesStatistics = (books: any) => {
  const totalBookPages = books.reduce(
    (sum: number, book: any) => sum + book.pages,
    0,
  );
  const shortestBookPages = books.reduce(
    (min: any, book: any) => (book.pages < min.pages ? book : min),
    books[0],
  );
  const longestBookPages = books.reduce(
    (max: any, book: any) => (book.pages > max.pages ? book : max),
    books[0],
  );

  return { totalBookPages, shortestBookPages, longestBookPages };
};

export default calculatePagesStatistics;
