import React, { useState } from 'react';
import './HelpGuide.css';

const HelpGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="help-btn" onClick={() => setIsOpen(true)} aria-label="Open Help Guide">
        ?
      </button>
      {isOpen && (
        <div className="help-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="help-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="help-modal-header">
              <h2>BIDWIT Guide</h2>
              <button className="help-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Help Guide">&times;</button>
            </div>
            <div className="help-modal-body">
              <ol>
                <li><strong>Upload Campaign Data:</strong> Drag and drop or browse for CSV/JSON files.</li>
                <li><strong>Mode Selection:</strong> Toggle between Simulated and Real-time modes.</li>
                <li><strong>N-Factor Slider:</strong> Adjust for bidding strategy.</li>
                <li><strong>Budget Input:</strong> Set your campaign budget.</li>
                <li><strong>Campaign KPIs:</strong> View key performance indicators in real time.</li>
                <li><strong>Performance Chart:</strong> Track CTR and CVR trends visually.</li>
                <li><strong>Bid Outcomes:</strong> See bid results and export as CSV.</li>
                <li><strong>Bid Console:</strong> Monitor real-time logs and clear them as needed.</li>
              </ol>
              <p>For more help, refer to the documentation or contact support.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpGuide;

