import React, { useEffect } from 'react';
import BudgetSlider from './components/BudgetSlider';
import CampaignStats from './components/CampaignStats';
import BidConsole from './components/BidConsole';
import BidTable from './components/BidTable';

const App = () => {
  useEffect(() => {
    document.title = "BIDWIT"; 
  }, []);

  return (
    <div className="p-4 space-y-6">
      {/**/}
      <h1 className="text-2xl font-bold text-center">BIDWIT</h1>
      <BudgetSlider />
      <CampaignStats />
      <BidTable />
      <BidConsole />
    </div>
  );
};

export default App;
