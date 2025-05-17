// src/components/KPIsStats.jsx
import React from 'react';

const KPIsStats = () => {
  const kpis = [
    { label: 'CTR', value: '2.5%' },
    { label: 'CPC', value: '$0.50' },
    { label: 'CPM', value: '$5.00' },
    { label: 'ROAS', value: '3.2x' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-4 text-center">
          <h4 className="text-sm font-medium text-gray-500">{kpi.label}</h4>
          <p className="mt-1 text-xl font-semibold text-gray-800">{kpi.value}</p>
        </div>
      ))}
    </div>
  );
};

export default KPIsStats;




