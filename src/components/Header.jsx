import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/10 dark:bg-black/30 shadow-lg border-b border-white/10">
      <div>
        <h1 className="text-2xl font-bold text-blue-500 dark:text-blue-400">Bitwise</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          AI-Powered Real-Time Bidding Optimizer
        </p>
      </div>
      <button
        onClick={toggleTheme}
        className="text-gray-700 dark:text-gray-300 p-2 rounded-full hover:bg-white/20 transition"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </header>
  );
};

export default Header;
