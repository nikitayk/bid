// src/components/CampaignStats.jsx
import React from 'react';

const CampaignStats = () => {
  const stats = [
    { title: 'Total Spend', value: '$12,345', change: '+5%' },
    { title: 'Impressions', value: '1,234,567', change: '+2%' },
    { title: 'Clicks', value: '123,456', change: '+3%' },
    { title: 'Conversions', value: '12,345', change: '+1%' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
          <p className="mt-1 text-2xl font-semibold text-gray-800">{stat.value}</p>
          <p className="mt-2 text-sm text-green-500">{stat.change} from last period</p>
        </div>
      ))}
    </div>
  );
};

export default CampaignStats;




