import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
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

      {/* Page layout with sidebar, header, and main dashboard */}
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
};

export default App;
