import React from 'react';

const CampaignStats = () => {
  // Dummy stats — you can replace these with props or fetched data later
  const stats = [
    { label: 'Impressions', value: '120,000' },
    { label: 'Clicks', value: '8,500' },
    { label: 'CTR', value: '7.08%' },
    { label: 'Cost', value: '$1,200' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Campaign Stats</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-xl">
            <div className="text-lg font-bold text-blue-600">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignStats;
