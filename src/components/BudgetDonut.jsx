import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const COLORS = ['#00c9a7', '#1e293b']; // Spent, Remaining

const BudgetDonut = ({ spent, total }) => {
  const remaining = Math.max(total - spent, 0);

  const data = [
    { name: 'Spent', value: spent },
    { name: 'Remaining', value: remaining },
  ];

  return (
    <div className="bg-white/5 p-4 rounded-2xl shadow-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4 text-white">Budget Usage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetDonut;
