import React, { useState } from 'react';
import BidConsole from './BidConsole';
import BidTable from './BidTable';
import PerformanceChart from './PerformanceChart';
import WinChart from './WinChart';
import CampaignStats from './CampaignStats';

const Dashboard = () => {
  const [nFactor, setNFactor] = useState(7);
  const [budget, setBudget] = useState(1000);
  const [logs, setLogs] = useState([
    'Simulation initialized...',
    'Waiting for bids...',
    'Bid WIN from Acme Corp',
    'Bid LOST to Beta Ads',
  ]);

  const mockBids = [
    {
      id: 'BID-001',
      advertiser: 'Acme Corp',
      bidPrice: 2.35,
      won: true,
      timestamp: Date.now() - 100000,
    },
    {
      id: 'BID-002',
      advertiser: 'Beta Ads',
      bidPrice: 1.95,
      won: false,
      timestamp: Date.now() - 80000,
    },
    {
      id: 'BID-003',
      advertiser: 'Gamma Media',
      bidPrice: 2.1,
      won: true,
      timestamp: Date.now() - 60000,
    },
  ];

  const performanceData = [
    { timestamp: '10:00', ctr: 3.1, cvr: 0.8 },
    { timestamp: '10:05', ctr: 3.6, cvr: 0.9 },
    { timestamp: '10:10', ctr: 4.0, cvr: 1.1 },
    { timestamp: '10:15', ctr: 4.2, cvr: 1.3 },
  ];

  const winChartData = [
    { name: 'Won', value: 65 },
    { name: 'Lost', value: 25 },
    { name: 'Skipped', value: 10 },
  ];

  const handleRun = () => {
    setLogs((prev) => [
      ...prev,
      `Running simulation with N-Factor: ${nFactor} and Budget: $${budget}`,
    ]);
    // Future: Add simulation logic here
  };

  const handleReset = () => {
    setNFactor(7);
    setBudget(1000);
    setLogs(['Simulation reset.']);
  };

  return (
    <div className="space-y-8 px-4 py-6">
      {/* Campaign Settings */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-white">Campaign Settings</h2>

        <div className="mb-4">
          <label className="block font-medium text-white mb-1">N-Factor: {nFactor}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={nFactor}
            onChange={(e) => setNFactor(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-white mb-1">Campaign Budget ($)</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-lg bg-white/10 text-white placeholder:text-gray-400"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleRun}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Run
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Campaign KPI Stats */}
      <CampaignStats />

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PerformanceChart data={performanceData} />
        <WinChart data={winChartData} />
      </div>

      {/* Bid Console + Table Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BidTable bids={mockBids} />
        <BidConsole logs={logs} />
      </div>
    </div>
  );
};

export default Dashboard;
