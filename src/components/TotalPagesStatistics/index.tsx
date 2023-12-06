import React from 'react';

const TotalPagesStatistics = ({ totalBookPages, loading }: any) => {
  return (
    <div className="w-50 text-center card m-2">
      <div className="card-header text-center">Всего прочитано страниц:</div>
      <div className="card-body d-flex flex-column justify-content-center align-items-center my-auto">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status" />
          </div>
        ) : (
          <p style={{ fontSize: '8.5vw' }} className="text-danger ">
            {totalBookPages}
          </p>
        )}
      </div>
    </div>
  );
};

export default TotalPagesStatistics;
