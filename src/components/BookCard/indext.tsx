import Link from 'next/link';

const BookCard = ({ book }: any) => (
  <Link href={`/book/${book.id}`} className="btn">
    <div
      className="card text-dark bg-light mb-4 col-12 shadow-hover"
      style={{ width: '320px', height: '470px' }}
    >
      <h5 className="card-title text-truncate m-2 text-center">{book.title}</h5>
      <img
        src={'http://localhost:3001/' + book.coverPath}
        className="card-img-top img-fluid h-75 w-75 mx-auto"
        alt={book.title}
        style={{ objectFit: 'cover' }}
      />
      <div className="card-body text-center d-flex flex-column justify-content-between">
        <p className="text-truncate mb-0">{book.author}</p>
        <p className="text-truncate mb-0">Оценка: {book.rating}</p>
      </div>
    </div>
  </Link>
);

export default BookCard;
