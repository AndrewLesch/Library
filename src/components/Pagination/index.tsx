import React, { FC } from 'react';

type PaginationType = {
  currentPage: number;
  filteredBooksLength: number;
  pageSize: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
};

const Pagination: FC<PaginationType> = ({
  currentPage,
  filteredBooksLength,
  pageSize,
  setCurrentPage,
}) => {
  return (
    <div className="col d-flex justify-content-center m-2">
      <button
        onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        className="mx-1 px-3 py-1 border rounded bg-light"
        disabled={currentPage === 1}
      >
        {'<'}
      </button>

      {Array.from({
        length: Math.ceil(filteredBooksLength / pageSize),
      }).map((_, index) => {
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

        return null;
      })}

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            prev < Math.ceil(filteredBooksLength / pageSize) ? prev + 1 : prev,
          )
        }
        className="mx-1 px-3 py-1 border rounded bg-light"
        disabled={currentPage === Math.ceil(filteredBooksLength / pageSize)}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
