import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const COLORS = ['#00f6ff', '#ff4bd8', '#8884d8']; // Win, Loss, Skipped

const WinChart = ({ data }) => {
  return (
    <div className="bg-white/5 p-4 rounded-2xl shadow-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4 text-white">Bid Outcomes</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            innerRadius={60}
            paddingAngle={5}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: 'none' }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WinChart;
