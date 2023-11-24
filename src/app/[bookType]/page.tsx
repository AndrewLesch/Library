'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import getBooks from '@/api/getBooks';
import getToken from '@/utils/workWithTokens/getToken';

export default function BookTypePage() {
  const [books, setBooks] = useState([]);
  const bookType = usePathname().slice(1);
  const itemsPerPage = 6; // Количество книг на странице

  useEffect(() => {
    const token = getToken();

    // Выполняем запрос при монтировании компонента
    getBooks(token, bookType, setBooks);
  }, [bookType]);

  // Разделяем книги на страницы
  const totalPages = Math.ceil(books.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = books.slice(startIndex, endIndex);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto min-h-120">
      <h1 className="text-2xl font-bold mb-4">Книги по типу: {bookType}</h1>
      <div className="grid grid-cols-2 gap-20">
        {currentBooks?.map((book: any) => (
          <Link
            href="/[bookType]/[id]"
            className="w-2/3 mx-auto"
            key={book.id}
            as={`/${bookType}/${book.id}`}
          >
            <div
              key={book.id}
              className="bg-gray-400 mx-auto rounded-lg shadow-md cursor-pointer
              hover:shadow-lg transition-transform transform hover:-translate-y-1 h-auto"
            >
              <div className="relative">
                <img
                  src={`http://localhost:3001/` + book.coverPath}
                  alt={book.title}
                  className="w-full h-96 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-gray-600 text-sm">{book.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {totalPages > 1 && (
          <div className="space-x-2">
            {Array.from({ length: totalPages }).map((_, page) => (
              <button
                key={page}
                className={`px-2 py-1 border rounded ${
                  currentPage === page + 1
                    ? 'bg-blue-500 text-white'
                    : 'border-gray-300'
                }`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
