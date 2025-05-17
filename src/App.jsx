import React, { useEffect } from 'react';
import Layout from './components/Layout';
import BudgetSlider from './components/BudgetSlider';
import CampaignStats from './components/CampaignStats';
import BidConsole from './components/BidConsole';
import BidTable from './components/BidTable';
import Loader from './components/Loader';
import Notification from './components/Notification';

const App = () => {
  useEffect(() => {
    document.title = 'BIDWIT';
  }, []);

  return (
    <>
      {/* Global notifications and loader */}
      <Notification />
      <Loader />

      {/* Page layout with sidebar and header */}
      <Layout>
        <div className="p-4 space-y-6">
          <h1 className="text-3xl font-bold text-gradient text-center">BIDWIT</h1>

          {/* Controls and dashboard components */}
          <BudgetSlider />
          <CampaignStats />
          <BidTable />
          <BidConsole />
        </div>
      </Layout>
    </>
  );
};

export default App;
