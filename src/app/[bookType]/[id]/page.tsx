'use client';
import React, { useEffect, useState } from 'react';

import getBookById from '@/api/getBookById';
import getToken from '@/utils/workWithTokens/getToken';

type Props = {
  params: {
    id: string;
  };
};

export default function Book({ params: { id } }: Props) {
  const [book, setBook] = useState({} as any);

  useEffect(() => {
    const token = getToken();
    getBookById(token, id, setBook);
    console.log(book);
  }, [id, book]);

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Book Details</h1>

      {book && (
        <div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Title:</span> {book.title}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Author:</span> {book.author}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Type:</span> {book.type}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Genre:</span> {book.genre}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Language:</span> {book.language}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Rating:</span> {book.rating}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Pages:</span> {book.pages}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Start Date:</span>{' '}
              {book.startDate}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">End Date:</span> {book.endDate}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Review:</span> {book.review}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <span className="font-semibold">Awaiting Date:</span>{' '}
              {book.awaitingDate}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
