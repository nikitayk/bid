// src/components/BidTable.jsx
import React from 'react';

const BidTable = () => {
  const data = [
    { id: 1, campaign: 'Campaign A', impressions: 1000, clicks: 100, ctr: '10%' },
    { id: 2, campaign: 'Campaign B', impressions: 2000, clicks: 150, ctr: '7.5%' },
    // Add more rows as needed
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Bid Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Campaign</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Impressions</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Clicks</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">CTR</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.campaign}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.impressions}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.clicks}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.ctr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidTable;







