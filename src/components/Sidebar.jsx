import React from 'react';
import { Home, BarChart, Terminal } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', icon: Home },
  { label: 'Analytics', icon: BarChart },
  { label: 'Logs', icon: Terminal },
];

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen px-6 py-8 hidden md:block border-r border-white/10">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-400">Bitwise</h1>
        <p className="text-sm text-gray-400">RTB Optimizer</p>
      </div>

      <nav className="space-y-4">
        {navItems.map(({ label, icon: Icon }, i) => (
          <button
            key={i}
            className="flex items-center w-full space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition text-left"
          >
            <Icon size={20} />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
