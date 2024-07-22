export type BookType = {
  title: string;
  author: string;
  type: string;
  genre: string;
  language: string;
  rating: number;
  pages: number;
  startDate: any;
  endDate: any;
  review: string;
  awaitingDate: any;
  coverPath: string;
};

export type BooksType = Array<BookType>;

export type PieDataType = {
  name: string;
  value: number;
}[];
