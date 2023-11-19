'use client';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import getBooks from '@/api/getBooks';
import getUser from '@/api/getUser';
import getToken from '@/utils/workWithTokens/getToken';

import { useUser } from './userContext';

import '@/app/globals.css';

const pageSizeOptions = [12, 18, 24];
const sortOptions = ['Прочитанные', 'Читаемые', 'Ожидающие'];

export default function Home() {
  const { user, setUser } = useUser();
  const [books, setBooks] = useState<any>([]);
  const router = useRouter();
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  useEffect(() => {
    const token = getToken();
    console.log(user);
    if (token) {
      setUser(getUser(token));
      getBooks(token).then((booksData) => {
        setBooks(booksData);
      });
      console.log(books);
    } else {
      router.push('/login');
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  const getBooksOnCurrentPage = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    console.log(books);
    return books?.slice(startIndex, endIndex);
  };

  return (
    <main className="container-fluid mx-auto bg-body-secondary flex flex-col items-center pt-8 min-vh-100">
      <div className="container-fluid w-75 d-flex flex-wrap align-items-center pt-2">
        {/* Селектор количества книг на странице */}
        <div className="d-flex justify-content-center col m-2">
          <p className="my-auto h6">Количество книг</p>
          <Dropdown className="p-2">
            <Dropdown.Toggle
              variant="secondary"
              id="pageSize-dropdown"
              className="btn"
            >
              {pageSize}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {pageSizeOptions.map((option) => (
                <Dropdown.Item key={option} onClick={() => setPageSize(option)}>
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Селектор сортировки книг */}
        <div className="col m-2 text-center">
          <Dropdown className="p-2">
            <Dropdown.Toggle
              variant="secondary"
              id="sort-dropdown"
              className="btn"
              style={{ minWidth: 150 }}
            >
              {selectedSort}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {sortOptions.map((option) => (
                <Dropdown.Item
                  key={option}
                  onClick={() => setSelectedSort(option)}
                >
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Пагинация с использованием стрелочек */}
        <div className="col d-flex justify-content-center m-2">
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
            className="mx-1 px-3 py-1 border rounded bg-light"
            disabled={currentPage === 1}
          >
            {'<'}
          </button>

          {Array.from({ length: Math.ceil(books?.length / pageSize) }).map(
            (_, index) => {
              const page = index + 1;
              const isPageInRange = page >= currentPage && page <= currentPage;

              if (isPageInRange) {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    disabled={currentPage === page}
                    className="mx-1 px-3 py-1 border rounded bg-light"
                  >
                    {page}
                  </button>
                );
              }

              // Пропустить отображение кнопки, если она не находится в диапазоне
              return null;
            },
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < Math.ceil(books?.length / pageSize) ? prev + 1 : prev,
              )
            }
            className="mx-1 px-3 py-1 border rounded bg-light"
            disabled={currentPage === Math.ceil(books?.length / pageSize)}
          >
            {'>'}
          </button>
        </div>

        {/* Кнопка "Добавить книгу" */}
        <Link href="/book-form" className="col m-2 text-center">
          <button className="btn btn-success">Добавить книгу</button>
        </Link>
      </div>

      {/* Отображение карточек с информацией о книгах */}
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
        {getBooksOnCurrentPage()?.map((book: any, index: any) => (
          <Link key={index} href="/book-form" className="btn">
            <div
              className="card text-dark bg-light mb-4 col-12 shadow-hover"
              style={{ width: '320px', height: '470px' }}
            >
              <h5 className="card-title text-truncate m-2 text-center">
                {book.title}
              </h5>
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
        ))}
      </div>
    </main>
  );
}
