import { BooksType, BookType } from '@/types';

const getGenreCountData = (books: BooksType): Record<string, number> => {
  return books.reduce((acc: Record<string, number>, book: BookType) => {
    const genre: string = book.genre;
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});
};

export default getGenreCountData;
