import React from 'react';
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const BooksStatistics = ({ allBooks, loading }: any) => (
  <div className="d-block w-100 card m-2">
    <div className="card-header text-center">
      Статистика книг по оценкам и количеству страниц
    </div>
    <div className="card-body">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status" />
        </div>
      ) : (
        <>
          <ResponsiveContainer width="100%" height={450}>
            <LineChart data={allBooks} syncId="booksChart">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend
                layout="vertical"
                align="center"
                verticalAlign="bottom"
                wrapperStyle={{
                  fontSize: '26px',
                  fontWeight: 'bold',
                }}
              />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#000000"
                dot={{ stroke: '#f88181', strokeWidth: 5, r: 6 }}
                activeDot={{ r: 8 }}
                name="Rating"
              />
              <Brush dataKey="title" height={30} stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height={450}>
            <LineChart data={allBooks} syncId="booksChart">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend
                layout="vertical"
                align="center"
                verticalAlign="bottom"
                wrapperStyle={{
                  fontSize: '26px',
                  fontWeight: 'bold',
                }}
              />
              <Line
                type="monotone"
                dataKey="pages"
                stroke="#000000"
                dot={{ stroke: '#85fc81', strokeWidth: 5, r: 6 }}
                activeDot={{ r: 8 }}
                name="Pages"
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  </div>
);

export default BooksStatistics;
