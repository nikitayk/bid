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
    <div className="control-panel-punk">
      {/* File Upload */}
      <div className="control-group-punk">
        <label className="control-label-punk">Upload Campaign Data</label>
        <FileUpload onFileSelected={onFileSelected} />
      </div>

      {/* Mode Toggle */}
      <div className="control-group-punk">
        <label className="control-label-punk">Mode</label>
        <div className="mode-toggle-punk">
          <button
            className={`mode-btn-punk${mode === 'Simulated' ? ' active' : ''}`}
            onClick={() => setMode('Simulated')}
            type="button"
          >
            Simulated
          </button>
          <button
            className={`mode-btn-punk${mode === 'Real-time' ? ' active' : ''}`}
            onClick={() => setMode('Real-time')}
            type="button"
          >
            Real-time
          </button>
        </div>
      </div>

      {/* N-Factor Slider */}
      <div className="control-group-punk">
        <label className="control-label-punk">N-Factor: <b>{nFactor}</b></label>
        <input
          type="range"
          min={1}
          max={20}
          value={nFactor}
          onChange={e => setNFactor(Number(e.target.value))}
          className="slider-punk"
        />
      </div>

      {/* Budget Input */}
      <div className="control-group-punk">
        <label className="control-label-punk">Campaign Budget ($)</label>
        <div className="budget-input-wrapper-punk">
          <span className="budget-dollar-punk">$</span>
          <input
            type="number"
            min={0}
            step="any"
            value={budget === '' ? '' : budget}
            onChange={e => setBudget(e.target.value === '' ? '' : Number(e.target.value))}
            className="budget-input-punk"
            placeholder="Enter budget"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="control-actions-punk">
        <button className="run-btn-punk" onClick={onRun}>Start</button>
        <button className="reset-btn-punk" onClick={onReset}>Stop</button>
      </div>
    </div>
  );
};

export default ControlPanel;



