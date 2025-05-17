// src/api.js

// Simulates bid generation and campaign performance metrics
export const simulateBids = (nFactor, budget) => {
  const totalBids = 100;
  const bids = [];

  let remainingBudget = budget;
  let impressions = 0;
  let clicks = 0;
  let cost = 0;
  let wins = 0;

  for (let i = 0; i < totalBids; i++) {
    const bidPrice = parseFloat((Math.random() * nFactor * 0.5).toFixed(2));
    const won = Math.random() < 0.6; // 60% chance to win

    if (won && remainingBudget >= bidPrice) {
      remainingBudget -= bidPrice;
      impressions++;
      wins++;
      cost += bidPrice;
      if (Math.random() < 0.1) clicks++; // 10% click-through rate
    }

    bids.push({
      id: `BID-${(i + 1).toString().padStart(3, '0')}`,
      bidPrice,
      won,
      timestamp: new Date(Date.now()).toISOString(),
    });
  }

  const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) + '%' : '0%';

  return {
    bids,
    summary: {
      impressions,
      clicks,
      ctr,
      cost: `$${cost.toFixed(2)}`,
      wins,
      losses: totalBids - wins,
      skipped: totalBids - wins - (totalBids - wins), // placeholder if needed
    },
  };
};

