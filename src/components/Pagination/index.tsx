import React from 'react';

const Pagination = ({
  currentPage,
  setCurrentPage,
  filteredBooks,
  pageSize,
}: any) => {
  return (
    <div className="col d-flex justify-content-center m-2">
      <button
        onClick={() =>
          setCurrentPage((prev: any) => (prev > 1 ? prev - 1 : prev))
        }
        className="mx-1 px-3 py-1 border rounded bg-light"
        disabled={currentPage === 1}
      >
        {'<'}
      </button>

      {Array.from({
        length: Math.ceil(filteredBooks?.length / pageSize),
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
          setCurrentPage((prev: any) =>
            prev < Math.ceil(filteredBooks?.length / pageSize)
              ? prev + 1
              : prev,
          )
        }
        className="mx-1 px-3 py-1 border rounded bg-light"
        disabled={currentPage === Math.ceil(filteredBooks.length / pageSize)}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
