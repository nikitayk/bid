// src/constants.js

// Default campaign simulation values
export const DEFAULT_N_FACTOR = 7;
export const DEFAULT_BUDGET = 1000;

// Metric labels for the dashboard summary
export const METRICS = [
  { label: 'Impressions', key: 'impressions' },
  { label: 'Clicks', key: 'clicks' },
  { label: 'CTR', key: 'ctr' },
  { label: 'Cost', key: 'cost' },
  // Extendable later:
  // { label: 'Wins', key: 'wins' },
  // { label: 'Losses', key: 'losses' },
];

// Chart and UI color palette
export const CHART_COLORS = {
  performance: '#3b82f6', // Tailwind blue-500
  wins: '#10b981',        // Tailwind green-500
  losses: '#ef4444',      // Tailwind red-500
  impressions: '#6366f1', // Tailwind indigo-500
};

// Reusable theme values or breakpoints (optional)
export const UI = {
  sidebarWidth: '16rem',
};

