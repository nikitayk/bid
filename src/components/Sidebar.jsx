import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-brand">BIDWIT</div>
    <nav>
      <ul>
        <li className="active">Dashboard</li>
        <li>Analytics</li>
        <li>Logs</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;

