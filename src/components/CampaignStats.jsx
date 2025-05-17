import React from 'react';

const CampaignStats = ({ stats = [] }) => {
  const defaultStats = [
    { label: 'Impressions', value: '120,000' },
    { label: 'Clicks', value: '8,500' },
    { label: 'CTR', value: '7.08%' },
    { label: 'Cost', value: '$1,200' },
  ];

  const displayStats = stats.length > 0 ? stats : defaultStats;

  return (
    <div className="bg-white/5 p-6 rounded-2xl shadow-md border border-white/10">
      <h2 className="text-xl font-semibold mb-4 text-white">Campaign Stats</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {displayStats.map((stat, index) => (
          <div key={index} className="bg-white/10 p-4 rounded-xl">
            <div className="text-xl font-bold text-blue-400">{stat.value}</div>
            <div className="text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignStats;

