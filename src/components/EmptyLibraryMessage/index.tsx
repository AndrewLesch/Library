import Link from 'next/link';

const EmptyLibraryMessage = () => (
  <div className="text-center">
    <h4 className="m-4">
      Ой-ой-ой, здесь пусто как в космосе! 🚀<br></br>Почему бы не добавить свои
      любимые книги и сделать это место уютнее?
    </h4>
    <Link href="/book-form">
      <button className="btn btn-success add-book-button">
        Добавить книгу
      </button>
    </Link>
  </div>
);

export default EmptyLibraryMessage;
