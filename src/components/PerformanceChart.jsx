import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
} from 'recharts';
import './PerformanceChart.css';

const PerformanceChart = ({ data }) => (
  <div className="performance-chart">
    <h3 className="performance-title">CTR & CVR Over Time</h3>
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <CartesianGrid stroke="#28304a" strokeDasharray="3 3" />
        <XAxis dataKey="time" stroke="#7dd3fc" />
        <YAxis stroke="#7dd3fc" />
        <Tooltip
          contentStyle={{
            background: "#232946",
            border: "1.5px solid #7dd3fc",
            color: "#eaf6fb",
            fontFamily: 'Orbitron, Segoe UI, Arial, sans-serif',
          }}
          labelStyle={{ color: "#7dd3fc" }}
        />
        <Legend wrapperStyle={{ color: "#7dd3fc" }} />
        <Line type="monotone" dataKey="ctr" stroke="#7dd3fc" strokeWidth={3} dot={{ r: 4 }} name="CTR" />
        <Line type="monotone" dataKey="cvr" stroke="#a78bfa" strokeWidth={3} dot={{ r: 4 }} name="CVR" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default PerformanceChart;



