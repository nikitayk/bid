import React from 'react';
import PropTypes from 'prop-types';
import './ExportButton.css'; // Optional: for custom styling

/**
 * ExportButton
 * @param {string} fileName - The default file name for the export (e.g., "bids.csv").
 * @param {Array} data - The data array to export. Each item should be an object (e.g., a row).
 * @param {Array} columns - The columns to include, as an array of { label, key }.
 * @param {string} [label] - The button label (default: "Export CSV").
 */
const ExportButton = ({ fileName, data, columns, label = "Export CSV" }) => {
  // Converts data array to CSV string
  const convertToCSV = () => {
    if (!data || !data.length) return '';
    const header = columns.map(col => `"${col.label}"`).join(',');
    const rows = data.map(row =>
      columns.map(col => `"${row[col.key] !== undefined ? row[col.key] : ''}"`).join(',')
    );
    return [header, ...rows].join('\r\n');
  };

  // Triggers file download
  const handleExport = () => {
    const csv = convertToCSV();
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName || 'export.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button className="export-btn" onClick={handleExport} disabled={!data || !data.length}>
      <span role="img" aria-label="Export">⬇️</span> {label}
    </button>
  );
};

ExportButton.propTypes = {
  fileName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string,
};

export default ExportButton;
