import React from 'react';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { pieColors } from '@/app/statistics/constants';

const GenreStatistics = ({ pieData, loading }: any) => (
  <div className="d-block w-50 card m-2">
    <div className="card-header text-center">Статистика книг по жанрам</div>
    <div className="card-body">
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status" />
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={450}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius="90%"
              label
              animationBegin={500}
              animationDuration={2000}
            >
              {pieData.map((_: any, index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={pieColors[index % pieColors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{
                fontSize: '1.5vw',
                fontWeight: 'bold',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  </div>
);

export default GenreStatistics;
