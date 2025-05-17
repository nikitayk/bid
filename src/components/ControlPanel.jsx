import React from 'react';
import FileUpload from './FileUpload';
import './ControlPanel.css';

const ControlPanel = ({
  nFactor,
  setNFactor,
  budget,
  setBudget,
  mode,
  setMode,
  onFileSelected,
  onRun,
  onReset
}) => {
  return (
    <div className="control-panel">
      <div className="control-group">
        <label className="control-label">Upload Campaign Data</label>
        <FileUpload onFileSelected={onFileSelected} />
      </div>

      <div className="control-group">
        <label className="control-label">Mode</label>
        <div className="mode-toggle">
          <button
            className={`mode-btn${mode === 'Simulated' ? ' active' : ''}`}
            onClick={() => setMode('Simulated')}
            type="button"
          >
            Simulated
          </button>
          <button
            className={`mode-btn${mode === 'Real-time' ? ' active' : ''}`}
            onClick={() => setMode('Real-time')}
            type="button"
          >
            Real-time
          </button>
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">N-Factor: <b>{nFactor}</b></label>
        <input
          type="range"
          min={1}
          max={20}
          value={nFactor}
          onChange={e => setNFactor(Number(e.target.value))}
          className="slider"
        />
      </div>

      <div className="control-group">
        <label className="control-label">Campaign Budget ($)</label>
        <input
          type="number"
          min={0}
          value={budget}
          onChange={e => setBudget(Number(e.target.value))}
          className="budget-input"
        />
      </div>

      <div className="control-actions">
        <button className="run-btn" onClick={onRun}>Run</button>
        <button className="reset-btn" onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default ControlPanel;
