import React, { useRef } from 'react';
import './BidConsole.css';

const BidConsole = ({ logs = [] }) => {
  const consoleRef = useRef(null);

  const handleClear = () => {
    if (consoleRef.current) {
      consoleRef.current.innerText = '';
    }
  };

  return (
    <div className="bid-console">
      <div className="bid-console-header">
        <span>Bid Console</span>
        <button className="console-clear-btn" onClick={handleClear}>Clear</button>
      </div>
      <pre className="bid-console-output" ref={consoleRef}>
        {logs.length === 0
          ? 'No logs yet...'
          : logs.map((log, idx) => (
              <div key={idx} className={`console-log console-log-${log.type || 'info'}`}>
                {log.message}
              </div>
            ))}
      </pre>
    </div>
  );
};

export default BidConsole;
