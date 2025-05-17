import React from 'react';
import './BudgetDonut.css';

const BudgetDonut = ({ percent }) => {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="budget-donut">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#ecebff"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#6c63ff"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="budget-donut-label">
        <span>{percent}%</span>
        <div>Budget Used</div>
      </div>
    </div>
  );
};

export default BudgetDonut;

