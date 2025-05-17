// src/components/Header.jsx
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md h-16 flex items-center justify-between px-6 border-b border-gray-200 z-10">
      <div className="text-xl font-semibold text-indigo-600">
        Bitwise RTB Dashboard
      </div>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600 text-lg hover:text-indigo-600 transition" />
          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-indigo-600 transition">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="text-sm text-gray-700 font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;


