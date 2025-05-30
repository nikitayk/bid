// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-transparent">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;






