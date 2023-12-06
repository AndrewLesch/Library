import { useEffect, useState } from 'react';

import getBooks from '@/api/getBooks';
import calculatePagesStatistics from '@/utils/calculatePagesStatistics';
import getGenreCountData from '@/utils/countGenreData';
import getToken from '@/utils/workWithTokens/getToken';

export const useStatisticsData = (filteredType: string) => {
  const [allBooks, setAllBooks] = useState([]);
  const [pagesStatistics, setPagesStatistics] = useState<any>(undefined);
  const [pieData, setPieData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token = getToken();

      if (token) {
        const booksData = await getBooks(token);
        const readBooks = booksData.filter(
          (book: any) => book.type === filteredType,
        );

        setAllBooks(readBooks);
        setLoading(false);
      }
    };

    fetchData();
  }, [filteredType]);

  useEffect(() => {
    if (allBooks) {
      setPagesStatistics(calculatePagesStatistics(allBooks));

      const genreCountData = getGenreCountData(allBooks);
      const newPieData = Object.keys(genreCountData).map((genre) => ({
        name: genre,
        value: genreCountData[genre],
      }));
      setPieData(newPieData);
    }
  }, [allBooks]);

  return {
    pagesStatistics,
    pieData,
    loading,
    allBooks,
  };
};
