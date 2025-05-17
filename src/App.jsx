import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Loader from './components/Loader';
import Notification from './components/Notification';

const App = () => {
  useEffect(() => {
    document.title = 'BIDWIT';
  }, []);

  return (
    <>
      <Notification />
      <Loader />
      <Dashboard />
    </>
  );
};

export default App;

