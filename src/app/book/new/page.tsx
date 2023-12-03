import Book from '@/components/Book';

const NewBook = () => {
  const isNewBook = true;
  return (
    <div className="bg-body-secondary">
      <Book isNewBook={isNewBook}></Book>
    </div>
  );
};

export default NewBook;
