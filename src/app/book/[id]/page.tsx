'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import getBookById from '@/api/getBookById';
import Book from '@/components/Book';
import getToken from '@/utils/workWithTokens/getToken';

const ViewBook = () => {
  const [loadedBook, setLoadedBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const token = getToken();
    getBookById(token, id, setLoadedBook);
  }, []);

  return (
    <div className="bg-body-secondary">
      <Book isNewBook={false} addedBook={loadedBook}></Book>
    </div>
  );
};

export default ViewBook;
