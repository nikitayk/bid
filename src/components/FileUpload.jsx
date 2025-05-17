import React, { useRef, useState } from 'react';
import './FileUpload.css';

const FileUpload = ({ onFileSelected }) => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      if (onFileSelected) onFileSelected(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      if (onFileSelected) onFileSelected(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`file-upload-container${dragActive ? ' drag-active' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      tabIndex={0}
      aria-label="Upload campaign data file"
    >
      <input
        type="file"
        accept=".csv,.json"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        aria-label="File input"
      />
      <div className="file-upload-content">
        <div className="file-upload-icon" aria-hidden="true">📂</div>
        <p>
          {fileName
            ? <span>Selected: <strong>{fileName}</strong></span>
            : <>Drag &amp; drop your <b>CSV</b> or <b>JSON</b> file here,<br />or <button type="button" className="browse-btn" onClick={handleBrowseClick}>Browse</button></>
          }
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
