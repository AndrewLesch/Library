import { BooksType, BookType } from '@/types';

const calculatePagesStatistics = (books: BooksType) => {
  const totalBookPages = books.reduce(
    (sum: number, book: BookType) => sum + book.pages,
    0,
  );
  const shortestBookPages = books.reduce(
    (min: BookType, book: BookType) => (book.pages < min.pages ? book : min),
    books[0],
  );
  const longestBookPages = books.reduce(
    (max: BookType, book: BookType) => (book.pages > max.pages ? book : max),
    books[0],
  );

  return { totalBookPages, shortestBookPages, longestBookPages };
};

export default calculatePagesStatistics;
