import React from 'react';

const BidConsole = ({ logs = [] }) => {
  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-xl shadow h-64 overflow-y-auto">
      <h3 className="text-white font-semibold mb-2">Console Output</h3>
      <div className="space-y-1">
        {logs.length === 0 ? (
          <p className="text-gray-400">No logs yet...</p>
        ) : (
          logs.map((log, index) => (
            <p key={index} className="text-sm">
              ➤ {log}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default BidConsole;



