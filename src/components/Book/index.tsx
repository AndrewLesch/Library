'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

import addBook from '@/api/addBook';
import deleteBook from '@/api/deleteBook';
import updateBook from '@/api/updateBook';
import { useToast } from '@/app/login/hooks/useToast';
import getToken from '@/utils/workWithTokens/getToken';

import NotificationToast from '../Toast';

import '@/app/globals.css';

const empyBook = {
  title: 'Введите имя книги',
  author: 'Авторчик',
  type: 'read',
  genre: 'wr',
  language: 'Russian',
  rating: 0,
  pages: 0,
  startDate: '23',
  endDate: '34',
  review: 'sfsd',
  awaitingDate: '23',
  coverPath: '',
};

export default function Book({ isNewBook, addedBook }: any) {
  const [book, setBook] = useState(empyBook || addedBook);
  const [image, setImage] = useState<any>(null);

  const [isBookDeleted, setIsBookDeleted] = useState(false);
  const router = useRouter();

  const { id } = useParams();

  const [isEditMode, setIsEditMode] = useState(true);

  const { showToast, showToastMessage, hideToast, toastMessage, toastIsError } =
    useToast();

  useEffect(() => {
    if (!isNewBook && addedBook) {
      setBook(addedBook);
      setIsEditMode(false);
    }
  }, [isNewBook, addedBook]);

  const handleFieldChange = (e: any, field: string) => {
    setBook({ ...book, [field]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setBook({ ...book, coverPath: e.target.files[0] });
  };

  const handleAddBook = () => {
    event?.preventDefault();
    const token = getToken();
    addBook(token, book);

    setBook(empyBook);
    setImage([]);
    showToastMessage('Книга успешно добавлена', false);
  };

  const handleUpdateBook = () => {
    event?.preventDefault();
    console.log(book.coverPath);

    const token = getToken();
    updateBook(token, id, book);
    showToastMessage('Книга успешно обновлена', false);
    setIsEditMode(false);
  };

  const handleDeleteBook = () => {
    const token = getToken();
    deleteBook(token, id);
    showToastMessage('Книга успешно удалена', false);
    setIsBookDeleted(true);
  };

  return (
    <div className="container-fluid min-vh-100 w-75 mx-auto pt-4">
      {isBookDeleted ? (
        <div className="text-center">
          <p>Книга удалена. Создайте новую книгу.</p>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={() => {
              setIsBookDeleted(false);
              router.push('/book/new');
            }}
          >
            Создать новую книгу
          </button>
        </div>
      ) : (
        <form
          className="container-fluid min-vh-100 w-75 d-md-flex d-block"
          onSubmit={handleAddBook}
        >
          <div className="container text-center">
            <div className="row">
              <div className="col-10 col-md-10 col-lg-10 mx-auto m-2">
                <img
                  src={
                    isEditMode
                      ? image || `http://localhost:3001/${book.coverPath}`
                      : `http://localhost:3001/${book.coverPath}`
                  }
                  className="img-fluid rounded"
                  alt="Выберите обложку для книги"
                  style={{
                    objectFit: 'cover',
                    width: '420px',
                    height: '620px',
                  }}
                />
              </div>
            </div>
            {isEditMode && (
              <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-6 col-lg-6 text-center">
                  <input
                    type="file"
                    name="img"
                    onChange={(e) => handleFileChange(e)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
            )}
          </div>

          <div className="w-50 mx-auto text-left">
            {!isNewBook && (
              <div className="text-center">
                <button
                  onClick={handleDeleteBook}
                  type="button"
                  className="btn btn-secondary m-2"
                >
                  Удалить
                </button>
                <button
                  type="button"
                  className="btn btn-success m-2"
                  onClick={() => setIsEditMode(!isEditMode)}
                >
                  {isEditMode ? 'Вернуться' : 'Редактировать'}
                </button>
              </div>
            )}
            {isEditMode ? (
              <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Enter book name"
                value={book.title}
                required
                onChange={(e) => handleFieldChange(e, 'title')}
              />
            ) : (
              <h1 className="mb-4">{book.title}</h1>
            )}

            {isEditMode ? (
              <input
                className="form-control"
                placeholder="Enter book author"
                value={book.author}
                required
                onChange={(e) => handleFieldChange(e, 'author')}
              />
            ) : (
              <h3>{book.author}</h3>
            )}

            <div className="mb-2">
              {isEditMode ? (
                <div>
                  Enter book type:
                  <select
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    onChange={(e) => handleFieldChange(e, 'type')}
                    value={book.type}
                  >
                    <option value="read">Прочитанные</option>
                    <option value="readable">Читаемые</option>
                    <option value="awaiting">Ожидаемые</option>
                  </select>
                </div>
              ) : (
                <h5>{book.type}</h5>
              )}
            </div>

            <div className="mb-2">
              {isEditMode && (
                <div>
                  Enter book genre:
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => handleFieldChange(e, 'genre')}
                    value={book.genre}
                  >
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non Fiction</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="thriller">Thriller</option>
                    <option value="biography">Biography</option>
                  </select>
                </div>
              )}
            </div>

            <div className="mb-2">
              {isEditMode && (
                <div>
                  Enter book language:
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => handleFieldChange(e, 'language')}
                    value={book.language}
                  >
                    <option value="russian">Russian</option>
                    <option value="english">English</option>
                  </select>
                </div>
              )}
            </div>

            <div>
              {isEditMode ? (
                <div>
                  Enter book pages:
                  <input
                    required
                    type="number"
                    placeholder="Количество страниц"
                    value={book.pages}
                    className="form-control"
                    onChange={(e) => handleFieldChange(e, 'pages')}
                  ></input>
                  {book.type === 'read' && (
                    <div>
                      Enter book review:
                      <input
                        type="text"
                        value={book.review}
                        className="form-control"
                        onChange={(e) => handleFieldChange(e, 'review')}
                      ></input>
                      Enter book rating:
                      <input
                        required
                        type="number"
                        max={10}
                        placeholder="Оценка книги"
                        value={book.rating}
                        className="form-control"
                        onChange={(e) => handleFieldChange(e, 'rating')}
                      ></input>
                      Enter book start date:
                      <input
                        required
                        type="date"
                        value={book.startDate}
                        className="form-control"
                        onChange={(e) => handleFieldChange(e, 'startDate')}
                      ></input>
                      Enter book end Date:
                      <input
                        required
                        type="date"
                        value={book.endDate}
                        className="form-control"
                        onChange={(e) => handleFieldChange(e, 'endDate')}
                      ></input>
                    </div>
                  )}
                  {book.type === 'awaiting' && (
                    <div>
                      Enter Awaiting Date:
                      <input
                        required
                        type="date"
                        value={book.awaitingDate}
                        className="form-control"
                        onChange={(e) => handleFieldChange(e, 'awaitingDate')}
                      ></input>
                    </div>
                  )}
                  {book.type === 'readable' && (
                    <div>
                      Enter book start date:
                      <input
                        required
                        type="date"
                        value={book.startDate}
                        className="form-control"
                        onChange={(e) => handleFieldChange(e, 'startDate')}
                      ></input>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <p className="lead">Book Pages: {book.pages}</p>
                  <p className="lead">Book genre: {book.genre}</p>
                  <p className="lead">Language: {book.language}</p>
                  {book.type === 'read' && (
                    <div>
                      <p className="lead">Start Date: {book.startDate}</p>
                      <p className="lead">End Date: {book.endDate}</p>
                      <p className="lead">Review: {book.review}</p>
                      <p className="lead">Rating: {book.rating}</p>
                    </div>
                  )}
                  {book.type === 'awaiting' && (
                    <div>
                      <p className="lead">Awaiting Date: {book.awaitingDate}</p>
                    </div>
                  )}
                  {book.type === 'readable' && (
                    <div>
                      <p className="lead"> Start Date: {book.startDate}</p>
                    </div>
                  )}
                </div>
              )}
              {isEditMode && isNewBook ? (
                <button
                  type="submit"
                  className="btn btn-primary mx-auto d-block mt-4"
                >
                  Добавить
                </button>
              ) : (
                <></>
              )}

              {isEditMode && !isNewBook && (
                <button
                  className="btn btn-secondary mx-auto d-block mt-4"
                  onClick={handleUpdateBook}
                >
                  Сохранить
                </button>
              )}
            </div>
          </div>
          <NotificationToast
            showToast={showToast}
            onClose={hideToast}
            toastIsError={toastIsError}
            toastMessage={toastMessage}
          />
        </form>
      )}
    </div>
  );
}
