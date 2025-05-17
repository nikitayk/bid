import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
} from 'recharts';
import './PerformanceChart.css';

const PerformanceChart = ({ data }) => (
  <div className="performance-chart-punk">
    <h3 className="performance-title-punk">CTR & CVR Over Time</h3>
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data}>
        <CartesianGrid stroke="#232946" strokeDasharray="3 3" />
        <XAxis dataKey="time" stroke="#00eaff" />
        <YAxis stroke="#00eaff" />
        <Tooltip
          contentStyle={{
            background: "#232946",
            border: "1.5px solid #00eaff",
            color: "#eaf6fb",
            fontFamily: 'Orbitron, Rajdhani, Arial, sans-serif',
          }}
          labelStyle={{ color: "#00eaff" }}
        />
        <Legend wrapperStyle={{ color: "#00eaff" }} />
        <Line type="monotone" dataKey="ctr" stroke="#00eaff" strokeWidth={3} dot={{ r: 4 }} name="CTR" />
        <Line type="monotone" dataKey="cvr" stroke="#ff00cc" strokeWidth={3} dot={{ r: 4 }} name="CVR" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default PerformanceChart;

