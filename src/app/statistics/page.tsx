'use client';

import BooksStatistics from '@/components/BooksStatistics';
import GenreStatistics from '@/components/GenreStatistics';
import TotalPagesStatistics from '@/components/TotalPagesStatistics';

import { useStatisticsData } from './hooks/useStatisticsData';
import { filteredType } from './constants';

const Statistics = () => {
  const { pagesStatistics, pieData, loading, allBooks } =
    useStatisticsData(filteredType);

  return (
    <div className="container-fluid min-vh-100 bg-body-secondary m-0 p-0">
      <div className="container-fluid w-75 mb-4">
        <h4 className="text-muted p-2">СТАТИСТИКА</h4>
      </div>
      <div className="container-fluid w-75 justify-content-between d-flex">
        <GenreStatistics pieData={pieData} loading={loading} />
        <TotalPagesStatistics
          totalBookPages={pagesStatistics?.totalBookPages}
          loading={loading}
        />
      </div>
      <div className="container-fluid w-75 justify-content-between d-flex">
        <BooksStatistics allBooks={allBooks} loading={loading} />
      </div>
    </div>
  );
};

export default Statistics;
