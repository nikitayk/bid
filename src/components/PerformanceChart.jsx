import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './PerformanceChart.css';

const PerformanceChart = ({ data }) => {
  // Example data: [{ time: '10:00', ctr: 5.2, cvr: 1.8 }, ...]
  return (
    <div className="performance-chart">
      <h3>CTR & CVR Over Time</h3>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="ctr" stroke="#6c63ff" strokeWidth={2} name="CTR" />
          <Line type="monotone" dataKey="cvr" stroke="#2ecc40" strokeWidth={2} name="CVR" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
