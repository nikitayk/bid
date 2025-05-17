import { useState } from 'react';

const useBiddingEngine = (initialNFactor = 7, initialBudget = 1000) => {
  const [nFactor, setNFactor] = useState(initialNFactor);
  const [budget, setBudget] = useState(initialBudget);
  const [isLoading, setIsLoading] = useState(false);
  const [metrics, setMetrics] = useState({
    impressions: '0',
    clicks: '0',
    ctr: '0%',
    cost: '$0.00',
  });

  const runSimulation = (onComplete) => {
    setIsLoading(true);

    try {
      setTimeout(() => {
        const impressions = Math.floor(Math.random() * 200000) || 0;
        const clicks = Math.floor(impressions * (nFactor / 100)) || 0;
        const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) + '%' : '0%';
        const cost = `$${(budget * (nFactor / 10)).toFixed(2)}`;

        setMetrics({
          impressions: impressions.toLocaleString(),
          clicks: clicks.toLocaleString(),
          ctr,
          cost,
        });

        setIsLoading(false);

        if (typeof onComplete === 'function') {
          onComplete();
        }
      }, 1000);
    } catch (error) {
      console.error('Simulation error:', error);
      setIsLoading(false);
    }
  };

  const resetSimulation = () => {
    setNFactor(initialNFactor);
    setBudget(initialBudget);
    setMetrics({
      impressions: '0',
      clicks: '0',
      ctr: '0%',
      cost: '$0.00',
    });
  };

  return {
    nFactor,
    setNFactor,
    budget,
    setBudget,
    isLoading,
    metrics,
    runSimulation,
    resetSimulation,
  };
};

export default useBiddingEngine;

