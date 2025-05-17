import React from 'react';

const StatCard = ({ label, value, unit = '', color = 'text-white' }) => (
  <div className="flex flex-col items-center bg-white/5 p-4 rounded-xl shadow border border-white/10 w-full sm:w-40">
    <span className="text-sm text-gray-400">{label}</span>
    <span className={`text-2xl font-bold ${color}`}>
      {value}{unit}
    </span>
  </div>
);

const KPIStats = ({ stats }) => {
  const {
    impressions = 0,
    wins = 0,
    losses = 0,
    skipped = 0,
    totalCost = 0,
  } = stats;

  const totalBids = wins + losses + skipped;
  const winRate = totalBids > 0 ? ((wins / totalBids) * 100).toFixed(1) : 0;
  const costPerWin = wins > 0 ? (totalCost / wins).toFixed(2) : '—';

  return (
    <div className="flex flex-wrap gap-4 justify-between bg-white/5 p-4 rounded-2xl shadow-xl border border-white/10">
      <StatCard label="Impressions" value={impressions} />
      <StatCard label="Bids Won" value={wins} color="text-green-400" />
      <StatCard label="Bids Lost" value={losses} color="text-red-400" />
      <StatCard label="Skipped" value={skipped} color="text-yellow-400" />
      <StatCard label="Win Rate" value={winRate} unit="%" />
      <StatCard label="Cost per Win" value={costPerWin} unit="$" />
    </div>
  );
};

export default KPIStats;
