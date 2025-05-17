// src/components/PerformanceChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';

const PerformanceChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Impressions',
        data: [12000, 19000, 3000, 5000, 2000],
        fill: false,
        backgroundColor: '#6366F1',
        borderColor: '#6366F1',
      },
      {
        label: 'Clicks',
        data: [1000, 2000, 1500, 3000, 2500],
        fill: false,
        backgroundColor: '#10B981',
        borderColor: '#10B981',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default PerformanceChart;




