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

const Dashboard = () => {
  // Example state and handlers (replace with your actual logic/data)
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
    <div className="min-h-screen bg-punkbg font-punk text-punktext px-8 py-8">
      {showConfetti && <ConfettiEffect />}
      {/* Top bar: BIDWIT logo/title (no "Dashboard"), Help button */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-3xl font-extrabold text-punkblue tracking-widest drop-shadow-punk">
          BIDWIT
        </div>
        <HelpGuide />
      </div>

      {/* Top row: Control Panel (left), Chart and Stats (right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Left: Control Panel */}
        <div>
          <div className="bg-punkcard shadow-punk rounded-2xl p-8 mb-8">
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
        </div>
        {/* Right: Chart and Campaign Stats */}
        <div className="flex flex-col gap-8">
          <div className="bg-punkcard shadow-punk rounded-2xl p-8">
            <PerformanceChart data={performanceData} />
          </div>
          <div className="bg-punkcard shadow-punk rounded-2xl p-8">
            <CampaignStats stats={campaignStats} />
          </div>
        </div>
      </div>

      {/* Lower grid: BudgetDonut, KPIStats, BidOutcomes, BidConsole */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Budget Donut */}
        <div className="bg-punkcard shadow-punk rounded-2xl p-8 flex items-center justify-center">
          <BudgetDonut percent={budgetUsed} />
        </div>
        {/* KPI Stats */}
        <div className="bg-punkcard shadow-punk rounded-2xl p-8 flex items-center justify-center">
          <KPIStats stats={kpiStats} />
        </div>
        {/* Bid Outcomes */}
        <div className="bg-punkcard shadow-punk rounded-2xl p-8 col-span-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-punkblue text-lg font-extrabold tracking-wider">Bid Outcomes</h3>
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
        <div className="bg-punkcard shadow-punk rounded-2xl p-8 col-span-2">
          <BidConsole logs={bidConsoleLogs} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;






