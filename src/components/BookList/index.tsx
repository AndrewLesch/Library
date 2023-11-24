import BookCard from '../BookCard/indext';
import EmptyLibraryMessage from '../EmptyLibraryMessage';

const BookList = ({ filteredBooks, currentPage, pageSize }: any) => (
  <div className="container-fluid w-75 d-flex flex-wrap justify-content-around mt-4">
    <style>{`
      .card {
        transition: transform 0.3s ease;
      }

      .card:hover {
        transform: scale(1.05);
      }

      .card:not(:hover) {
        transform: scale(1);
      }
    `}</style>

    {filteredBooks.length > 0 ? (
      filteredBooks
        .slice((currentPage - 1) * pageSize, currentPage * pageSize)
        .map((book: any, index: any) => <BookCard key={index} book={book} />)
    ) : (
      <EmptyLibraryMessage />
    )}
  </div>
);

export default BookList;
