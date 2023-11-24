import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import getBooks from '@/api/getBooks';
import getUser from '@/api/getUser';
import { pageSizeOptions } from '@/constants/pageSize';
import { sortOptions } from '@/constants/sortOptions';
import getToken from '@/utils/workWithTokens/getToken';

import { useUser } from '../contexts/userContext';

export function useBookData() {
  const { setUser } = useUser();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getToken();
        if (token) {
          setLoading(true);
          setUser(await getUser(token));
          const booksData = await getBooks(token);
          setBooks(booksData);
          setLoading(false);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setUser]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, sortOptions]);

  useEffect(() => {
    setFilteredBooks(
      books.filter(
        (book: any) => book.type == selectedSort.toLocaleLowerCase(),
      ),
    );
  }, [selectedSort, books]);

  return {
    currentPage,
    selectedSort,
    filteredBooks,
    loading,
    pageSize,
    setCurrentPage,
    setFilteredBooks,
    setLoading,
    setPageSize,
    setSelectedSort,
  };
}
