import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white">
        {open ? <X /> : <Menu />}
      </button>
      <div className={`fixed top-0 left-0 h-full bg-[#232946] w-64 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 md:relative md:translate-x-0`}>
        <div className="p-4 text-lg font-bold text-[#7dd3fc]">BIDWIT</div>
        <ul className="space-y-4 p-4 text-white">
          <li>Dashboard</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;



