import React, { useState } from 'react';
import './HelpGuide.css'; // Create and style this CSS file as needed

const HelpGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className="help-button" onClick={openModal} aria-label="Open Help Guide">
        Help
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <header className="modal-header">
              <h2>Welcome to BIDWIT Help Guide</h2>
              <button className="close-button" onClick={closeModal} aria-label="Close Help Guide">&times;</button>
            </header>
            <section className="modal-body">
              <p>This guide will help you understand the main features of the BIDWIT dashboard.</p>
              <ol>
                <li><strong>File Upload:</strong> Use the drag-and-drop area or browse to upload your campaign data files (CSV/JSON).</li>
                <li><strong>Mode Selection:</strong> Toggle between Simulated and Real-time modes to control how bids are processed.</li>
                <li><strong>N-Factor Slider:</strong> Adjust the N-Factor to optimize bidding strategies dynamically.</li>
                <li><strong>Campaign Performance:</strong> View interactive charts showing CTR and CVR trends over time.</li>
                <li><strong>Budget Usage:</strong> Monitor your campaign budget with a visual donut chart indicator.</li>
                <li><strong>Bid Outcomes:</strong> Check detailed bid results in the structured table with export options.</li>
                <li><strong>Bid Console:</strong> View real-time logs and clear them as needed for better tracking.</li>
                <li><strong>Visual Feedback:</strong> Enjoy confetti effects celebrating campaign milestones and successes.</li>
              </ol>
              <p>For more detailed instructions, please refer to the documentation or contact support.</p>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpGuide;
