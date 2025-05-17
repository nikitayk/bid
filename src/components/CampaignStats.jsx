import React from 'react';
import './CampaignStats.css';

const CampaignStats = ({ stats }) => (
  <div className="campaign-stats">
    <div className="stat-block">
      <div className="stat-label">Impressions</div>
      <div className="stat-value">{stats.impressions.toLocaleString()}</div>
    </div>
    <div className="stat-block">
      <div className="stat-label">Clicks</div>
      <div className="stat-value">{stats.clicks.toLocaleString()}</div>
    </div>
    <div className="stat-block">
      <div className="stat-label">CTR</div>
      <div className="stat-value">{stats.ctr}%</div>
    </div>
    <div className="stat-block">
      <div className="stat-label">Cost</div>
      <div className="stat-value">${stats.cost.toLocaleString()}</div>
    </div>
  </div>
);

export default CampaignStats;




