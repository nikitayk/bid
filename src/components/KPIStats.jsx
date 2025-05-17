import React from 'react';
import './KPIStats.css';

const KPIStats = ({ stats }) => {
  // Example stats: { bids, wins, winRate, spent }
  return (
    <div className="kpi-stats">
      <div className="kpi-block">
        <div className="kpi-label">Bids Made</div>
        <div className="kpi-value">{stats.bids.toLocaleString()}</div>
      </div>
      <div className="kpi-block">
        <div className="kpi-label">Bids Won</div>
        <div className="kpi-value">{stats.wins.toLocaleString()}</div>
      </div>
      <div className="kpi-block">
        <div className="kpi-label">Win Rate</div>
        <div className="kpi-value">{stats.winRate}%</div>
      </div>
      <div className="kpi-block">
        <div className="kpi-label">Total Spent</div>
        <div className="kpi-value">${stats.spent.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default KPIStats;

