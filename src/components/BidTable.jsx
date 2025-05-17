import React from 'react';

const BidTable = ({ bids = [] }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-64 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Bid Table</h3>
      <table className="min-w-full text-sm text-left">
        <thead className="border-b border-gray-200 text-gray-600">
          <tr>
            <th className="px-4 py-2">Bid ID</th>
            <th className="px-4 py-2">Amount ($)</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {Array.isArray(bids) && bids.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-400">
                No bid data available.
              </td>
            </tr>
          ) : (
            bids.map((bid, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2">{bid.id ?? 'N/A'}</td>
                <td className="px-4 py-2">${(bid.bidPrice ?? 0).toFixed(2)}</td>
                <td className="px-4 py-2">{bid.won ? 'Won' : 'Lost'}</td>
                <td className="px-4 py-2">
                  {bid.timestamp ? new Date(bid.timestamp).toLocaleTimeString() : 'N/A'}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BidTable;



