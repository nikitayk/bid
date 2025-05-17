import React, { useState } from 'react';
import ControlPanel from './ControlPanel';
import CampaignStats from './CampaignStats';
import KPIStats from './KPIStats';
import PerformanceChart from './PerformanceChart';
import BudgetDonut from './BudgetDonut';
import BidTable from './BidTable';
import BidConsole from './BidConsole';
import ExportButton from './ExportButton';
import HelpGuide from './HelpGuide';
import ConfettiEffect from './ConfettiEffect';
import './Dashboard.css';

const Dashboard = () => {
  const [nFactor, setNFactor] = useState(9);
  const [budget, setBudget] = useState(1000);
  const [mode, setMode] = useState('Simulated');
  const [file, setFile] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const campaignStats = { impressions: 120000, clicks: 8500, ctr: 7.08, cost: 1200 };
  const kpiStats = { bids: 2000, wins: 800, winRate: 40, spent: 1200 };
  const performanceData = [
    { time: '10:00', ctr: 5.2, cvr: 1.8 },
    { time: '11:00', ctr: 6.0, cvr: 2.1 },
    { time: '12:00', ctr: 7.1, cvr: 2.6 },
  ];
  const budgetUsed = 60;
  const bidTableData = [
    { id: 1, ctr: 0.12, cvr: 0.03, price: 1.25, result: 'Won' },
    { id: 2, ctr: 0.14, cvr: 0.04, price: 1.15, result: 'Lost' },
  ];
  const bidConsoleLogs = [
    { type: 'info', message: 'Bid process started...' },
    { type: 'success', message: 'Bid #1 won at $1.25' },
    { type: 'error', message: 'Bid #2 lost' },
  ];

  const handleFileSelected = (file) => setFile(file);
  const handleRun = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };
  const handleReset = () => {
    setNFactor(9);
    setBudget(1000);
    setMode('Simulated');
    setFile(null);
  };

  return (
    <div className="dashboard-root">
      {showConfetti && <ConfettiEffect />}
      {/* Top bar */}
      <div className="dashboard-topbar">
        <div className="dashboard-logo">BIDWIT</div>
        <div className="dashboard-actions">
          <HelpGuide />
        </div>
      </div>

      {/* Top: Control Panel + Chart */}
      <div className="dashboard-row">
        <div className="dashboard-card dashboard-panel">
          <ControlPanel
            nFactor={nFactor}
            setNFactor={setNFactor}
            budget={budget}
            setBudget={setBudget}
            mode={mode}
            setMode={setMode}
            onFileSelected={handleFileSelected}
            onRun={handleRun}
            onReset={handleReset}
          />
        </div>
        <div className="dashboard-card dashboard-chart">
          <PerformanceChart data={performanceData} />
        </div>
      </div>

      {/* Stats Row */}
      <div className="dashboard-row dashboard-stats-row">
        <div className="dashboard-card"><CampaignStats stats={campaignStats} /></div>
        <div className="dashboard-card"><BudgetDonut percent={budgetUsed} /></div>
        <div className="dashboard-card"><KPIStats stats={kpiStats} /></div>
      </div>

      {/* Bid Outcomes */}
      <div className="dashboard-card dashboard-fullwidth">
        <div className="dashboard-bid-table-header">
          <h3>Bid Outcomes</h3>
          <ExportButton
            fileName="bid_outcomes.csv"
            data={bidTableData}
            columns={[
              { label: 'Bid ID', key: 'id' },
              { label: 'CTR', key: 'ctr' },
              { label: 'CVR', key: 'cvr' },
              { label: 'Bid Price', key: 'price' },
              { label: 'Result', key: 'result' }
            ]}
          />
        </div>
        <BidTable data={bidTableData} />
      </div>

      {/* Bid Console */}
      <div className="dashboard-card dashboard-fullwidth">
        <BidConsole logs={bidConsoleLogs} />
      </div>
    </div>
  );
};

export default Dashboard;









