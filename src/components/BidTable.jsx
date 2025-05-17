import React from 'react';
import './BidTable.css';

const BidTable = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bid-table-empty">
        No bid data available. Run a campaign to see results here.
      </div>
    );
  }

  return (
    <table className="bid-table">
      <thead>
        <tr>
          <th>Bid ID</th>
          <th>CTR</th>
          <th>CVR</th>
          <th>Bid Price ($)</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {data.map((bid, idx) => (
          <tr key={bid.id || idx}>
            <td>{bid.id}</td>
            <td>{bid.ctr}</td>
            <td>{bid.cvr}</td>
            <td>{bid.price}</td>
            <td className={bid.result === 'Won' ? 'bid-won' : 'bid-lost'}>
              {bid.result}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BidTable;




