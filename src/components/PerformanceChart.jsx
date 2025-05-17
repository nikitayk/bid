import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const PerformanceChart = ({ data }) => {
  return (
    <div className="bg-white/5 p-4 rounded-2xl shadow-xl border border-white/10">
      <h2 className="text-xl font-semibold mb-4 text-white">CTR / CVR Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="timestamp" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: 'none' }} />
          <Legend />
          <Line type="monotone" dataKey="ctr" stroke="#00f6ff" strokeWidth={2} name="CTR" />
          <Line type="monotone" dataKey="cvr" stroke="#ff4bd8" strokeWidth={2} name="CVR" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
